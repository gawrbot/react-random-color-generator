import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
      }}
    >
      <div
        style={{
          width: 400,
          height: 200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          borderRadius: 25,
        }}
      >
        Generated Color: {color}
      </div>
      <button
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 15,
        }}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
