<p align="center">
  <img src="frontend/public/center_logo.png" width="250" alt="SheSignals Logo" />
</p>

# SheSignals Autism Screening Application

SheSignals provides a clinical decision support tool for the early detection of autism in girls. It utilizes a layered, web-based questionnaire (36 behavioral and developmental questions) whose responses are run through an optimized machine learning inference pipeline designed specifically to combat the subtlety and camouflage-effects often present in early female presentations of autism.

This repository contains the complete full-stack application, documentation, deployment instructions, and the data science pipeline in one place.

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

## 💻 1. Local Development & Setup

### Prerequisites
- **Node.js**: v18+ (for Next.js frontend)
- **Python**: v3.12+ (for FastAPI backend)
- **uv**: Lightning-fast Python package installer (`pip install uv`)

### Starting the Backend
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

### Starting the Frontend
1. Open a new terminal and navigate to the frontend directory:
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

## 🚀 2. Deployment Guide

We have provided configuration files for one-click setup on popular Platform-as-a-Service environments, as well as Docker.

### Option A: Local / Self-Hosted Docker Compose
You can spin up the entire isolated stack with Docker.
1. Make sure you have Docker and Docker Compose installed.
2. From the root directory, run:
   ```bash
   docker-compose up --build
   ```
   This builds and surfaces the frontend on port `3000` and the backend on port `8001`.

### Option B: Cloud PaaS (Render & Vercel)
**Backend (Render.com)**
1. Connect this GitHub repository to your Render account (Blueprint).
2. Render automatically recognizes `render.yaml` and deploys the backend container, exposing port `8001`.
3. Wait for the backend to finish deploying, then copy the public HTTPS URL (e.g., `https://autism-api.onrender.com`).

**Frontend (Vercel.com)**
1. In Vercel, import the `/frontend` directory as a Next.js project. Vercel will automatically read `frontend/vercel.json`.
2. Before deploying, go to **Settings -> Environment Variables**.
3. Add the key `NEXT_PUBLIC_API_BASE` and paste your Render URL.
4. Deploy the project. The frontend will now communicate securely with your live backend.

### Custom Domains (Using IONIS or similar DNS providers)
To route traffic from your custom domain to Vercel:
1. Go to Vercel -> Project Settings -> Domains.
2. Enter your custom domain (e.g., `screening.shesignals.com`).
3. Vercel will provide an A Record (IP Address) or CNAME.
4. Log into your DNS provider's settings and add the provided A Record/CNAME pointing to Vercel.

### Operations & Scaling
* **Logs**: The backend uses the Python `logging` module. Render has a "Logs" tab where you can view every request code and error trace.
* **Rollbacks**: Vercel offers instantaneous branch rollbacks if a bad UI update breaks the app.
* **Scaling**: Since the ML models run efficiently in memory without a persistent database, you can scale the backend horizontally by simply increasing instance counts manually in Render if demand spikes.

---

## 🧠 3. Machine Learning Engine & Retraining

We utilize a solitary, highly-optimized **XGBoost Classifier**. We previously used a multi-model ensemble, but empirical testing proved that a tuned XGBoost instance, paired with robust feature engineering, significantly outperforms the ensemble—reaching >95% recall for ASD cases.

### Core Enhancements:
* **Feature Engineering**: The raw 36 features are logically grouped into 6 clinical composite scores. We also calculate interaction terms, expanding the dimensionality to **46 features**.
* **Bayesian Optimization (Optuna)** & **Class Imbalance Correction**: Tuned hyper-parameters and scaled positive weights prevent overfitting and correct dataset biases.
* **Threshold Tuning**: The classification threshold (`xgb_threshold.joblib`) is explicitly calculated to maximize *Recall*, minimizing missed referrals.

### How to Retrain the Model
If you receive new data (`Training.csv`) or recalibrate your data science parameters, use the included pipeline script.

*Note: Your local training environment must exactly match the backend environment in `backend/pyproject.toml` (specifically `scikit-learn==1.6.1` and `xgboost>=2.1.4`) to prevent joblib deserialization errors.*

1. Place your updated `Training.csv` in the root directory.
2. From the `backend/` folder, run:
   ```bash
   uv run --no-sync python train_optimized_xgboost.py
   ```
   *This automatically runs Optuna hyperparameter tuning, performs 5-fold cross validation, calculates the optimal threshold, and overwrites the serialization artifacts (`.pkl` and `.joblib`) inside `/backend/models/`.*

### Testing the Model Output
To verify accuracy and metric performance locally on the data without starting the API:
```bash
uv run --no-sync python test_n_rows.py 100
```
*(Tests the first 100 rows of `Training.csv` against the compiled models).*

### Swapping Models & Redeployment
Your trained models are bundled directly in the API. Deploying a new model is as simple as pushing code:
```bash
git add backend/models/
git commit -m "chore: updated base classification models"
git push origin main
```
Render.com will automatically detect the push, rebuild the Docker container, and deploy the updated service with zero downtime.

**Rollback**: If the new models output unpredictable results or misalign with the schema (causing 500 errors), simply run `git revert HEAD` locally and push back to GitHub. The environment will immediately fall back to the previous stable parameters.

---

## 📝 Modifying the Questionnaire
If you need to add or remove questions from the screening test, you must update the application in strict synchronized order because your new models **MUST** be trained on the exact same ordered feature columns:
1. `backend/schemas.py` - Update Pydantic definitions and aliases.
2. `frontend/app/fields.ts` - Update the UI components, types, and the question text.
3. Retrain the model. The feature list (`feature_names.joblib`) must completely match the JSON payload sent by the frontend interface.
