import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediConnect from "./pages/AuthLayout";
import MediConnectDashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login / Signup layout */}
        <Route path="/*" element={<MediConnect />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<MediConnectDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
