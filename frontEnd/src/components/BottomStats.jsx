import { useEffect, useState } from "react";
import {
  Users,
  PackageCheck,
  DollarSign,
  MessageCircle,
  RefreshCcw,
} from "lucide-react";
import "./Style/BottomStats.css";

const iconMap = {
  dailyPatients: <Users className="stat-icon" />,
  medicineStock: <PackageCheck className="stat-icon" />,
  revenue: <DollarSign className="stat-icon" />,
  feedback: <MessageCircle className="stat-icon" />,
};

const titles = {
  dailyPatients: "Daily Patients",
  medicineStock: "Medicine Stock",
  revenue: "Revenue",
  feedback: "Feedback",
};

function BottomStats() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const response = await fetch("/stats.json");
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const statsKeys = ["dailyPatients", "medicineStock", "revenue", "feedback"];

  return (
    <div className="bottom-stats-container">
      <div className="bottom-stats-grid">
        {statsKeys.map((key) => (
          <div key={key} className="stat-card">
            <div className="stat-header">
              <span>{titles[key]}</span>
              {iconMap[key]}
            </div>
            <div className="stat-value">
              {loading ? (
                <RefreshCcw className="loading-spinner" />
              ) : (
                data[key]
              )}
            </div>
            <div className="stat-footer">Updated every 5 sec</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomStats;
