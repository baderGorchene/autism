from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np
import os

app = FastAPI(title="Autism Screening API")

# Enable CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model and features
MODEL_PATH = 'best_logistic_regression_model.joblib'
FEATURES_PATH = 'feature_names.joblib'

if not os.path.exists(MODEL_PATH) or not os.path.exists(FEATURES_PATH):
    raise RuntimeError(f"Model or feature names not found. Run train_cpu_model.py first.")

model = joblib.load(MODEL_PATH)
feature_names = joblib.load(FEATURES_PATH)

@app.get("/")
def read_root():
    return {"message": "Autism Screening API is running"}

@app.post("/predict")
def predict(req: dict):
    # ⚡ OPTIMIZATION: Removed `async` from this endpoint.
    # Since `model.predict()` is a synchronous, CPU-bound operation, using `async def`
    # would block the single-threaded event loop, preventing FastAPI from handling
    # other concurrent requests. By using a standard `def`, FastAPI automatically
    # runs this function in an external threadpool, preserving high concurrency.
    try:
        # The frontend sends { features: { ... } }
        data = req.get("features", {})
        
        # Mapping input data to the expected feature list
        input_list = []
        for feat in feature_names:
            val = data.get(feat, 0)
            # Basic validation/conversion
            try:
                input_list.append(float(val))
            except (ValueError, TypeError):
                input_list.append(0.0)
        
        X_input = np.array([input_list])
        
        # Prediction
        prediction = int(model.predict(X_input)[0])
        probability = model.predict_proba(X_input)[0].tolist()
        
        # 1 usually means "Refer for Evaluation", 0 means "No referral"
        recommendation_text = "Refer for Evaluation" if prediction == 1 else "No immediate referral indicated"
        
        return {
            "prediction": prediction,
            "Recommendation": recommendation_text,
            "vote_count": 1 if prediction == 1 else 0, # Mocking for UI
            "votes": [prediction], # Mocking for UI
            "probability": {
                "0": round(probability[0], 4),
                "1": round(probability[1], 4)
            }
        }
    except Exception as e:
        print(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
