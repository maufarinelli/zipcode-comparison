import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import debounce from "lodash/debounce";

const Form = ({ onChange }) => {
  const [value, setValue] = useState("");

  const dispatchChange = value => {
    if (value.length > 2) {
      onChange(value);
    }
  };

  const debouncedChange = debounce(dispatchChange, 250);

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);

    debouncedChange.cancel();
    debouncedChange(value);
  };

  return (
    <form>
      <TextField
        id="outlined-name"
        label="Search"
        value={value}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <p>
        <small>
          Search with the following match level: <b>state, city, postalCode </b>
          (3 or more characters)
        </small>
      </p>
    </form>
  );
};

export default Form;
