/* eslint-disable react/prop-types */
import { useState } from "react";

export const UserInput = ({ getName, index }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    getName(e.target.value, index);
    setValue(e.target.value);
  };
  return (
    <th
      scope="col"
      className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500"
    >
      <input
        type="text"
        className="w-full h-full bg-transparent outline-none px-2"
        value={value}
        onChange={(e) => handleInput(e)}
      />
    </th>
  );
};
