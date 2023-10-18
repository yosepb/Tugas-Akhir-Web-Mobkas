import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./pages/PageLayout"
import PageDetailCar from "./pages/PageDetailCar"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route path="/detailcar" element={<PageDetailCar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
