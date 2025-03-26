
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Portfolio from "./pages/Portfolio";
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <Router>
//       <div className="flex h-screen">
//         <Sidebar />
//         <div className="flex-1 p-6 bg-gray-100">
//           <Routes>
//             <Route path="/portfolio" element={<Portfolio />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioChart from "./components/PortfolioChart";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PortfolioChart />} />
            </Routes>
        </Router>
    );
}

export default App;
