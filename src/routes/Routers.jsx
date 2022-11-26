import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import Toast from "components/toast/Toast";

const Routers = () => (
  <>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:tipo"} element={<Register />} />
    </Routes>
    <Toast />
  </>
);

export default Routers;
