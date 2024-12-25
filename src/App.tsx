import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Career from "./pages/Careers/Careers"
import Courses from "./pages/Courses/Courses.tsx";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
import Testimonial from "./pages/Testimonials/Testimonial.tsx";
import CodeComponents from "./pages/CodeComponents/CourseComponents.tsx"
import Services from "./pages/Services/Services.tsx"

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar Component */}
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/code-components" element={<CodeComponents />} />
          <Route path="/services" element={<Services />} />

          {/* Add more routes here */}
        </Routes>
      </div>
      <Footer />

    </Router>
  );
};

export default App;
