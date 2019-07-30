import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ResultsList from "../ResultsList/resultsList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Results = ({ results }) => {
  const classes = useStyles();

  debugger;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h3>Mapbox</h3>
          <ResultsList results={results.mapbox} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h3>Here.com</h3>
          <ResultsList results={results.here} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Results;
