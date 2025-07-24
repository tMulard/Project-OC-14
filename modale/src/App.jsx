import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <button className="modaleBtn" onClick={handleClick}>
        Modal
      </button>
      
      <Modal isHidden={isHidden} isHiddenCross={false} toggleDisplay={handleClick}>
        <h1>Bonjour</h1>
      </Modal>
    </>
  );
}

export default App;
