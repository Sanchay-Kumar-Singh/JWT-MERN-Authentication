import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setMessage(response.data.message);

      } catch (error) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchDashboard();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <h3>{message}</h3>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
