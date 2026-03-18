import requests
import json
import time
import subprocess

def test_predict():
    # Write a mock training data file so we can run the server
    with open('Training.csv', 'w') as f:
        f.write("Age of the girl,Recommendation\n")
        f.write("5,1\n")
        f.write("6,0\n")

    # Run the training script
    subprocess.run(["uv", "run", "python", "train_cpu_model.py"], check=True)

    # Start the server in the background
    server_process = subprocess.Popen(["uv", "run", "python", "server.py"])
    
    try:
        # Wait for the server to start
        time.sleep(5)

        url = "http://localhost:8001/predict"
        # Mock payload with sample feature names (matchingTraining.csv)
        payload = {
            "features": {
                "Age of the girl": 5,
            }
        }

        print(f"Testing {url}...")
        response = requests.post(url, json=payload)
        print(f"Status Code: {response.status_code}")
        print("Response JSON:")
        print(json.dumps(response.json(), indent=2))

        assert response.status_code == 200
        assert "prediction" in response.json()
        print("Test passed successfully!")
    finally:
        server_process.terminate()

if __name__ == "__main__":
    test_predict()
