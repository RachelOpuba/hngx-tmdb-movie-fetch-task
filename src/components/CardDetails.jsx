import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const CardDetails = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL parameter
  const [singleMovie, setSingleMovie] = useState(null);
  const API_KEY = "a8359b5355811000de60e14998dce489";
  const API_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
          },
        });
        setSingleMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!singleMovie) {
    return <div>Loading...</div>;
  }

  console.log(singleMovie);
  return (
    <>
      {/* <Navbar /> */}
      {/* <img
        src={`https://image.tmdb.org/t/p/w200${singleMovie.poster_path}`}
        alt="Card Background"
        className="h-[370px] w-full"
      /> */}
      <div>
        <div className="absolute top-5 left-5">
          <Link to="/">
            <BiArrowBack className="text-white text-5xl" />
          </Link>
        </div>

        <div
          className="bg-cover bg-center  w-full h-[350px] max-w-[1440px] object-contain flex justify-center items-center text-white gap-2  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path})`,
          }}
        >
          {" "}
          <AiFillPlayCircle className=" text-4xl sm:text-7xl" />{" "}
          <span className="text-2xl sm:text-4xl font-bold">Watch Trailer</span>
        </div>
        <div className="px-4  sm:px-[80px]pt-[60px] pb-10">
          <h2
            className="text-3xl sm:text-5xl font-bold text-[#be123c] pb-6 pt-6"
            data-testId="movie-title"
          >
            {singleMovie.title}
          </h2>
          <p data-testId="movie-release-date">
            Release Date(in UTC):{" "}
            <span className="text-[#be123c]">
              {new Date(singleMovie.release_date).toISOString()}
            </span>
          </p>
          <p className="py-4 " data-testId="movie-runtime">
            Runtime (in minutes):{" "}
            <span className="text-[#be123c]">{`${Math.floor(
              singleMovie.runtime / 60
            )} hours ${singleMovie.runtime % 60} minutes`}</span>
          </p>
          <h2 className="py-2 text-lg font-bold" data-testId="movie-overview">
            Overview
          </h2>
          <p className="">{singleMovie.overview}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardDetails;
