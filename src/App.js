import "./App.css";
import TitleChangler from "./TitleChangler";

function App() {
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
          <TitleChangler />
        </div>
      </div>
    </div>
  );
}

export default App;
