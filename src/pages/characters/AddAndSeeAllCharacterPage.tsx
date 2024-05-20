import AddNewCharacter from "../../components/gameCharacters/AddNewCharacter";
import CharacterList from "../../components/gameCharacters/CharacterList";
import React from "react";

const AddAndSeeAllCharacterPage = () => {
  return (
      <section>
          <AddNewCharacter/>
          <CharacterList/>
          
      </section>
  )
}

export default AddAndSeeAllCharacterPage;