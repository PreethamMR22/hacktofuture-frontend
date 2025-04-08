import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../pages/Home.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Landing() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const pieRef = useRef(null);
  const pieInstanceRef = useRef(null);
  const navigate = useNavigate();

  // Bar Chart
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_data', {
          params: { zip_code: '560001' },
        });

        const parsedData = response.data;
        const val1 = parsedData[0].ERSpikeFactor;
        const val2 = parsedData[1].ERSpikeFactor;
        const val3 = parsedData[2].ERSpikeFactor;
        const val4 = parsedData[3].ERSpikeFactor;

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
                label: "ER Factor",
                data: [val1, val2, val3, val4, val1],
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
                min: 1,
                max: 1.4,
                grid: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
            },
          },
        });

        // Pie Chart update with new colors
        const pieCtx = pieRef.current.getContext("2d");
        if (pieInstanceRef.current) {
          pieInstanceRef.current.destroy();
        }

        const crime = parsedData[0].CrimeRate;
        const eviction = parsedData[0].EvictionRate;
        const literacy = parsedData[0].LiteracyRate;
        const absentee = parsedData[0].SchoolAbsenteeismRate;
        const unemployment = parsedData[0].UnemploymentRate;
        const weather = parsedData[0].WeatherSeverityIndex;

        const rawValues = [
          unemployment,
          eviction,
          literacy,
          absentee,
          crime,
          weather
        ];

        const total = rawValues.reduce((sum, val) => sum + val, 0);
        const percentages = rawValues.map(val => (val / total) * 100);

        pieInstanceRef.current = new Chart(pieCtx, {
          type: "pie",
          data: {
            labels: [
              "Unemployment Rate",
              "Eviction Rate",
              "Literacy Rate",
              "Absentee Rate to Educational Institutes",
              "Crime Rate",
              "Weather Severity"
            ],
            datasets: [
              {
                data: percentages,
                backgroundColor: [
                  "#1f77b4", // blue
                  "#ff7f0e", // orange
                  "#2ca02c", // green
                  "#d62728", // red
                  "#9467bd", // purple
                  "#8c564b", // brown
                  "#e377c2"  // pink (spare color for future use)
                ],
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

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      if (pieInstanceRef.current) {
        pieInstanceRef.current.destroy();
      }
    };
  }, []);

  const handleClick = () => {
    navigate('/statistics');
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
            <h3 style={{ color: "#fab005" }}>Hospital Performance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="middle-left glass-box">
            <p>Status: <span style={{ color: "red", fontSize: "18px", fontWeight: "bolder" }}>Deficient</span></p>
            <p>No of beds required: 150</p>
            <p>No of beds available: 120</p>
          </div>
          <div className="middle-right info-box">
            <h4 style={{ color: "#fab005" }}>Expenditure & Finance</h4>
            <p>No of doctors required: <span style={{ color: " rgb(250, 176, 5)" }}>10</span></p>
            <p>Total expenditure on doctors: <span style={{ color: " rgb(250, 176, 5)" }}>₹5,00,000</span></p>
            <p>No of patients expected: <span style={{ color: " rgb(250, 176, 5)" }}>230</span></p>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div
        style={{
          width: "450px",
          marginLeft: "-20px",
          marginRight: "11rem",
          marginTop: "-1rem",
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
  