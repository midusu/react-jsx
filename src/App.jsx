/*import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 style={{ textAlign: "center", marginTop: "50px" }}>
      Hello! Current Time: {time}
    </h1>
  );
}

export default App;
*/
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <h1 key={index}>
          Hello! Current Time: {time}
        </h1>
      ))}
    </div>
  );
}

export default App;