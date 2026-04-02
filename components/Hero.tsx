"use client"; // مهم لو فيه animation
import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen flex flex-col justify-center bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* text content col */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Make the Smartest Investment
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 font-bold text-blue-950 md:leading-10 leading-14">
            Kickstart, Scale, and Thrive Faster with <span className="text-rose-700">TechDev</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam nesciunt odio
            exercitationem, alias eius maiores tempora recusandae ipsam voluptas voluptatum ea
            ducimus voluptatibus provident ratione
          </p>
          {/* Rating component here */}
          <div className="flex flex-col sm:flex-row sm:gap-x-10 mt-6 gap-y-6">
            <div className="flex items-center gap-x-4">
              <Image src="/images/google.png" alt="Rating" width={40} height={40} />
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">4.5</h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 size-4" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <BsStarHalf className="text-yellow-500" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Best Rated On Google</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Image src="/images/linkedin.png" alt="Rating" width={40} height={40} />
              <div className="flex flex-col">
                <div className="flex gap-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">4.7</h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 size-4" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <BsStarHalf className="text-yellow-500" />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">Best Rated On Linkedin</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col w-fit gap-4 sm:flex-row">
            <Link
              href="#"
              className="relative inline-block px-10 py-3 font-medium text-white transition duration-300 bg-rose-600 rounded-md hover:bg-rose-800 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  />
                </svg>
              </span>

              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  />
                </svg>
              </span>

              <span className="relative">Get Free Trail</span>
            </Link>
            <Link
              href="#"
              className="relative inline-block px-10 py-3 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg
                  viewBox="0 0 487 487"
                  className="w-auto h-full opacity-100 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  />
                </svg>
              </span>

              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg
                  viewBox="0 0 487 487"
                  className="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fillRule="nonzero"
                    fillOpacity=".1"
                  />
                </svg>
              </span>

              <span className="relative">Create Account</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // البداية: مخفي ومن فوق
          whileInView={{ opacity: 1, y: 0 }} // يظهر عند الوصول
          viewport={{ once: true }} // يظهر مرة واحدة فقط
          transition={{ duration: 0.6 }}
          className="hidden xl:block"
        >
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            width={900}
            height={900}
            className="cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
