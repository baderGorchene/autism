# Model Replacement & Retraining Guide

The IONIS Autism Screening tool uses `fastapi` lifespan events to dynamically load three pre-trained classification models into memory at application startup. This guide explains how to swap the files if you recalibrate your Data Science models in the future.

## 1. Technical Requirements
- Python (Recommend `uv` for package management)
- `scikit-learn` matching version `1.6.1`
- `xgboost` matching version `2.1.3`
- `pandas` for Dataframes

*Note: It is crucial that your local training environment exactly matches the backend environment in `backend/pyproject.toml`, otherwise joblib loading may fail.*

## 2. Serialization Protocol
Once you have trained your new model pipeline (e.g. `grid_search.best_estimator_`), serialize it using `joblib` into a `.pkl` format:
```python
import joblib

# Example replacing the Random Forest
joblib.dump(best_rf_model, "random_forest_model.pkl")
```
### Required Feature Alignment
Your new models **MUST** be trained on the exact same 36 ordered feature columns as defined in the original `feature_names.joblib`. Do not rename, add, or drop features without also updating the frontend UI (`app/fields.ts`) and backend schema (`schemas.py`). 

## 3. Swapping the Artifacts
1. Take your new `.pkl` model exports and replace the old files located in `backend/models/`.
2. Specifically, overwrite:
   - `models/logistic_regression_model.pkl`
   - `models/random_forest_model.pkl`
   - `models/xgboost_model.pkl`

## 4. Redeployment
3. Commit your changes to Git:
   ```bash
   git add backend/models/*.pkl
   git commit -m "chore: updated base classification models"
   git push origin main
   ```
4. Render.com will automatically detect the push, rebuild the Docker container (`uv` will resolve dependencies), and deploy the updated service. Zero downtime deployments apply.

## 5. Rollback Process
If the new models output unpredictable results or misalign with the schema (causing 500 errors), simply run `git revert HEAD` locally, push back to GitHub, and the environment will fall back to the previous stable parameters automatically.
