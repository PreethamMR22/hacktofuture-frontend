import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../pages/Home.css";
import { useNavigate } from 'react-router-dom';

function Landing() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const pieRef = useRef(null);
  const pieInstanceRef = useRef(null);
  const navigate = useNavigate();

  // Bar Chart
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

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
          legend: { display: false },
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255,255,255,0.1)",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  // Pie Chart
  useEffect(() => {
    const ctx = pieRef.current.getContext("2d");

    if (pieInstanceRef.current) {
      pieInstanceRef.current.destroy();
    }

    pieInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Income", "Education", "Environment", "Healthcare"],
        datasets: [
          {
            data: [25, 30, 20, 25],
            backgroundColor: ["#fab005", "#f76707", "#ffd43b", "#ffa94d"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#fff",
              padding: 15,
            },
          },
        },
      },
    });

    return () => {
      if (pieInstanceRef.current) {
        pieInstanceRef.current.destroy();
      }
    };
  }, []);

  const handleClick = () => {
    navigate('/stats');
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <div className="section">
          <div
            className="top-left"
            onClick={handleClick}
            style={{
              cursor: "pointer",
              height: "250px",
              padding: "10px",
            }}
          >
            <canvas
              ref={chartRef}
              style={{ width: "100%", height: "100%" }}
            ></canvas>
          </div>

          <div className="top-right">
            <h3 style={{color:"#fab005"}} >Hospital Performance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="middle-left glass-box">
            <p>Status: <span style={{color:"red", fontSize:"18px",fontWeight:"bolder"}}>Deficient</span></p>
            <p>No of beds required: 150</p>
            <p>No of beds available: 120</p>
          </div>
          <div className="middle-right info-box">
            <h4 style={{color:"#fab005"}}>Expenditure & Finance</h4>
            <p>No of doctors required: <span style={{color:" rgb(250, 176, 5)"}}>10</span></p>
            <p>Total expenditure on doctors: <span style={{color:" rgb(250, 176, 5)"}}>₹5,00,000</span></p>
            <p>No of patients expected: <span style={{color:" rgb(250, 176, 5)"}}>230</span></p>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div
        style={{
          width: "450px",
          marginLeft: "-20px",
          marginRight:"11rem",
          marginTop:"-1rem",
          backgroundColor: "#2a2a2a",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "#fff", textAlign: "center", marginBottom: "10px" }}>
          SDoH Insights
        </h4>
        <div style={{ flex: 1 }}>
          <canvas
            ref={pieRef}
            style={{ width: "100%", height: "100%" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default Landing;
