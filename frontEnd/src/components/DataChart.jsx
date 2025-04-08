import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartConfigs = {
  "Unemployment Rate": {
    labels: ["2020", "2021", "2022", "2023"],
    data: [6.5, 6.2, 5.8, 5.5],
  },
  "Literacy Rate": {
    labels: ["2018", "2019", "2020", "2021"],
    data: [80, 82, 84, 85],
  },
  "Population Density": {
    labels: ["North", "South", "East", "West"],
    data: [150, 300, 250, 400],
  },
  "Eviction Rate": {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    data: [2, 2.5, 3, 2.8],
  },
};

function DataChart({ type }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    // Clean up previous chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const config = chartConfigs[type];

    chartRef.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: config.labels,
        datasets: [
          {
            label: type,
            data: config.data,
            backgroundColor: "#fab005",
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: `${type} (Sample)` },
        },
        scales: {
          y: {
            ticks: { color: "#fff" },
          },
          x: {
            ticks: { color: "#fff" },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [type]);

  return <canvas ref={canvasRef} />;
}

export default DataChart;
