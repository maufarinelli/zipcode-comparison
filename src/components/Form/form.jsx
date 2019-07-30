import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textField: {
    margin: 0
  }
}));

const Form = ({ onChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleChange = event => {
    const { value } = event.target;

    setValue(value);
    if (value.length > 2) {
      onChange(value);
    }
  };

  return (
    <form>
      <TextField
        id="outlined-name"
        label="Search"
        className={classes.textField}
        value={value}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
};

export default Form;
