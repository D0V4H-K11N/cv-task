import React from 'react';

const FloatingButton = () => {
  const handleButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/CV-Ledio-Duda.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <button className="floating-button" onClick={handleButtonClick}>
      Download PDF
    </button>
  );
};

export default FloatingButton;