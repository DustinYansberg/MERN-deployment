import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
  const navigate = useNavigate();
  const cancelHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <Button
      type="cancel"
      variant="outlined"
      color="primary"
      onClick={cancelHandler}
    >
      Back To home
    </Button>
  );
};

export default CancelButton;
