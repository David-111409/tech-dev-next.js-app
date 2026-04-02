import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
const Card = ({ img, name, num }: { img: string; name: string; num: number }) => {
  const card = {
    hidden: { opacity: 0, x: -100 }, // البداية: مخفية ومن تحت
    show: { opacity: 1, x: 0 }, // النهاية: تظهر مكانها الطبيعي
  };
  return (
    <motion.div
      variants={card}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-8 shadow-md flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 rounded-lg"
    >
      {/* image */}
      <Image
        src={img}
        alt={name}
        width={120}
        height={120}
        className="rounded-lg bg-contain h-40 w-40 self-start sm:self-center"
      />
      <div>
        <p className="text-lg font-bold text-blue-950">{name}</p>
        <div className="flex gap-x-3">
          <h1 className="text-orange-500 font-bold text-2xl">{num}</h1>
          <div className="flex items-center">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <BsStarHalf className="text-yellow-600" />
          </div>
        </div>
        <p className="text-gray-700 font-medium text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum recusandae sint
          quisquam ullam quo.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
