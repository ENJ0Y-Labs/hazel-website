import { useEffect } from "react";
import { scrollToTop } from "./utils/scrollToTop.js";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import HazelSecurity from "./pages/HazelSecurity.jsx";
import OurClients from "./pages/OurClients.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hazel-security" element={<HazelSecurity />} />
          <Route path="/clients" element={<OurClients />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
