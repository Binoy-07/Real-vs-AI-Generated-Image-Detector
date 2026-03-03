const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/predict", upload.single("image"), (req, res) => {
    const python = spawn("python", ["predict.py", req.file.path]);

    python.stdout.on("data", (data) => {
        res.json(JSON.parse(data.toString()));
    });

    python.stderr.on("data", (data) => {
        console.error(data.toString());
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));