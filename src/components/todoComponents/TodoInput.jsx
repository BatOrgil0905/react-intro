import React from 'react';

const TodoInput = ({ texts, setText, todos, updatedTodos }) => {
  const inputText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };
  const submitTodos = (e) => {
    e.preventDefault();
    updatedTodos([...todos, { text: texts, id: Math.random() }]);
    console.log(updatedTodos)
    setText("");
  };

  return (
    <div className="my-4 flex items-center justify-center flex-col">
      <form className="flex flex-row">
        <input
            value={texts}
            onChange={inputText}
            type="text"
            className="w-[300px] px-1 py-2 outline outline-2 outline-yellow-500 duration-300 focus:outline-yellow-700"
            placeholder="Add some Todos"
        />
        <button
            onClick={submitTodos}
            className="mx-5 px-3 bg-green-300 outline outline-2 outline-green-600 text-white uppercase duration-300 hover:bg-green-500 focus:bg-green-600 hover:outline-green-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoInput;