import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./app.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <div className="main-layout">
        {isSidebarOpen && (
          <div className="sidebar-wrapper">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        )}

        <div
          className={`content-area ${
            isSidebarOpen ? "with-sidebar" : "full-width"
          }`}
        >
          <Navbar />
          <Home />
        </div>
      </div>

      {!isSidebarOpen && (
        <button className="open-sidebar-btn" onClick={() => setIsSidebarOpen(true)}>
          ☰
        </button>
      )}
    </div>
  );
};

export default App;
