// // import React from "react";
// // import Leaderboard from "../components/Leaderboard";
// // import Dashboard from "../components/Dashboard";

// // const LeaderboardPage = () => {
// //   return (
// //     <Dashboard>
// //       <Leaderboard />
// //     </Dashboard>
// //   );
// // };

// // export default LeaderboardPage;


// import React from "react";
// import Leaderboard from "../components/Leaderboard"; //  ✅ Import Leaderboard

// const LeaderboardPage = () => {
//   return (
//     <div>
//       <Leaderboard /> {/* ✅ Only render the Leaderboard component */}
//     </div>
//   );
// };

// export default LeaderboardPage;


import React from "react";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage = () => {
  return (
    <div>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;