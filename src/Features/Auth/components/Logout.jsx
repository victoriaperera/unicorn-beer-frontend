import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAdminToken } from "../../Dashboard/adminSlice";
import { fromCheckOut } from "../../Shop/shopSlice";

function Logout() {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    if (user != null) {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/auth/logout`);
      setResponse(res);
      dispatch(clearToken());
      dispatch(fromCheckOut(false));
      navigate("/");
    }
    if (admin != null) {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/auth/logout`);
      setResponse(res);
      dispatch(clearAdminToken());

      navigate("/");
    }
  };

  return <div onClick={handlerLogout}>Log out</div>;
}

export default Logout;
