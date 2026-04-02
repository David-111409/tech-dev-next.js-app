import { motion } from "framer-motion";

const Card = ({ icon, text, title }: { icon: React.ReactNode; text: string; title: string }) => {
  const card = {
    hidden: { opacity: 0, x: -100 }, // البداية: مخفية ومن تحت
    show: { opacity: 1, x: 0 }, // النهاية: تظهر مكانها الطبيعي
  };
  return (
    <motion.div
      variants={card}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex gap-x-5 items-center"
    >
      <div className="rounded-md size-14 bg-pink-500/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg text-gray-700">{title}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </motion.div>
  );
};

export default Card;
