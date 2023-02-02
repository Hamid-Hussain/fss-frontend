import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SingUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Banner from "./components/Banner";
import Payments from "./components/payments";
import AdminDashboard from "./pages/AdminDashboard";
import AllClients from "./components/Admin/allClients";
import AdminLogin from "./components/Admin/adminLogin";
import ManagePayments from "./components/Admin/managePayments";
import UploadMenu from "./components/Admin/uploadMenu";

import DailyClients from "./components/Admin/dailyClients";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/home" element={<Home />}>
            {/* <Route path="banner" element={<Banner />} /> */}
            <Route path="payments" element={<Payments />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="all-clients" element={<AllClients />} />
            <Route path="manage-payments" element={<ManagePayments />} />
            <Route path="upload-menu" element={<UploadMenu />} />
            <Route path="daily-clients" element={<DailyClients />} />
          </Route>
          <Route path="admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
