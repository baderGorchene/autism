import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
import joblib
import os

# 1. Load the data
data_path = 'Training.csv'
if not os.path.exists(data_path):
    # This should be run in the parent folder if Training.csv is there
    data_path = 'Training.csv'

print(f"Loading data from {data_path}...")
df = pd.read_csv(data_path)

# 2. Preprocessing (following the notebook logic)
if 'Field' in df.columns:
    df_clean = df.drop(columns=['Field'])
else:
    df_clean = df.copy()

target_col = 'Recommendation'
X = df_clean.drop(columns=[target_col])
y = df_clean[target_col]

# Save feature names for the server
feature_names = X.columns.tolist()
joblib.dump(feature_names, 'feature_names.joblib')
print(f"Saved {len(feature_names)} feature names to feature_names.joblib")

# 3. Train the model (scikit-learn version)
# We use standard LogisticRegression instead of cuML for CPU compatibility
print("Training Logistic Regression model (CPU)...")
model = LogisticRegression(max_iter=1000)
model.fit(X, y)

# 4. Save the model
model_path = 'best_logistic_regression_model.joblib'
joblib.dump(model, model_path)
print(f"Model saved to {model_path}")

# 5. Quick verification
acc = model.score(X, y)
print(f"Training Accuracy: {acc:.4f}")
