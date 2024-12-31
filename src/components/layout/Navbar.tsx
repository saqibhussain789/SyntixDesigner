import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="px-4 py-3 lg:px-6">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* <img
              src="https://via.placeholder.com/40"
              className="h-8 mr-3"
              alt="SyntixDesigner Logo"
            /> */}
            <span
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              SyntixDesigner
            </span>
          </Link>

          {/* Right Section: Buttons and Mobile Menu Toggle */}
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className={`transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 ${
                isScrolled
                  ? "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
                  : "text-indigo-600 bg-white hover:bg-gray-100"
              }`}
            >
              Get Started
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-6 lg:mt-0">
            {[
                {
                  label: "Home",
                  link: "/",
                },
                {
                  label: "About",
                  dropdown: [
                    { label: "About Us", link: "/about" },
                    { label: "Careers", link: "/careers" },
                    { label: "Contact Us", link: "/contact" },
                  ],
                },
                {
                  label: "Learn",
                  dropdown: [
                    { label: "Courses", link: "/courses" },
                    { label: "Tutorials", link: "/tutorials" },
                    { label: "Code Components", link: "/code-components" },
                  ],
                },
                {
                  label: "Services",
                  dropdown: [
                    { label: "Services", link: "/services" },
                    { label: "Web Development", link: "/web-development" },
                    { label: "UI/UX Design", link: "/ui-ux-design" },
                    { label: "SEO Optimization", link: "/seo-optimization" },
                    { label: "Content Creation", link: "/content-creation" },
                    {
                      label: "Social Media Marketing",
                      link: "/social-media-marketing",
                    },
                    {
                      label: "Freelancing Guidance",
                      link: "/freelancing-guidance",
                    },
                  ],
                },
                {
                  label: "Community",
                  dropdown: [
                    { label: "Community Forum", link: "/community-forum" },
                    { label: "Blog", link: "/blog" },
                    { label: "Testimonials", link: "/testimonials" },
                    { label: "Support/Help Center", link: "/support" },
                  ],
                },
                {
                  label: "Tools",
                  dropdown: [
                    { label: "Live Preview Tool", link: "/live-preview" },
                    { label: "Achievements", link: "/achievements" },
                  ],
                },
                {
                  label: "More",
                  dropdown: [
                    { label: "Rewards", link: "/rewards" },
                    { label: "Terms & Conditions", link: "/terms" },
                    { label: "Privacy Policy", link: "/privacy-policy" },
                  ],
                },
              ].map((item, index) =>
                item.dropdown ? (
                  <li key={index} className="relative group">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center px-4 py-2 transition-all ${
                        isScrolled ? "text-gray-700" : "text-white"
                      } hover:text-indigo-600`}
                    >
                      {item.label}
                      <FaChevronDown className="ml-1" />
                    </button>
                    <ul
                      className={`${
                        dropdownOpen === item.label ? "block" : "hidden"
                      } lg:absolute lg:left-0 lg:mt-2 lg:w-48 lg:bg-white lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-md`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className={`block px-4 py-2 transition-all ${
                        isScrolled ? "text-gray-700" : "text-white"
                      } hover:text-indigo-600`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
