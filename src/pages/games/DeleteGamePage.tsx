import DeleteGame from "../../components/games/DeleteGame";
import GameList from "../../components/games/GameList";
// import ArtifactList from "../components/artifacts/ArtifactList";
import React from "react";
const DeleteGamePage = () => {
  return (
      <section>
          <DeleteGame/>
          <GameList/>
      </section>
  )
}

export default DeleteGamePage;