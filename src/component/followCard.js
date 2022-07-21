import React from "react";
import { AiTwotoneEdit, AiOutlineCheck } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { startEdit, stoptEdit } from "../redux/editTask";
import { useDispatch } from "react-redux";

const FollowCard = ({ item }) => {
  const dispatch = useDispatch();
  const openEdit = () => {
    dispatch(startEdit(item));
  };

  return (
    <div className="followcard card w-100 bg-white">
      <div className=" h-100 cad-body d-flex flex-row align-items-center justify-content-between px-2">
        <div className="d-flex flex-row align-items-center ">
          <img width="70px" className="" src="/download.jpg" alt="" />
          <span className="ml-2">
            <div className="cardtitle">
              <h5>{item.task_msg}</h5>
              <p>{item.task_date}</p>
            </div>
          </span>
        </div>
        <span>
          <button onClick={openEdit} className="btn border border-dark">
            <AiTwotoneEdit />
          </button>
          <button className="btn border border-dark">
            <IoIosNotifications />
          </button>
          <button className="btn border border-dark">
            <AiOutlineCheck size={15} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default FollowCard;
