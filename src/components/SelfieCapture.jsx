import { useState } from "react";

function SelfieCapture() {
    const [capturedImage, setCapturedImage] = useState(null);
  
    const handleCapture = (event) => {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setCapturedImage(imageUrl);
    };
  
    return (
      <div>
        <h2>Selfie Capture</h2>
        <input type="file" accept="image/*" capture="environment" onChange={handleCapture} />
        {capturedImage && <img src={capturedImage} alt="Captured Selfie" />}
      </div>
    );
  }

  export default SelfieCapture;