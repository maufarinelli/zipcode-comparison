import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const ResultsList = ({ results }) => (
  <List>
    {results.map(result => (
      <>
        <ListItem>
          <ListItemText primary={result.place_name || result.label} />
        </ListItem>
        <Divider />
      </>
    ))}
  </List>
);

export default ResultsList;
