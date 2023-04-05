
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Update from "./pages/Update";

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </div>
  );
}

export default App;
