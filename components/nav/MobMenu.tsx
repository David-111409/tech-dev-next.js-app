import { navLinks } from "@/constants/constants";
import Link from "next/dist/client/link";
import { CgClose } from "react-icons/cg";

const MobMenu = ({ handleClose, open }: { handleClose: () => void; open: boolean }) => {
  const isOpen = open ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black opacity-70 z-1002  ${isOpen} 
        transition-transform duration-300`}
      />
      <div
        className={`fixed inset-0 bg-blue-900 w-[80%] sm:w-[60%]
             text-white h-screen z-1003 flex flex-col gap-y-6 justify-center
             transition-transform duration-500 delay-300 ${isOpen} transition-transform duration-300 delay-200`}
      >
        {navLinks.map(({ href, name }) => (
          <Link
            key={name}
            href={href}
            className="font-semibold w-fit text-[20px] sm:text-[30px] ml-12 pb-1 border-b-[1.5px] border-white"
          >
            {name}
          </Link>
        ))}
        <CgClose
          onClick={handleClose}
          className="absolute mt-6 top-[.7rem] right-[1.4rem] size-6 sm:size-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobMenu;
