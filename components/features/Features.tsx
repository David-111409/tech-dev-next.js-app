import Card from "./Card";
import Image from "next/image";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";
const Features = () => {
  return (
    <div className="py-16 bg-gray-100 flex flex-col gap-y-16">
      <div className="flex flex-col items-center justify-center gap-y-3 text-gray-700">
        <h1 className="text-2xl text-blue-950 font-bold">Key Features Of The Product</h1>
        <p className="font-medium w-[90%] sm:w-[70%] md:w-[50%] text-center">
          Our product stands out with its high performance, delivering blazing-fast speeds and
          seamless multitasking
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 item-center gap-10 w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            text="App Integration"
            icon={<MdOutlineTouchApp className="size-6 text-orange-400" />}
          />
          <Card text="Workflow Builder" icon={<GoWorkflow className="size-6 text-orange-400" />} />
          <Card text="Problem Solution" icon={<LuPen className="size-6 text-orange-400" />} />
          <Card
            text="Lifetime Access"
            icon={<MdAccessAlarm className="size-6 text-orange-400" />}
          />
        </div>
        <Image
          alt="Feature"
          src="/images/f1.png"
          width={700}
          height={700}
          className="self-center"
        />
      </div>
    </div>
  );
};

export default Features;
