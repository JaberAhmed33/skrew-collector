/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import abdo from "../assets/abdo.png";
import { useEffect } from "react";

export default function Model({ winnerName }) {
  useEffect(() => {
    winnerName.current = [...new Set(winnerName.current)];
  }, []);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 overflow-hidden -translate-y-1/2 w-[900px] h-[700px] rounded-xl
         bg-main-70 transition-all flex flex-col gap-3 justify-center items-center"
    >
      <h1 className="text-3xl font-bold text-white">
        {winnerName.current.length == 2 ? "The Winner is" : "The Winners are"}
      </h1>
      <h2 className="text-2xl text-green-100">
        {winnerName.current.length == 2
          ? winnerName.current[0]
          : [...new Set(winnerName.current)].join(" and ")}
      </h2>
      <h3 className="text-3xl text-yellow-300 font-f-cairo">
        {winnerName.current.length == 2
          ? '"مبرووك يا حبيب الأسطي "'
          : '"مبرووك يا حبايب الأسطي "'}
      </h3>
      <img
        src={abdo}
        alt="abdo"
        className="relative top-[15%] animate-bounce"
      />

      <Link
        to="/"
        className="inline-flex h-12 self-end items-center gap-2 whitespace-nowrap rounded-full mr-5 bg-yellow-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-yellow-200 transition duration-300 hover:bg-yellow-600 hover:shadow-md hover:shadow-yellow-200 focus:bg-yellow-700 focus:shadow-md focus:shadow-yellow-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
      >
        play Again
      </Link>
    </div>
  );
}
