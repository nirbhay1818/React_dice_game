import { useState } from "react";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";

function App() {

  const [isGameStarted, setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted(!isGameStarted)
  }

  return (
    <>
      <div>
      {
        isGameStarted ? <Gameplay/> : <Startgame toggle={toggleGamePlay}/>
      }  
      </div>
    </>
  );
}

export default App;

