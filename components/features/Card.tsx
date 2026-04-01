const Card = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col gap-y-3">
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
    </div>
  );
};

export default Card;
