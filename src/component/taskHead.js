import React from "react";
import { BiPlus } from "react-icons/bi";
import TaskAdd from "./taskAdd";
import TaskEdit from "./taskedits";
import { useSelector } from "react-redux";

const TaskHead = ({ allTask }) => {
  const [showEdit, setShoweDIT] = React.useState(false);
  const toggleEdit = () => setShoweDIT(!showEdit);
  const editSingle = useSelector((state) => state.editTask);
  return (
    <>
      <div className="bg-dark-white task-header px-2 rounded d-flex flex-row align-items-center justify-content-between">
        <h6>TASK {allTask.length}</h6>
        <div onClick={toggleEdit} className="cursor-pointer add">
          <BiPlus size={0} />
        </div>
      </div>
      {showEdit && <TaskAdd setShoweDIT={setShoweDIT} />}
      {editSingle.edit && <TaskEdit />}
    </>
  );
};

export default TaskHead;
