import React from "react";
import "./ECGFeatures.css"; // External CSS for additional styles
import styled from "styled-components";
import bggimage from "../assets/images.jpeg"; // Ensure correct path

const ECGFeatures = () => {
  return (
    <BackgroundWrapper>
      <div className="ecg-container">
        <h2 className="ecg-title">🚑 ECG Classification Using AI</h2>
        <p className="ecg-subtitle">
          AI-powered ECG classification system for <strong>real-time</strong> and <strong>multi-label</strong> cardiac anomaly detection.
        </p>

        <div className="ecg-grid">
          <FeatureItem icon="🧠" title="Multi-Label Classification" desc="Detects multiple heart conditions from a single ECG signal." />
          <FeatureItem icon="⚡" title="Real-Time Analysis" desc="Minimizes false alarms and ensures faster monitoring." />
          <FeatureItem icon="📊" title="Machine Learning Models" desc="Uses advanced classifiers like BR, CC, MLkNN, MLSVM." />
          <FeatureItem icon="🎯" title="High Accuracy" desc="Evaluated using Hamming Loss, Jaccard Similarity, and F1 Score." />
          <FeatureItem icon="🛠" title="Noise Reduction" desc="Enhances ECG signal quality for better anomaly detection." />
          <FeatureItem icon="📂" title="Datasets Used" desc="MIT-BIH Arrhythmia, CCDD – Standard Medical Datasets." />
        </div>

        <div className="ecg-future">
          <h3>🚀 Future Scope</h3>
          <p>Enhancing real-time classification and <strong>optimizing feature selection</strong> for better <strong>clinical accuracy</strong>.</p>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

// ✅ Styled Background Component
const BackgroundWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
   background-image: url("./assets/back.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px;
`;

// Feature Item Component
const FeatureItem = ({ icon, title, desc }) => (
  <div className="ecg-feature">
    <span className="ecg-icon">{icon}</span>
    <h4 className="ecg-feature-title">{title}</h4>
    <p className="ecg-feature-desc">{desc}</p>
  </div>
);

export default ECGFeatures;
