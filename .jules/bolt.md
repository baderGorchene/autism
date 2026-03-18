## 2026-03-17 - FastAPI Sync vs Async for ML Inference
**Learning:** In FastAPI, declaring an endpoint as `async def` forces it to run on the main event loop. If the endpoint performs synchronous, CPU-bound operations (like `model.predict()` using scikit-learn), it will block the entire event loop and destroy concurrent performance.
**Action:** Always declare endpoints with synchronous CPU-bound or blocking I/O operations as standard `def` (not `async def`). FastAPI will automatically route these to a threadpool, preserving event loop responsiveness for other concurrent requests.
