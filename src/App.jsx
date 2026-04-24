import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediConnect from "./pages/AuthLayout";
import MediConnectDashboard from "./pages/Dashboard";
import DoctorsPage from "./pages/DoctorsPage";
import HospitalsPage from "./pages/Hospital";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./forms/ContactUs";
import BookAppointment from "./forms/Appointment";
import ScrollToTop from "./components/layouts/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* DEFAULT PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* other routes */}
        <Route path="/dashboard" element={<MediConnectDashboard />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/hospitals" element={<HospitalsPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/appointment" element={<BookAppointment />} />

        {/* optional auth/layout route */}
        <Route path="/auth/*" element={<MediConnect />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
