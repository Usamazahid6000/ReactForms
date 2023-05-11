import React from "react";
import LoginForm from "./Component/LoginForm";
import Signup from "./Component/SignupForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Component/DashboardComponent/Dashboard";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<LoginForm />} />
          <Route exact path="/signup" component={<Signup />} />
          <Route exact path="/dashboard" component={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
