import { useState } from "react";
import { Link } from "react-router-dom";

export default function StarterPage() {
  const [value, setValue] = useState(2);

  const handleInput = (e) => {
    e.target.validity.valid || (e.target.value = "");
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="w-full h-screen bg-main-70 rounded-t-md flex flex-col justify-center items-center gap-5 text-2xl font-bold">
      <h4 className="text-3xl font-bold text-white font-f-cairo">أختر عدد اللاعبين؟</h4>

      <input
        type="number"
        name="players"
        min={2}
        max={8}
        required
        className="p-2 rounded-lg outline-none inline-block min-w-[330px]"
        value={value}
        onInput={(e) => handleInput(e)}
      />

      { !isNaN(value) &&
        <Link
        to={`/gameTable/${value}`}
        className="inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-full mr-5 bg-yellow-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-yellow-200 transition duration-300 hover:bg-yellow-600 hover:shadow-md hover:shadow-yellow-200 focus:bg-yellow-700 focus:shadow-md focus:shadow-yellow-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
      >
        play
      </Link>}
    </div>
  );
}
