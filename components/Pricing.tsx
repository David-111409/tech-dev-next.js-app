"use client";
import { motion } from "framer-motion";

const Pricing = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // كل بطاقة تظهر بعد 0.2 ثانية من اللي قبلها
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -100 }, // البداية: مخفية ومن تحت
    show: { opacity: 1, x: 0 }, // النهاية: تظهر مكانها الطبيعي
  };
  return (
    <div className="py-16 bg-gray-100 flex flex-col gap-y-16">
      <div className="flex flex-col items-center justify-center gap-y-3 text-gray-700">
        <h1 className="text-2xl text-blue-950 font-bold">Key Features Of The Product</h1>
        <p className="font-medium w-[90%] sm:w-[70%] md:w-[50%] text-center">
          Our product stands out with its high performance, delivering blazing-fast speeds and
          seamless multitasking
        </p>

        {/* grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-11 w-[80%] mx-auto"
        >
          <motion.div
            variants={card}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg border-t-4 border-rose-300 bg-white p-8"
          >
            <h1 className="text-sky-500 text-xl font-bold">3 Month Membership</h1>
            <p className="mt-4 text-gray-600 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in
              maxime tempora cumque
            </p>
            <div className="mt-8">
              <span className="text-4xl font-bold text-black">$39.99 </span>
              <span className="text-gray-700 text-lg font-semibold">/month</span>
            </div>
            <div className="mt-12">
              <a
                href="#_"
                className="px-5 py-2 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-linear-to-br from-purple-500 to-pink-500 md:w-auto"
              >
                Upgrade Now
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={card}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg border-t-4 border-rose-300 bg-white p-8"
          >
            <h1 className="text-sky-500 text-xl font-bold">12 Month Membership</h1>
            <p className="mt-4 text-gray-600 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in
              maxime tempora cumque
            </p>
            <div className="mt-8">
              <span className="text-4xl font-bold text-black">$19.99 </span>
              <span className="text-gray-700 text-lg font-semibold">/month</span>
            </div>
            <div className="mt-12">
              <a
                href="#_"
                className="px-5 py-2 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-linear-to-br from-purple-500 to-pink-500 md:w-auto"
              >
                Upgrade Now
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={card}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg border-t-4 border-rose-300 bg-white p-8"
          >
            <h1 className="text-sky-500 text-xl font-bold">Life time Membership</h1>
            <p className="mt-4 text-gray-600 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores culpa in
              maxime tempora cumque
            </p>
            <div className="mt-8">
              <span className="text-4xl font-bold text-black">$9.99 </span>
              <span className="text-gray-700 text-lg font-semibold">/month</span>
            </div>
            <div className="mt-12">
              <a
                href="#_"
                className="px-5 py-2 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-linear-to-br from-purple-500 to-pink-500 md:w-auto"
              >
                Upgrade Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
