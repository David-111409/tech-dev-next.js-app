import TitleBox from "@/helper/titleBox";
import Card from "./Card";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPalette } from "react-icons/io5";
const Services = () => {
  return (
    <div className="w-[80%] mx-auto py-16">
      <div className="flex flex-col gap-y-4">
        <TitleBox>Our Services</TitleBox>
        <h1 className="text-2xl font-bold md:text-3xl text-gray-800">Our Services Made For You?</h1>
        <p className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum vel nostrum
          reprehenderit laboriosam eos eaque ex debitis quam numquam.
        </p>
        {/* grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 items-center">
          <Card
            icon={<FaRocket className="size-6 text-orange-400" />}
            title="Start Up"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Card
            icon={<FaBriefcase className="size-6 text-orange-400" />}
            title="Business"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Card
            icon={<FaShoppingCart className="size-6 text-orange-400" />}
            title="E-Commerce"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Card
            icon={<MdOutlineDesignServices className="size-6 text-orange-400" />}
            title="Digital Design"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Card
            icon={<IoColorPalette className="size-6 text-orange-400" />}
            title="Unlimited Colors"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
          <Card
            icon={<FaChess className="size-6 text-orange-400" />}
            title="Strategy Solutions"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
