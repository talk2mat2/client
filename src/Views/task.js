import React from "react";
import FollowCard from "../component/followCard";
import TaskHead from "../component/taskHead";
import Api from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setallTask } from "../redux/alltask";

const Task = () => {
  const allTask = useSelector((state) => state.allTask?.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    Api.getAllTask().then((res) => {
      dispatch(setallTask(res.results));
    });
  }, []);
  return (
    <div style={{ position: "relative" }} className="col-12 col-lg-4 col-md-4">
      <TaskHead allTask={allTask} />
      <div className="listCard">
        {allTask?.map((item) => (
          <FollowCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Task;
