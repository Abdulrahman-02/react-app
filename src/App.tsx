import React, { useState } from 'react';

function HelloReact() {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };


  return (
    <div style={centerStyle}>
      <h1 style={{ textAlign: 'center' }}>{showText && 'Hello React'}</h1>
      <button onClick={toggleText} style={{ marginTop: '1rem' }}>
        Toggle Text
      </button>
    </div>
  );
}

export default HelloReact;
