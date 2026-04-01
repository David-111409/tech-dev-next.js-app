const Card = ({ icon, text, title }: { icon: React.ReactNode; text: string; title: string }) => {
  return (
    <div className="flex gap-x-5 items-center">
      <div className="rounded-md size-14 bg-pink-500/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-lg text-gray-700">{title}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
