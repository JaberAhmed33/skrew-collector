/* eslint-disable react/prop-types */
import { useState } from "react";

export const NumValueInput = ({getInputVal, index, innerIndex}) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    e.target.validity.valid || (e.target.value = "");
    setValue(e.target.value);
    // getInputVal(parseInt(e.target.value), index)
    getInputVal(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value), index, innerIndex)
  };

  return (
    <td
      scope="col"
      className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500"
    >
      <input
        type="number"
        min="0"
        className="w-full h-full bg-transparent outline-none px-2"
        value={value}
        onInput={(e) => handleInput(e)}
      />
    </td>
  );
};
