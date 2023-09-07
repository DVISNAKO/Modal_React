import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
  const [modalActive, setMoadalActive] = useState(true);
  return (
    <div className="App">
      <h1>Modal Project</h1>
      <button className="open-btn" onClick={() => setMoadalActive(true)}>
        click on me
      </button>
      <div></div>
      <Modal active={modalActive} setActive={setMoadalActive}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
          Repellendus magnam consequuntur officiis,
          <br></br>
          laudantium vero quaerat corporis, hic totam iure dolores vitae
          adipisci
          <br></br>
          praesentium ad nulla fugiat quos reiciendis distinctio. Error.
        </h1>
      </Modal>
    </div>
  );
}

export default App;
