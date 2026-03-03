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

## Sample Output🟢

Example:
51.71% Likely Real
<img width="565" height="700" alt="Screenshot 2026-03-03 191131" src="https://github.com/user-attachments/assets/fab7e877-2bf4-409c-bd8a-834138767683" />

99.28% Likely Fake
<img width="560" height="662" alt="Screenshot 2026-03-03 185514" src="https://github.com/user-attachments/assets/8ef2aa56-8100-42a8-b53e-52b3b00f2c93" />
---



## Author

 Binoy Chakraborty

