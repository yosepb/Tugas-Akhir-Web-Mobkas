import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageDetailCar from "./pages/PageDetailCar";
import PageInputCar from "./pages/PageInputCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/detail" element={<PageDetailCar />} />
          <Route path="/input" element={<PageInputCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
