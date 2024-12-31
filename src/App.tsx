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
import Tutorial from "./pages/Tutorials/Tutorials.tsx";
import Community from "./pages/Community/Community.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Support from "./pages/Support/Support.tsx";
import LivePreview from "./pages/LivePreview/Livepreview.tsx";
import Achievements from "./pages/Achievements/Achievements.tsx";
import Rewards from "./pages/Rewards/Rewards.tsx";
import Terms from "./pages/Terms&Conditions/Terms.tsx";
import Privacy from "./pages/PrivacyPolicy/Privacy.tsx";
import Login from "./pages/Login/login.tsx";



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
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/community-forum" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/live-preview" element={<LivePreview />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />

          {/* Add more routes here */}
        </Routes>
      </div>
      <Footer />

    </Router>
  );
};

export default App;
