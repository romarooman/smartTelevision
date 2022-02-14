import { BackgroundVideoPage } from "./components/BackgroundVideoPage";
import { Baner } from "./components/Baner";
import { BurgerMenu } from "./components/BurgerMenu";

import "./App.css";
import { useState } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <BackgroundVideoPage />;
        <Baner />
      </main>

      <BurgerMenu active={menuActive} setActive={setMenuActive }/>
      {/* <PhonePage /> */}
    </div>
  );
}

export default App;
