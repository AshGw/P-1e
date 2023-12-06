import { useState } from 'react';

function Signed() {
  const [result, setResult] = useState(null);

  const handleClick = () => {
    fetch('/api/sess')
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setResult(error);
      });
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>
          Click me to see if youre actually signed in
        </button>
      </div>
      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default Signed;
