# Real vs AI Generated Image Detection System

This project is a full-stack web application that detects whether an image is Real or AI-Generated (Fake).

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- AI Model: PyTorch (ResNet18)
- Image Upload: Multer
- Python Integration: child_process

---

## Project Architecture

1. User uploads an image from React frontend.
2. Image is sent to Express backend via POST /predict.
3. Backend calls Python script.
4. PyTorch model processes the image.
5. Prediction and confidence score are returned as JSON.
6. Frontend displays the result.

---

## How to Run

### Backend

1. Go to backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Run server:
   node server.js

Server runs at:
http://localhost:5000

---

### Frontend

1. Go to frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start frontend:
   npm start

Frontend runs at:
http://localhost:3000

---

## Model Training

Model was fine-tuned using ResNet18 with transfer learning in Google Colab.
Dataset: Real vs AI Generated images dataset (subset for faster training).

---

## Sample Output

Example:
99.28% Likely Fake

---

## Author

Your Name Binoy Chakraborty

