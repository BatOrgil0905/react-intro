import React from "react";

const Todos = ({text}) => {
  return (
    <div className="my-3">
        <li className="w-[400px] border border-black px-2 py-3 duration-300 hover:bg-gray-100">
          {text}
        </li>
    </div>
  );
};

export default Todos;
