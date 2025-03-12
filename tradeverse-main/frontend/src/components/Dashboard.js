import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("http://127.0.0.1:5000/auth/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMessage(res.data.message);
      } catch (error) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>Logout</button>
    </div>
  );
};

export default Dashboard;
