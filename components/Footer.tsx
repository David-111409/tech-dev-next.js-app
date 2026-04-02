import { FaTwitter, FaFacebook, FaGlobe } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-16 w-[80%] mx-auto bg-white">
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-1">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Solution</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Enterprice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Work flow
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Team
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            News & Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Leadership
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>

          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div>
            <p className="text-sm text-gray-600">Our Mobile Number</p>
            <p className="text-base font-bold text-blue-950 mt-1">+0123 4234943234</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Our Email</p>
            <p className="text-base font-bold text-blue-950 mt-1">example@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm flex flex-col gap-4 md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">
          Copyright &copy; {new Date().getFullYear()} Webdev. All rights reserved
        </p>
        <div className="flex gap-4 items-center">
          Social :
          <FaFacebook className="text-gray-500 hover:text-blue-700 cursor-pointer" />
          <FaTwitter className="text-gray-500 hover:text-blue-700 cursor-pointer" />
          <FaGlobe className="text-gray-500 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
