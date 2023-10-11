import { useEffect, useState } from "react";
import PetForm from "../components/PetForm";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";

const EditPet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  }, []);

  const updatePet = (name, description, type, skills) => {
    const reqObj = { name, description, type, skills };
    axios
      .patch(`http://localhost:8000/api/pets/${id}`, reqObj)
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

  return (
    <>
      <Banner buttons={["cancel"]} />
      {loaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PetForm
            initialPetName={pet.name}
            initialDescription={pet.description}
            initialType={pet.type}
            initialSkills={pet.skills}
            formTitle={`Edit ${pet.name}`}
            successCallback={updatePet}
          />
        </div>
      )}
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
    </>
  );
};

export default EditPet;
