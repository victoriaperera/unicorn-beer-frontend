import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Logout() {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setResponse(res);
    dispatch(clearToken());

    navigate("/");
  };

  return <div onClick={handlerLogout}>Log out</div>;
}

export default Logout;
