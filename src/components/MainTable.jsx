/* eslint-disable react/prop-types */
import { UserInput } from "./UserInput";
import { NumValueInput } from "./NumValueInput";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Model from "./model";

export default function MainTable({count}) {
  // let one = [],
  //   tow = [],
  //   three = [];

  // const getNum = (n, type) => {
  //   switch (type) {
  //     case 1:
  //       console.log(one);
  //       one.push(n)
  //       break;
  //     case 2:
  //       console.log("tow");
  //       break;
  //     case 3:
  //       console.log("three");
  //       break;
  //     default:
  //       console.log("hi");
  //   }
  // };

  const createUser = (n) => {
    let newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push({
        name: "",
        results: [],
        points: 0,
      });
    }
    return newArray;
  };

  const [items, setItems] = useState(createUser(count));
  const [winner, setWinner] = useState(0);
  const complete = useRef(false)
  const winnerName = useRef([]);

  const totalArray = useRef(new Array());

  const getInputVal = (v, i, innerIndex) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const newArray = updatedItems[i].results;
      newArray[innerIndex] = v;
      updatedItems[i] = { ...updatedItems[i], results: newArray };
      return updatedItems;
    });
  };

  const getName = (name, i) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      let newName = updatedItems[i].name;
      newName = name;
      updatedItems[i] = { ...updatedItems[i], name: newName };
      return updatedItems;
    });
  };

  const getTotal = (i) => {
    const total = items[i].results.reduce((total, val) => total + val, 0);
    return total;
  };

  const getTheWinner = () => {
    const usersTotal = totalArray.current.map((e) => +e.innerHTML);
    const winner = Math.min(...usersTotal);
    setWinner(winner);
  };


  useEffect(() => {
    getTheWinner();
  }, [items]);

  return (
    <>
      {/*<!-- Component: Simple with footer --> */}
      <div className="w-full overflow-x-auto max-w-6xl">
        <div className="w-full h-12 bg-main-70 rounded-t-md flex justify-center items-center text-2xl font-bold text-white">
          <h3>
            Skrew <span className="font-f-cairo inline-block ml-3">سكرو</span>
          </h3>
        </div>
        <table
          className="w-full text-left border border-separate rounded border-slate-200 font-f-cairo text-xl font-semibold"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الاسم
              </td>
              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الجولة الاولي
              </td>

              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الجولة الثانية
              </td>

              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الجولة الثالثة
              </td>

              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الجولة الرابعة
              </td>

              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الجولة الخامسة
              </td>
              <td
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                الاجمالي
              </td>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => {
              if (winner == getTotal(index) && item.results.length === 5) {
                complete.current = true;
                winnerName.current.push(item.name) ;
              }
              return (
                <tr key={index}>
                  <UserInput getName={getName} index={index} />
                  {[0, 1, 2, 3, 4].map((point) => {
                    return (
                      <NumValueInput
                        key={point}
                        getInputVal={getInputVal}
                        index={index}
                        innerIndex={point}
                      />
                    );
                  })}
                  <td
                    ref={(ele) => {
                      totalArray.current[index] = ele;
                    }}
                    className={`h-12 px-6 text-sm font-medium border-t border-l first:border-l-0 stroke-slate-700 text-slate-700 ${
                      winner == getTotal(index) ? "bg-winner-70" : ""
                    }`}
                  >
                    {getTotal(index)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {complete.current && (
          <Model winnerName={winnerName} items={items} setItems={setItems}/>
        )}
      </div>
    </>
  );
}
