import React from "react";
import PetForm from "../components/PetForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

const NewPet = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const saveNewPet = (name, description, type, skills) => {
    const reqObj = {
      name,
      description,
      type,
      skills,
    };

    axios
      .post("http://localhost:8000/api/pets", reqObj)
      .then((res) => {
        navigate("/pets");
      })
      .catch((err) => {
        const errorResponse = err.response.data; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        if (errorResponse.errors) {
          for (const key of Object.keys(errorResponse.errors)) {
            // Loop through all errors and get the messages
            errorArr.push(errorResponse.errors[key].message);
          }
        }
        if (errorResponse.keyValue) {
          errorArr.push("That Name already exists");
        }
        setErrors(errorArr);
      });
  };

  const formCenteringStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <Banner buttons={["cancel"]} />
      <div style={formCenteringStyle}>
        <PetForm
          formTitle="Add a New Pet:"
          initialPetName=""
          initialDescription=""
          initialType=""
          initialSkills={["", "", ""]}
          successCallback={saveNewPet}
        />
      </div>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
    </>
  );
};

export default NewPet;
