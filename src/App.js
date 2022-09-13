import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          padding: 25,
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: 400,
          height: 200,
          fontSize: 25,
          borderRadius: 25,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
          color: 'white',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <button
        style={{
          display: 'block',
          justifyContent: 'center',
          fontSize: 15,
          margin: '0 auto',
        }}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
