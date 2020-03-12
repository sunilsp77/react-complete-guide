import React from "react";
import { Router } from "react-router-dom";
// import Clock from "./Clock";
import history from "./services/history";
import Routes from "./routes";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header className="demo" />
      </div>
    </div>
  );
}

export default App;
