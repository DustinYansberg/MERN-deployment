import React from "react";
import CancelButton from "./buttons/CancelButton";
import AdoptButton from "./buttons/AdoptButton";
import AddPetButton from "./buttons/AddPetButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = (props) => {
  const { buttons, id, removeFromDom, petName } = props;
  const navigate = useNavigate();
  const bannerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2% 25% 2% 10%",
  };
  const buttonStyle = {
    display: "flex",
    gap: "2rem",
  };

  const deleteButtonFunction = (idToDelete) => {
    axios
      .delete(`http://localhost:8000/api/pets/${idToDelete}`)
      .then((res) => {
        console.log(res);
        navigate("/pets");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={bannerStyle}>
      <h1>Pet Shelter</h1>
      <div style={buttonStyle}>
        {buttons.includes("cancel") && <CancelButton />}
        {buttons.includes("adopt") && (
          <AdoptButton
            successCallback={() => deleteButtonFunction(id)}
            petName={petName}
          />
        )}
        {buttons.includes("add") && (
          <AddPetButton successCallback={() => navigate("/pets/new")} />
        )}
      </div>
    </div>
  );
};

export default Banner;
