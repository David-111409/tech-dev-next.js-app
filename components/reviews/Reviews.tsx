import Card from "./Card";

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-100 flex flex-col gap-y-16">
      <div className="flex flex-col items-center justify-center gap-y-3 text-gray-700">
        <h1 className="text-2xl text-blue-950 font-bold">What Our Happy Client Says</h1>
        <p className="font-medium w-[90%] sm:w-[70%] md:w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam pariatur commodi
          maiores consequuntur a.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] mx-auto gap-4 items-center">
        <Card img="/images/u1.jpg" name="Jassica Doe" num={4.7} />
        <Card img="/images/u2.jpg" name="John Doe" num={4.5} />
        <Card img="/images/u3.jpg" name="Sasuke Uchiha" num={4.3} />
        <Card img="/images/u4.jpg" name="Boruto Uzumaki" num={4.8} />
      </div>
    </div>
  );
};

export default Reviews;
