import React from "react";
import { Button } from "@mui/material";

export default (props) => {
  const { successCallback } = props;
  return (
    <Button color="success" variant="contained" onClick={successCallback}>
      Add a Pet
    </Button>
  );
};
