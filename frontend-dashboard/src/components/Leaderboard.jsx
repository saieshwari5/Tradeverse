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

import React, { useState, useEffect } from "react";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState();

    // State to store data
    useEffect(() => {
        fetch("http://127.0.0.1:5000/leaderboard")  // Ensure backend URL is correct
            .then(response => response.json())
            .then(data => setLeaderboard(data))
            .catch(error => console.error("Error fetching leaderboard:", error));
    },);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            {leaderboard.length > 0 ? (
                <ul>
                    {leaderboard.map((entry, index) => (
                        <li key={index}>
                            <strong>#{entry.rank}</strong> {entry.username} - <span>${entry.virtual_balance}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading leaderboard...</p>
            )}
        </div>
    );
};

export default Leaderboard;