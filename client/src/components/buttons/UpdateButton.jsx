import React from "react";
import { Button } from "@mui/material";
const UpdateButton = (props) => {
  const { successCallback } = props;
  return <Button onClick={successCallback}>Update</Button>;
};

export default UpdateButton;
