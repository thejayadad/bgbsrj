
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
