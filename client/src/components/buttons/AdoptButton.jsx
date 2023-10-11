import React from "react";
import { Button } from "@mui/material";

export default (props) => {
  const { successCallback, petName } = props;
  return (
    <Button color="error" variant="contained" onClick={successCallback}>
      Adopt {petName}
    </Button>
  );
};
