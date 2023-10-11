import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PetList from "../components/PetList";
import Banner from "../components/Banner";

const Main = () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        res.data.sort((a, b) => {
          const aType = a.type.toLowerCase();
          const bType = b.type.toLowerCase();
          return aType < bType ? -1 : aType > bType ? 1 : 0;
        });
        setPets(res.data);
      }, setLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  /**
   * ? Take in an id, and use this id to delete the author associated with it form the server.
   * ? Afterwards, remove the now deleted Author form the dom
   * @param {Number} id
   * @returns {undefined}
   */
  const removeFromDom = (id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        const filteredPetList = pets.filter((pet) => pet._id !== id);
        setPets(filteredPetList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Banner buttons={["add"]} removeFromDom={removeFromDom} />
      <h3 style={{ textAlign: "left", paddingLeft: "10%" }}>
        These pets are looking for a good home
      </h3>
      <br />
      {loaded && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PetList pets={pets} removeFromDom={removeFromDom} />
        </div>
      )}
    </>
  );
};

export default Main;
