import {FaTimes} from 'react-icons/fa';
import {BsPencil} from 'react-icons/bs';
import Button from "./Button";
const TodoItem = ({name , deleteHandler, updateHandler}) => {
    return (
      <li className="py-2 bg-gray-100 mb-4 px-4 flex w-full items-center justify-between">
        <p>{name}</p>
        <Button click={deleteHandler} circle title={<FaTimes />} />
        <Button clcik={updateHandler} circle color="green" title={<BsPencil />} />
      </li>
    );
}
export default TodoItem;