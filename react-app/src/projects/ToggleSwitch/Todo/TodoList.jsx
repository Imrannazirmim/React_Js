/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  onhandleDeleteTodo,
  data,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <li className="list-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <div>
        <button className="checkBtn" onClick={() => onHandleCheckedTodo(data)}>
          <FaCheck />
        </button>
        <button className="deleteBtn" onClick={() => onhandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};
