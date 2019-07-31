import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import Form from "./Components/Form/Form";
import Results from "./Components/Results/Results";
import fetchResults from "./services/fetchResults";

const initialResults = {
  here: [],
  mapbox: []
};

const useStyles = makeStyles({
  app: {
    textAlign: "center"
  },
  header: {
    padding: "20px",
    backgroundColor: "#282c34",
    color: "#fff"
  },
  padder: {
    padding: "20px"
  }
});

const App = () => {
  const [results, setResults] = useState(initialResults);
  const classes = useStyles();

  const handleChange = async value => {
    const newResults = await fetchResults(value);
    setResults(newResults);
  };

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Zip code accuracy</h1>
        <h2>Mapbox and Here.com comparison</h2>
      </header>
      <main className={classes.padder}>
        <div className={classes.padder}>
          <Form onChange={handleChange} />
        </div>
        <div>
          <Results className={classes.padder} results={results} />
        </div>
      </main>
    </div>
  );
};

export default App;
