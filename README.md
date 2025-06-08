## HeartSense AI — ECG Classification and Report Delivery System
HeartSense AI is an end-to-end ECG image classification and reporting system. It uses advanced deep learning and ensemble models to identify various heart conditions from ECG scans. Users can upload ECG images, receive predictions, and even get a human-friendly report delivered to their email.

This project combines a machine learning pipeline with a robust web backend to offer an accessible solution for early detection and awareness of heart conditions.

What This Project Does
Accepts ECG images from users

Preprocesses and extracts features using a trained MobileNetV2 model

Uses an ensemble of three classifiers (Binary Relevance, MLARAM, and Multi-label SVM) to predict possible ECG abnormalities

Balances dataset classes using controlled undersampling during preprocessing to handle class imbalance

Sends an email report with a short explanation and helpful resources to the user

Types of ECG Conditions Detected
The system supports multi-label predictions. It can detect one or more of the following conditions:

Normal ECG

Supraventricular Arrhythmia (S)

Ventricular Arrhythmia (V)

Myocardial Infarction (Q)

Hypertrophy (F)

Fusion of beats or Miscellaneous (M)

Uncertain (when prediction confidence is low)

Each classification comes with an explanation and a trusted external link for further reading.

Components and Structure
1. Model Training and Preprocessing
Images were resized to 224x224 pixels and converted to grayscale

Class imbalance was handled using undersampling. Classes with more than 4000 images were randomly downsampled

A pre-trained MobileNetV2 model was used as a feature extractor

Extracted features were passed to three different multi-label classifiers

Predictions from all three classifiers were combined using ensemble voting

2. Flask API for Prediction
Provides a /predict route that accepts an image

Internally uses the loaded models to preprocess, extract features, and return predictions

Returns the predicted labels in JSON format

3. Node.js Server
Handles user authentication and contact form submissions

Includes secure password handling using bcrypt

Stores user data in MongoDB

Offers login, registration, and a /send-report API to email ECG results to users

How to Use
For Users
Upload an ECG image via the front-end or API

View predicted heart conditions returned by the system

Optionally provide an email address to receive a personalized report with links for further reading

For Developers
Train your model using the preprocessing pipeline (grayscale + balanced dataset)

Export trained models: feature extractor (.h5) and classifiers (.pkl)

Start the Flask server for prediction

Start the Node.js server for user management and emailing reports

Technologies Used
Python (Flask, TensorFlow, scikit-learn, skmultilearn)

Node.js and Express

MongoDB

bcrypt for password hashing

nodemailer for email delivery

HTML and JavaScript (for the frontend, if applicable)

Key Features
Ensemble-based ECG classification from images

Intelligent preprocessing and class balancing

Multi-label output (more than one condition per image possible)

Password-secured authentication system with hashing

Personalized ECG reports sent by email

Easy to extend and integrate with a frontend or mobile app

Why It Matters
HeartSense AI makes automated ECG classification more accessible. Rather than relying solely on real-time ECG signals, it works with ECG images—making it compatible with printed scans, digital PDFs, or camera captures. By providing personalized, interpretable results, this project supports patients and healthcare providers in identifying early signs of cardiovascular risk.

Future Improvements
Add support for PDF uploads and OCR-based ECG extraction

Visualize feature maps or prediction confidence

Deploy the model using Docker or a cloud platform

Integrate doctor feedback loop for continuous improvemen
