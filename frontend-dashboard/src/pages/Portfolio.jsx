
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/accessibility";

import { useEffect, useState } from "react";

function Portfolio() {
  const [chartOptions, setChartOptions] = useState({
    title: { text: "Portfolio Overview" },
    series: [{ type: "pie", data: [] }],
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item) => [item.stock_symbol, item.total_value]);
        setChartOptions({
          series: [{ type: "pie", data: formattedData }],
        });
      });
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Portfolio;