import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Final from "./Final/App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/default" element={<Final />} />
        <Route path="/kyoko" element={<Final />} />
        <Route path="/yoshino" element={<Final />} />
        <Route path="/kaori" element={<Final />} />
        <Route path="/guilherm" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
