import React, { useEffect } from "react";
import { Home } from "./pages/home";

function App() {
  useEffect(() => {
    function ReactIsInDevelomentMode() {
      return "_self" in React.createElement("div");
    }
    console.log("IsDev? ", ReactIsInDevelomentMode());
  }, []);
  return <Home />;
}

export default App;
