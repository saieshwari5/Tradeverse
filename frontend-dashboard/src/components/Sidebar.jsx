
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/portfolio" className="text-blue-500 hover:underline">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;