import DeleteCharacter from "../../components/gameCharacters/DeleteCharacter";
import CharacterList from "../../components/gameCharacters/CharacterList";
// import ArtifactList from "../components/artifacts/ArtifactList";
import React from "react";
const DeleteCharacterPage = () => {
  return (
      <section>
          <DeleteCharacter/>
          <CharacterList/>
      </section>
  )
}

export default DeleteCharacterPage;