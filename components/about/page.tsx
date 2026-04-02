"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleBox from "@/helper/titleBox";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // مخفي وصغير الحجم
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, ease: "easeOut" }}
          viewport={{ once: true , amount: 1}}
        >
          <Image
            alt="About image"
            className="z-0"
            width={600}
            height={600}
            src="/images/about.png"
          />
        </motion.div>
        <div className="flex flex-col gap-y-3">
          <TitleBox>About Us</TitleBox>
          <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl leading-10 sm:leading-12">
            Everything You Need To Grow Your Business
          </h1>
          <p className="leading-relaxed text-sm sm:text-base text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, dolore? Ratione
            recusandae veritatis corrupti eum dicta earum! Odit voluptates corporis, est eos nostrum
            dolore libero quibusdam repellat facere at accusamus.
          </p>
          <Link
            href="#"
            className="mt-2 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967] self-start"
          >
            Learn More &#8594;
          </Link>
          <div className="mt-5 border-l-2 border-gray-200 pl-6 flex flex-col gap-y-6">
            <p className="text-gray-700 font-medium">
              &ldquo;The many integrations that can be linked really help me see data from other
              tools I also use.&rdquo;
            </p>
            <div className="flex gap-x-6 items-center">
              <Image
                alt="Jessica Doe Image"
                width={40}
                height={40}
                src="/images/u1.jpg"
                className="rounded-full"
              />
              <div>
                <p className="font-medium">Jessica Doe</p>
                <p className="text-sm text-gray-700">Web Developer @TechDev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
