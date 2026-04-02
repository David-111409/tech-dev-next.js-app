import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
const Card = ({ img, name, num }: { img: string; name: string; num: number }) => {
  return (
    <div className="bg-white p-8 shadow-md flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 rounded-lg">
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
    </div>
  );
};

export default Card;
