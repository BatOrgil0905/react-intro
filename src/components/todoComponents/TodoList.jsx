import React from 'react';
import Todos from './Todos'

const TodoList = ({todos}) => {
    
    return (
      <div className="my-6 flex items-center justify-center w-full h-full ">
        <ul className="">
            {todos.map(todo => (
                <Todos key={todo.id} text={todo.text} id={todo.id}/>
            ))}
        </ul>
      </div>
    );
}

export default TodoList;