import { useState, useEffect } from "react";
import axios from "axios";
import poster from "../assets/images/temp-poster.png";
import Ratings from "./Ratings";
import imdb from "../assets/images/imdb.png";
import tomato from "../assets/images/tomato.png";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const Card = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = "a8359b5355811000de60e14998dce489";
  const API_URL = "https://api.themoviedb.org/3";

  const fetchTop10Movies = async () => {
    try {
      const response = await axios.get(`${API_URL}/movie/top_rated`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          page: 1, // By default, get the first page of top-rated movies
        },
      });
      setMovies(response.data.results.slice(0, 10)); // Slice the first 10 movies
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTop10Movies();
  }, []);

  console.log(movies);
  return (
    <>
      {movies.length > 0 && (
        <>
          {movies.map((movie) => (
            <div
              className="w-[250px] h-[490px] relative shadow "
              key={movie.id}
              data-testId="movie-card"
            >
              <Link to={`movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Card Background"
                  className="h-[370px] w-[250px]"
                  data-testId="movie-poster"
                />

                <h3
                  className="text-lg font-bold text-[#111827]  py-3 px-1"
                  data-testId="movie-title"
                >
                  {movie.title}
                </h3>
                <Ratings textColor="text-[#111827]">
                  <div className="flex justify-between items-center gap-2 px-1">
                    <img src={imdb} alt="IMDB" className="" />
                    <span className="text-xs px-1">
                      {movie.vote_average * 10}.0/100
                    </span>
                  </div>
                  <dv className="flex justify-between items-center gap-2">
                    <img src={tomato} alt="Tomatoe" />
                    <span className="text-xs px-1">
                      {movie.vote_average * 10}%
                    </span>
                  </dv>
                </Ratings>

                <p
                  className="font-bold text-xs text-[#9CA3AF] pt-2 px-1"
                  data-testId="movie-release-date"
                >
                  Release Date: {movie.release_date}
                </p>
                <div className="flex justify-between items-center absolute top-0 text-white w-full py-4 px-2">
                  <span className="text-xs rounded-[12px] bg-[#F3F4F680] px-2 py-[3px] text-[#111827] font-bold">
                    TV SERIES
                  </span>
                  <span className="w-[30px] h-[29.21px] bg-[#F3F4F680] flex justify-center items-center rounded-full">
                    <BsFillSuitHeartFill className="text-[##D1D5DB] " />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
      {error && (
        <div className="text-red-500 font-bold flex justify-center items-center w-[100vw] border">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default Card;
