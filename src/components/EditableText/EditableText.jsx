import React, { useState, useEffect } from 'react';

const EditableText = () => {
  const [text, setText] = useState('');

  // Load text from local storage when component mounts
  useEffect(() => {
    const savedText = localStorage.getItem('editableText');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Update local storage and state when text changes
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    localStorage.setItem('editableText', newText);
  };

  return (
    <div>
      <h2>Edit the Text:</h2>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
};

export default EditableText;
