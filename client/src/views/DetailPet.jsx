import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";
import { Paper } from "@mui/material";
import LikeButton from "../components/buttons/LikeButton";

const DetailPet = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
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

  // Style for the left side of the page
  const headerStyle = { textAlign: "left", lineHeight: "25px" };

  return (
    <>
      {loaded && (
        <>
          <Banner
            buttons={["cancel", "adopt"]}
            id={pet._id}
            petName={pet.name}
          />
          <h1 style={{ textAlign: "left", padding: "0px 0px 0px 10%" }}>
            Details about: {pet.name}
          </h1>
          <Paper
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "2% 25% 2% 10%",
              padding: "0% 20% 0% 15%",
            }}
          >
            <div>
              <h3 style={headerStyle}>Pet Type:</h3>
              <h3 style={headerStyle}>Description:</h3>
              <h3 style={headerStyle}>Skills:</h3>
            </div>
            <div>
              {" "}
              <p style={{ textAlign: "left", lineHeight: "29px" }}>
                {pet.type}
              </p>
              <p style={{ textAlign: "left", lineHeight: "29px" }}>
                {pet.description}
              </p>
              <p style={{ textAlign: "left" }}>{pet.skills[0]}</p>
              <p style={{ textAlign: "left" }}>{pet.skills[1]}</p>
              <p style={{ textAlign: "left" }}>{pet.skills[2]}</p>
            </div>
          </Paper>
          <LikeButton pet={pet} />
        </>
      )}
    </>
  );
};

export default DetailPet;
