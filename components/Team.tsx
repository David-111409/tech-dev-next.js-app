import TitleBox from "@/helper/titleBox";
import Link from "next/link";
import Image from "next/image";
const Team = () => {
  return (
    <div className="py-16">
      <div className="w-[80%] mx-auto grid gap-10 grid-cols-1 lg:grid-cols-5 items-center">
        {/* text col */}
        <div className="flex flex-col gap-y-4 lg:col-span-2">
          <TitleBox>Our Team</TitleBox>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Our Team of Exceptional Talent, Innovation, and Vision
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas quod
            mollitia vitae minus laborum, temporibus nostrum culpa impedit maiores
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-linear-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Join Our Team</span>
            </Link>
          </div>
        </div>
        {/* image col */}
        <div className="lg:col-span-3 flex flex-col gap-4 sm:flex-row">
          <div className="relative w-fit">
            <Image
              alt="Team Member"
              width={300}
              height={300}
              src="/images/t1.jpg"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 w-full rounded-lg h-20 bg-rose-500 p-4">
              <p className="tex-lg text-white text-bold">Obito Uchiha</p>
              <p className="text-gray-200">(Founder)</p>
            </div>
          </div>
          <div className="relative w-fit overflow-hidden">
            <Image
              alt="Team Member"
              width={300}
              height={300}
              src="/images/t2.jpg"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 w-full rounded-lg h-20 bg-orange-500 p-4">
              <p className="tex-lg text-white text-bold">Jassica Doe</p>
              <p className="text-gray-200">(Co-Founder)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
