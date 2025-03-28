import { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => {
        console.log("API Response Status:", response.status); // Debug status
        return response.json();
      })
      .then((data) => {
        console.log("API Data:", data); // Debug JSON data
        setData(data.message);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default Dashboard;
