import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [ counter, setCounter ] = useState(1);

  const handleClick = (() => {
    setCounter((counter) => counter + 1);
  });

  useEffect(() => {
      document.title = `Count: (${counter})`;       
  },[counter]);

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          <div>
              <button onClick={handleClick}>Count ({counter})</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
