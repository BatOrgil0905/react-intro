import { useState } from "react";
import useTodoContext from "../hooks/useTodoContext";
import Input from "./Input";
import Button from "./Button";

const TodoForm = () => {
    const {dispatchTodoAction} = useTodoContext();
    const [todoName , setTodoName] = useState("");
    const [todoId, setTodoId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false)

    const insertHandler = (e) => {
        e.preventDefault();
        dispatchTodoAction({
            type: "INSERT",
            name: todoName
        });
        setTodoName("");
    }

    const keyBoardHandler = event => {
        if(event.key === "Enter"){
            dispatchTodoAction({
                type: "INSERT",
                name: todoName
            });
            setTodoName("");
        }
    }

    const updateHandler = () => {
        dispatchTodoAction({
            type: "UPDATE",
            id: todoId,
            name: todoName
        })
    }

    const editTodo = (id, todo) => {
        setTodoId(id);
        setTodoName(todo);
        setIsUpdate(true);
    }

    return <div className="p-4 mb-4 gap-3 rounded-xl shadow-xl flex items-center bg-white">
        <Input press={keyBoardHandler} value={todoName} change={e => setTodoName(e.target.value)} place="Todo name" />
        <Button click={isUpdate ? updateHandler : insertHandler} title={isUpdate ? "Update" : "Insert"} />
    </div>
}
export default TodoForm;