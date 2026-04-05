# SheSignals Autism Screening Application

SheSignals provides a clinical decision support tool for the early detection of autism in girls. It utilizes a layered, web-based questionnaire (36 behavioral and developmental questions) whose responses are run through an optimized machine learning inference pipeline designed specifically to combat the subtlety and camouflage-effects often present in early female presentations of autism.

This repository contains the complete full-stack application and data science pipeline.

---

## 🏗️ Project Architecture

The project is structured into three main domains:
1. **Frontend**: A modern Next.js React application offering an accessible and responsive screening interface.
2. **Backend**: A FastAPI Python application serving the machine-learning inference engine with built-in rate-limiting and cross-origin support.
3. **Machine Learning Pipeline**: Data processing, feature engineering, and a Bayesian-optimized XGBoost model.

### Key Directories
- `/frontend/` - Next.js (TypeScript, Tailwind CSS, App Router)
- `/backend/` - FastAPI, Python 3.12, `uv` package manager
- `/backend/models/` - Serialized ML artifacts (model, features, and decision threshold)
- `/backend/train_optimized_xgboost.py` - Complete training, tuning, and threshold-optimization pipeline.

---

## 🧠 Machine Learning Engine

We utilize a solitary, highly-optimized **XGBoost Classifier**. We previously used a multi-model ensemble (Logistic Regression, Random Forest, XGBoost), but empirical testing and optimization proved that a tuned XGBoost instance, paired with robust feature engineering, significantly outperforms the ensemble—reaching >95% recall for ASD cases.

### Core Enhancements:
* **Feature Engineering**: The raw 36 features are logically grouped into 6 clinical composite scores (Social, Sensorial, Emotional, Communication, Masking, and Routine). We also calculate interaction terms (e.g. `Family History × Total Symptom Score`), expanding the dimensionality to **46 features** for XGBoost.
* **Bayesian Optimization (Optuna)**: The model's hyper-parameters were tuned over hundreds of cross-validated trials to maximize the F1-score and prevent overfitting.
* **Class Imbalance Correction**: Scaled positive weight adjustments apply penalty weights during training to correct for dataset biases (No-ASD to ASD ratios).
* **Threshold Tuning**: The final classification threshold is explicitly calculated to maximize *Recall* (minimizing false negatives/missed referrrals) while holding precision above 85%. This tuned threshold is saved in `xgb_threshold.joblib`.

### Inference Flow
1. API receives 36 raw features.
2. `server.py` derives the 10 engineered composite features dynamically.
3. The 46-dimensional vector is passed to `xgboost_model.pkl`.
4. Output probability is compared against `xgb_threshold.joblib` to determine the clinical recommendation.

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js**: v18+ (for Next.js frontend)
- **Python**: v3.12+ (for FastAPI backend)
- **uv**: Lightning-fast Python package installer (`pip install uv`)

### 2. Running the Backend
1. Navigate to the backend directory: 
   ```bash
   cd backend
   ```
2. Install dependencies via `uv`:
   ```bash
   uv sync
   ```
3. Run the development server:
   ```bash
   uv run python server.py
   ```
   *The API will start at `http://localhost:8001`.*

### 3. Running the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The UI will start at `http://localhost:3000`.*

---

## 📊 Retraining & Evaluation Scripts

If you receive new data (`Training.csv`), you can retrain the engine and evaluate performance using the included scripts in the `backend/` directory:

* **Train the Optimized Model**: 
  ```bash
  uv run --no-sync python train_optimized_xgboost.py
  ```
  *(This will run Optuna hyperparameter tuning, perform strict 5-fold cross validation, calculate the optimal clinical threshold, and overwrite the artifacts in `/models/`.)*

* **Evaluate N-rows / Smoke Test**:
  ```bash
  uv run --no-sync python test_n_rows.py 100
  ```
  *(Tests the first 100 rows of `Training.csv` against the currently compiled models to verify expected accuracy, precision, and recall).*

---

## 🚀 Deployment Guide

### Option A: Docker Compose (Local/VPS)
You can spin up the entire isolated stack with Docker.
```bash
docker-compose up --build
```
This builds and surfaces the frontend on port `3000` and the backend on port `8001`.

### Option B: Cloud PaaS (Recommended)
You can deploy changes with zero downtime to Vercel/Render using the provided configuration files:

1. **Backend (Render.com)**
   - Connect this repository to your Render account.
   - Render automatically recognizes `render.yaml` and deploys the backend container, exposing port `8001`.
   - Copy the public Render URL (e.g., `https://autism-api.onrender.com`).

2. **Frontend (Vercel.com)**
   - Connect the `/frontend` directory to a new Vercel project (it will read `vercel.json`).
   - In the Vercel Settings -> **Environment Variables**, add the key `NEXT_PUBLIC_API_BASE` and set it to your Render backend URL.
   - Deploy.

*Note: Changes to ML Models are bundled in the backend Python codebase. If you run `train_optimized_xgboost.py` and commit the new `.pkl`/`.joblib` files to `main`, Render will automatically redeploy the backend and use the updated inference algorithms.*

---

## 📝 Modifying the Questionnaire
If you need to add or remove questions from the screening test, you must update the application in strict synchronized order:
1. `backend/schemas.py` - Update Pydantic definitions and aliases.
2. `frontend/app/fields.ts` - Update the UI components, types, and the question text.
3. Retrain the model. The feature list (`feature_names.joblib`) must completely match the JSON payload sent by the frontend interface.
