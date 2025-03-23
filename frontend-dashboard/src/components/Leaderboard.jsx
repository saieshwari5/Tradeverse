// import React, { useEffect, useState } from "react";

// const Leaderboard = () => {
//   const [leaders, setLeaders] = useState([]);

//   useEffect(() => {
//     fetchLeaderboard();
//   }, []);

//   const fetchLeaderboard = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/leaderboard");
//       const data = await response.json();
//       setLeaders(data);
//     } catch (error) {
//       console.error("Error fetching leaderboard:", error);
//     }
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Rank</th>
//             <th className="border p-2">Username</th>
//             <th className="border p-2">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaders.length > 0 ? (
//             leaders.map((leader, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{leader.rank}</td>
//                 <td className="border p-2">{leader.username}</td>
//                 <td className="border p-2">{leader.score}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="p-4 text-center">
//                 No leaderboard data available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Leaderboard;


import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboard();
  },);

  const fetchLeaderboard = async () => {
    setIsLoading(true);
    try {
      //  ✅ Replace with the actual API endpoint for leaderboard data
      const response = await fetch("YOUR_API_ENDPOINT_FOR_LEADERBOARD");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLeaders(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading leaderboard data...</div>;
  }

  if (error) {
    return <div>Error fetching leaderboard: {error.message}</div>;
  }

  return (
    <div>
      <h2>Leaderboard</h2>
      {leaders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader) => (
              <tr key={leader.id}>
                <td>{leader.rank}</td>
                <td>{leader.username}</td>
                <td>{leader.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leaderboard data available.</p>
      )}
    </div>
  );
};

export default Leaderboard;