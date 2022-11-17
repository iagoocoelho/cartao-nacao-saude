import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import Toast from "components/toast/Toast";

const Routers = () => (
  <>
    <Routes>
      <Route exact path={"/cartao-nacao-saude"} element={<Home />} />
      <Route path={"/cartao-nacao-saude/:tipo"} element={<Register />} />
    </Routes>
    <Toast />
  </>
);

export default Routers;
