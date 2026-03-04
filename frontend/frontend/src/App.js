import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // State for image preview
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      // Create a temporary URL for the preview
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  // Cleanup effect to revoke the object URL and prevent memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setResult(null);

    try {
      //const res = await axios.post("http://localhost:5000/predict", formData);
      const res = await axios.post("https://real-vs-ai-generated-image-detector.onrender.com/predict", formData);
      setResult(res.data);
    } catch (error) {
      alert("Backend error");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Real vs AI Generated Image Detector</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
        />

        {/* Image Preview Section */}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Selected preview"
            style={styles.preview}
          />
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Predict"}
        </button>

        {result && (
          <div
            style={{
              ...styles.result,
              backgroundColor:
                result.prediction === "Fake" ? "#ffdddd" : "#ddffdd",
              color: result.prediction === "Fake" ? "red" : "green",
            }}
          >
            {result.confidence.toFixed(2)}% Likely {result.prediction}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
  },
  card: {
    padding: "40px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    background: "#007bff",
    color: "white",
  },
  result: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  // New style for the image preview
  preview: {
    marginTop: "20px",
    maxWidth: "100%",
    maxHeight: "250px",
    objectFit: "contain",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  },
};

export default App;