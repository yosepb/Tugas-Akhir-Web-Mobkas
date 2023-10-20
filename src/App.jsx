import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/PagesLogin";
import CardCar from "./Component/CardCar";
import CarouselCar from "./Component/CarouselCar";
import MainPages from "./pages/MainPages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MainPages />
      {/* <CarouselCar /> */}
    </div>
  );
}

export default App;
