import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyle = makeStyles(() => ({
  listItem: {
    animation: "slide-up 0.4s ease",

    "&:not(:last-child)": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    }
  }
}));

const ResultsList = ({ results }) => {
  const classes = useStyle();

  return (
    <List>
      {results.map((result, i) => (
        <ListItem key={`${result}-${i}`} className={classes.listItem}>
          <ListItemText primary={result} />
        </ListItem>
      ))}
    </List>
  );
};

export default ResultsList;
