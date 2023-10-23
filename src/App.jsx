import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/PagesLogin";
import CardCar from "./Component/CardCar";
import CarouselCar from "./Component/CarouselCar";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageDetailCar from "./pages/PageDetailCar";
import PageInputCarTes from "./pages/PageInputCarTes";
import PageInputCar from "./pages/PageInputCar";
import PageEditCar from "./pages/PageEditCar";
import PageDetailCarAdmin from "./pages/PageDetailCarAdmin";
import PagesLogin from "./pages/PagesLogin";
import MainPagesAdmin from "./pages/MainPagesAdmin";

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
            <Route path="/admin" element={<MainPagesAdmin />} />
            <Route path="/admin/login" element={<PagesLogin />} />
            <Route
              path="/admin/detail-admin"
              element={<PageDetailCarAdmin />}
            />
            {/* <Route path="/admin/input" element={<PageInputCarTes />} /> */}
            <Route path="/admin/input" element={<PageInputCar />} />
            <Route path="/admin/edit" element={<PageEditCar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
