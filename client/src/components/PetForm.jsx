import { useState, useEffect } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import CancelButton from "./buttons/CancelButton";

const PetForm = (props) => {
  const {
    initialPetName,
    initialDescription,
    initialType,
    initialSkills,
    formTitle,
    successCallback,
  } = props;
  const [name, setName] = useState(initialPetName);
  const [description, setDescription] = useState(initialDescription);
  const [type, setType] = useState(initialType);
  const [skills, setSkills] = useState(initialSkills);

  const nameChange = (newName) => {
    setName(newName);
  };
  const descriptionChange = (newDescription) => {
    setDescription(newDescription);
  };
  const typeChange = (newType) => {
    setType(newType);
  };
  const skillsChange = (newSkills, i) => {
    let tempSkills = skills.map((skill) => skill);
    tempSkills[i] = newSkills;
    setSkills(tempSkills);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    successCallback(name, description, type, skills);
  };

  //* Styles for Material UI
  const styles = {
    paper: {
      width: "35rem",
      padding: "1rem",
    },
    input: {
      marginBottom: "1rem",
    },
    button: {
      width: "100%",
    },
  };
  return (
    <Paper elevation={3} style={styles.paper}>
      <h2>{formTitle}</h2>
      <form>
        <div style={{ display: "flex", gap: "5rem" }}>
          <div>
            {/* Column 1 of form
             ** contains Name, Description, and Type
             */}
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Pet Name</InputLabel>
              <OutlinedInput
                value={name}
                type="text"
                onChange={(e) => nameChange(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Description</InputLabel>
              <OutlinedInput
                value={description}
                type="text"
                onChange={(e) => descriptionChange(e.target.value)}
              />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Type</InputLabel>
              <OutlinedInput
                value={type}
                type="text"
                onChange={(e) => typeChange(e.target.value)}
              />
            </FormControl>
          </div>
          {/* Column 2 contains the three skills */}
          <div>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Skill 1</InputLabel>
              <OutlinedInput
                value={skills[0]}
                type="text"
                onChange={(e) => skillsChange(e.target.value, 0)}
              />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Skill 2</InputLabel>
              <OutlinedInput
                value={skills[1]}
                type="text"
                onChange={(e) => skillsChange(e.target.value, 1)}
              />
            </FormControl>
            <FormControl variant="outlined" style={styles.input}>
              <InputLabel>Skill 3</InputLabel>
              <OutlinedInput
                value={skills[2]}
                type="text"
                onChange={(e) => skillsChange(e.target.value, 2)}
              />
            </FormControl>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: ".5rem",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSubmitHandler}
          >
            Save
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default PetForm;
