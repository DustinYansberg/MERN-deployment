import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const LikeButton = (props) => {
  const { pet } = props;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const disableButton = () => {
    setLiked(!liked);
    setLikes(likes + 1);
  };
  return (
    <>
      <div style={{ display: "flex", padding: "0% 0% 0% 25%", gap: "2rem" }}>
        <Button
          disabled={liked}
          onClick={disableButton}
          color="primary"
          variant="contained"
        >
          Like {pet.name}
        </Button>
        <p>{likes} like(s)</p>
      </div>
    </>
  );
};

export default LikeButton;
