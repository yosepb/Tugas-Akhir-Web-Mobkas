import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/PagesLogin";
import CardCar from "./Component/CardCar";
import CarouselCar from "./Component/CarouselCar";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageDetailCar from "./pages/PageDetailCar";
import PageInputCar from "./pages/PageInputCar";
import PageEditCar from "./pages/PageEditCar";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     display: "flex",
    //     justifyContent: "center",
    //   }}
    // >
    //   <MainPages />
    //   {/* <CarouselCar /> */}
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<MainPages />} />
            <Route path="/detail" element={<PageDetailCar />} />
            <Route path="/input" element={<PageInputCar />} />
            <Route path="/edit" element={<PageEditCar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
