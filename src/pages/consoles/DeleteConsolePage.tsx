import DeleteConsole from "../../components/consoles/DeleteConsole";
import ConsoleList from "../../components/consoles/ConsoleListe";
// import ArtifactList from "../components/artifacts/ArtifactList";
import React from "react";
const DeleteConsolePage = () => {
  return (
      <section>
          <DeleteConsole/>
          <ConsoleList/>
      </section>
  )
}

export default DeleteConsolePage;