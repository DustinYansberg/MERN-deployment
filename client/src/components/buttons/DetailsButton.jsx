import React from "react";
import { Button } from "@mui/material";
const DetailsButton = (props) => {
  const { successCallback } = props;
  return <Button onClick={successCallback}>Details</Button>;
};

export default DetailsButton;
