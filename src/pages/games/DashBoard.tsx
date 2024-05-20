import AddNewGame from "../../components/games/AddNewGame";
import GameList from "../../components/games/GameList";
import React from "react";
const DashBoard = () => {
  return (
      <section>
          <AddNewGame/>
          <GameList/>
          
      </section>
  )
}

export default DashBoard;