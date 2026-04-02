"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 300);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="animate-pulse fixed size-12 flex items-center justify-center cursor-pointer  bottom-4 right-4 bg-orange-500 text-white rounded-full focus:outline-none"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
