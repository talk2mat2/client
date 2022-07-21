import React from "react";
import { Formik } from "formik";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setUsersDrop } from "../redux/assignSlice";
import { stoptEdit } from "../redux/editTask";
import Api from "../api";
import moment from "moment";
import { setallTask } from "../redux/alltask";

const TaskEdit = ({ setShoweDIT }) => {
  const assignOption = useSelector((state) => state.usersDrop);
  const editData = useSelector((state) => state.editTask?.editContent);
  const { task_msg, assigned_user, task_date, task_time, id } = editData;
  // const [state, editDtate] = React.useState({ editData });

  const dispatch = useDispatch();
  const closeEdit = () => {
    dispatch(stoptEdit());
  };
  React.useEffect(() => {
    Api.assignDropDown().then((res) =>
      dispatch(setUsersDrop(res.results?.data))
    );
  }, []);

  const deleteItem = () => {
    if (window.confirm("Sure to delete?") === true) {
      Api.deleteAtask(id).then((res) => {
        alert(res.message);
        closeEdit();
        Api.getAllTask().then((res) => {
          dispatch(setallTask(res.results));
        });
      });
    }
  };

  return (
    <div className="editContainer">
      <Formik
        initialValues={{
          task_msg,
          assigned_user,
          task_date,
          time_zone: moment().seconds(),
          is_completed: 0,
          task_time,
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values.task_time);
          if (moment(values.task_time).format("HH:MM") == "Invalid date") {
            const tseconds = moment(values.task_time, "HH:mm ").diff(
              moment().startOf("day"),
              "seconds"
            );
            values.task_time = tseconds;
          }
          Api.updateAtask(values, id)
            .then((res) => {
              alert(res.message);
              closeEdit();
              Api.getAllTask().then((res) => {
                dispatch(setallTask(res.results));
              });
            })
            .catch((err) => console.log(err));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="editForm rounded p-2" onSubmit={handleSubmit}>
            <div>
              <label>Task Description</label>
              <div className="inputs rounded px-2">
                <input
                  className="w-75 h-100 bg-white rounded"
                  type="text"
                  name="task_msg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.task_msg}
                />
                <MdOutlineSystemUpdateAlt size={20} />
              </div>
            </div>
            {/* {errors.email && touched.email && errors.email} */}

            <span className="d-flex flex-row justify-content-between mt-3">
              <div className="w-45">
                <label>Date</label>
                <div className="inputs rounded px-2">
                  <input
                    className="w-100 h-100 bg-white rounded"
                    type="date"
                    name="task_date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.task_date}
                  />
                  {/* <MdOutlineSystemUpdateAlt size={20} /> */}
                </div>
              </div>
              <div className=" w-45">
                <label>Time</label>
                <div className="inputs rounded px-2">
                  {/* <BiTimeFive size={20} /> */}
                  <input
                    className="w-100 h-100 bg-white rounded"
                    type="time"
                    name="task_time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.task_time}
                  />
                </div>
              </div>
            </span>

            {/* {errors.password && touched.password && errors.password} */}

            <div className="mt-3">
              <label>Assign User</label>
              <div className="inputs rounded px-2">
                <select
                  onChange={handleChange}
                  name="assigned_user"
                  className="w-100 h-100 bg-white rounded"
                >
                  {assignOption?.data?.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-100 text-end my-3">
              <RiDeleteBin5Line
                size={23}
                onClick={deleteItem}
                className="cursor-pointer"
                style={{ float: "left", marginTop: "14px" }}
              />
              <button onClick={() => closeEdit()} className="btn px-4">
                Cancel
              </button>
              <button
                className="savebtn btn px-4"
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default TaskEdit;
