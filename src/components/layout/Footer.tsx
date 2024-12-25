import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-100 bg-sky-900">
      {/* Footer Content */}
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-yellow-400">ABOUT US</h4>
          <p className="text-sm">
            OurStudio is a digital agency specializing in UI/UX Design and Web
            Development, located in Ohio, USA.
          </p>
          <p className="mt-4 text-sm">
            Copyright &copy; Satyam Studio
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Recent News */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-yellow-400">RECENT NEWS</h4>
          <p className="text-sm">
            <span className="block">📍 8819 Ohio St. South Gate, CA 90280</span>
            <span className="block mt-2">📧 Ourstudio@hello.com</span>
            <span className="block mt-2">📞 +1 386-688-3295</span>
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-yellow-400">SERVICE</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Illustration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Mobile Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Motion Graphic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                SEO
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-lg font-bold text-yellow-400">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-sm text-center text-gray-300 bg-sky-950">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
          <p>&copy; 2024 SyntixDesigner. All rights reserved.</p>
          <a
            href="#top"
            className="inline-flex items-center text-yellow-400 hover:text-white"
          >
            Go To Top <span className="ml-2">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
