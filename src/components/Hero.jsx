import heroImage from "../assets/images/hero-poster.png";
import imdb from "../assets/images/imdb.png";
import tomato from "../assets/images/tomato.png";
import Navbar from "./Navbar";
import Ratings from "./Ratings";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center w-full h-[470px] sm:h-[500px] lg:h-[600px] max-w-[1440px] "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="text-white absolute top-[130px] sm:top-[150px] flex justify-between w-full items-center ps-3 sm:ps-[40px] lg:ps-[80px] max-w-[1440px]">
          <div>
            <header className="text-4xl sm:text-5xl font-bold leading-[40px] sm:leading-[56px] pb-8 sm:pb-6">
              <span>John Wick 3:</span>
              <br />
              <span>Parabellum</span>
            </header>
            <Ratings width="[184px]">
              <div className="flex justify-between items-center gap-2">
                <img src={imdb} alt="IMDB" />
                <span className="text-xs">86.0/100</span>
              </div>
              <dv className="flex justify-between items-center gap-2">
                <img src={tomato} alt="Tomatoe" />
                <span className="text-xs">97%</span>
              </dv>
            </Ratings>
            <div>
              <p className="max-w-[302px] text-sm line-height-[18px] py-5 sm:py-4 font-medium">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <button className="flex justify-center items-center bg-[#be123c] px-4 py-[6px] gap-2 rounded-md">
              <AiFillPlayCircle />
              <span className="font-bold">WATCH TRAILER</span>
            </button>
          </div>
          <div className=" pe-6 hidden md:flex justify-center items-center gap-2">
            <button className="bg-white w-5 h-[3px] rounded-md"></button>{" "}
            <div className="text-[#9CA3AF] font-bold text-xs leading-[14px]  flex flex-col gap-[10px]">
              <button>1</button>
              <button>2</button>

              <button>3</button>

              <button>4</button>
              <button>5</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
