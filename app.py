from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
import joblib
import scipy.sparse
import io
import os
from flask_cors import CORS
from tensorflow.keras.preprocessing import image
import skmultilearn.adapt.mlaram
from PIL import Image

os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

# Fix MLARAM sparse issue
def _concatenate_with_negation(row):
    ones = np.ones(row.shape)  # Use NumPy instead of SciPy
    if scipy.sparse.issparse(row):
        return scipy.sparse.hstack((row, ones - row))
    return np.hstack((row, ones - row))

# Apply the fix to MLARAM
skmultilearn.adapt.mlaram._concatenate_with_negation = _concatenate_with_negation

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all routes

# Load models
feature_extractor = tf.keras.models.load_model("mobilenetv2_model.h5")
binary_model = joblib.load("binary_relevance.pkl")
mlaram_model = joblib.load("mlaram.pkl")
svm_model = joblib.load("multi_label_svm.pkl")

# Label mapping
label_mapping = {0: 'F', 1: 'M', 2: 'N', 3: 'Q', 4: 'S', 5: 'V'}

def preprocess_image(img_bytes):
    """Load and preprocess image from memory (without saving locally)."""
    img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

def classify_ecg(img_bytes):
    """Classify ECG image."""
    img_array = preprocess_image(img_bytes)
    features = feature_extractor.predict(img_array).reshape(1, -1)

    binary_pred = np.array([clf.predict(features)[0] for clf in binary_model]).reshape(1, -1)
    mlaram_pred = mlaram_model.predict(features)
    svm_pred = svm_model.predict(features).toarray()

    ensemble_pred = np.round((binary_pred + mlaram_pred + svm_pred) / 3)
    predicted_classes = [label_mapping[i] for i, val in enumerate(ensemble_pred[0]) if val == 1]

    return predicted_classes if predicted_classes else ["Uncertain"]

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        img_bytes = file.read()  # Read file into memory
        prediction = classify_ecg(img_bytes)
        print(prediction)

        return jsonify({"prediction": prediction}), 200
    except Exception as e:
        return jsonify({"error": f"Error in classification: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
