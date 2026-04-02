"Use client";
import { motion } from "framer-motion";
const Card = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  const card = {
    hidden: { opacity: 0, x: -100 }, // البداية: مخفية ومن تحت
    show: { opacity: 1, x: 0 }, // النهاية: تظهر مكانها الطبيعي
  };
  return (
    <motion.div
      variants={card}
      transition={{ duration: 0.6, ease: "easeOut" }}
     
      className="bg-white p-4 rounded-lg flex flex-col gap-y-3"
    >
      {/* icon & text div*/}
      <div className="flex gap-x-3 items-center">
        <div className="rounded-full size-12 bg-pink-500/20 flex items-center justify-center">
          {icon}
        </div>
        <p className="font-bold text-gray-700 text-lg">{text}</p>
      </div>

      {/* description */}
      <p className="text-gray-700 leading-relaxed pb-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis consequatur esse
        amet possimus debitis assumenda libero
      </p>
    </motion.div>
  );
};

export default Card;
