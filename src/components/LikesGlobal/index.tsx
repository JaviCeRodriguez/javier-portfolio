import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { database } from "@/config/firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { StyledLikesGlobal } from "./index.styled";

const LikesGlobal: React.FC = () => {
  const [likes, setLikes] = useState({ hearts: 0, stars: 0, mates: 0 });

  const dbInstance = collection(database, "likes");
  const likesRef = doc(database, "likes", "xFD9B8X5pOnGA7MHvEhv");

  const updateLikes = (like: Object) => {
    const newLikes = { ...likes, ...like };
    updateDoc(likesRef, newLikes);
    getLikes();
  };

  const getLikes = () => {
    getDocs(dbInstance).then((data: any) => {
      setLikes({ ...data.docs[0].data() });
    });
  };

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <StyledLikesGlobal>
      <Button
        color="error"
        onClick={() => updateLikes({ hearts: likes.hearts + 1 })}
        auto
        light
      >
        💖 {likes.hearts}
      </Button>
      <Button
        color="warning"
        onClick={() => updateLikes({ stars: likes.stars + 1 })}
        auto
        light
      >
        ⭐ {likes.stars}
      </Button>
      <Button
        color="success"
        onClick={() => updateLikes({ mates: likes.mates + 1 })}
        auto
        light
      >
        🧉 {likes.mates}
      </Button>
    </StyledLikesGlobal>
  );
};

export default LikesGlobal;
