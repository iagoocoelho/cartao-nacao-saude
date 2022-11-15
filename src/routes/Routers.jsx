import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";

const Routers = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/:tipo"} element={<Register />} />
  </Routes>
);

export default Routers;
