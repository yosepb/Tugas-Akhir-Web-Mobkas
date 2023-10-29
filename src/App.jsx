import "./App.css";
import MainPages from "./pages/MainPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageDetailCar from "./pages/PageDetailCar";
import PageInputCar from "./pages/PageInputCar";
import PageEditCar from "./pages/PageEditCar";
import PagesLogin from "./pages/PagesLogin";
import MainPagesAdmin from "./pages/MainPagesAdmin";

function App() {
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
