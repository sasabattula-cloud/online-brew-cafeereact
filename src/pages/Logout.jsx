import { useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem("user");

    navigate("/login");

    window.location.reload();

  }, []);

  return null;
}

export default Logout;