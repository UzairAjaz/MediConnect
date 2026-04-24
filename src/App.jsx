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
    <>
      <BrowserRouter>
           <ScrollToTop />
        <Routes>
          <Route path="/*" element={<MediConnect />} />
          <Route path="/mediconnect" element={<LandingPage />} />
          <Route path="/dashboard" element={<MediConnectDashboard />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/appointment" element={<BookAppointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
