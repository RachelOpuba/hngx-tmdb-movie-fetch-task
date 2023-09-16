import { BiSolidChevronRight } from "react-icons/bi";
import Card from "./Card";

const FeaturedMovie = () => {
  return (
    <>
      <div className="w-full max-w-[1308px] p-[20px] sm:p-[70px]">
        <header className="flex justify-between items-center pb-12">
          <h2 className="font-bold text-2xl sm:text-4xl">Featured Movie</h2>
          <button className="flex justify-center items-center gap-2  ">
            <span className="text-sm sm:text-lg text-[#BE123C]">See more </span>{" "}
            <BiSolidChevronRight className="text-sm sm:text-2xl pt-1 text-[#B91C1C]" />
          </button>
        </header>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[80px] place-items-center">
          <Card />
        </div>
      </div>
    </>
  );
};

export default FeaturedMovie;
