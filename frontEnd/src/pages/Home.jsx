import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Home.css";
import BranchDashboard from "../components/dash";
import BottomStats from "../components/BottomStats"; 

const Home = ({ shiftRight }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart if any
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Security Factor",
            data: [30, 50, 70, 40, 60],
            backgroundColor: "#fab005",
            borderRadius: 10,
            barPercentage: 0.4,
            categoryPercentage: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255,255,255,0.1)",
            },
          },
        },
      },
    });

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={`home ${shiftRight ? "shifted" : ""}`}>
      <div className="page-title">Current Data</div>
      <div>
          <BranchDashboard />
        </div>
      <div className="section">
        <div className="top-left">
          <canvas ref={chartRef}></canvas>
        </div>
        <div className="top-right">
          <h3>Hospital Performance</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis egestas rhoncus.
          </p>
        </div>
      </div>


      <div className="section">
        <div className="middle-left glass-box">
          <p>Status: Operational</p>
          <p>No of beds available: 120</p>
          <p>No of beds required: 150</p>
        </div>
        <div className="middle-right info-box">
          <h4>Expenditure & Finance</h4>
          <p>No of doctors required: 10</p>
          <p>Total expenditure on doctors: ₹5,00,000</p>
          <p>No of patients expected: 230</p>
        </div>
      </div>

      <div className="divider"></div>

      {/* <div className="footer">
        <div className="footer-box">Box 1: Daily Patients</div>
        <div className="footer-box">Box 2: Medicine Stock</div>
        <div className="footer-box">Box 3: Revenue</div>
        <div className="footer-box">Box 4: Feedback</div>
      </div> */}
      <BottomStats/>
    </div>
  );
};

export default Home;
