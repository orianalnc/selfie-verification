import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function VerificationCanvas() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div>
      <h2>Verification Selfie</h2>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={captureImage}>Capture Image</button>
      </div>
      {capturedImage && (
        <div>
          <h3>Captured Image</h3>
          <img src={capturedImage} alt="captured" />
        </div>
      )}
    </div>
  );
}

export default VerificationCanvas;