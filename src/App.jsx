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
import PageDetailCarAdmin from "./pages/PageDetailCarAdmin";
import PagesLogin from "./pages/PagesLogin";
import MainPagesAdmin from "./pages/MainPagesAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            {/* Customer */}
            <Route index element={<MainPages />} />
            <Route path="/detail/:mobilId" element={<PageDetailCar />} />
            {/* Admin */}
            <Route path="/admin" element={<MainPagesAdmin />} />
            <Route path="/admin/login" element={<PagesLogin />} />
            <Route path="/admin/input" element={<PageInputCar />} />
            <Route path="/admin/edit/:mobilId" element={<PageEditCar />} />
            {/* <Route path="/admin/detail-admin" element={<PageDetailCarAdmin />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
