import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/form";
import Results from "./components/Results/results";

const initialResults = {
  here: [],
  mapbox: []
};

const App = () => {
  const [results, setResults] = useState(initialResults);
  // let results = initialResults;

  const handleChange = async value => {
    const newResults = await fetch(
      `http://localhost:8888/results?value=${value}`
    );
    const json = await newResults.json();
    debugger;

    setResults(json);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Zip code accuracy</h1>
        <h2>Mapbox and Here.com comparison</h2>
      </header>
      <main className="padder">
        <div className="padder">
          <Form onChange={handleChange} />
        </div>
        <div>
          <Results className="padder" results={results} />
        </div>
      </main>
    </div>
  );
};

export default App;
