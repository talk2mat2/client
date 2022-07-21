import React from "react";
import { Formik } from "formik";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setUsersDrop } from "../redux/assignSlice";
import Api from "../api";
import moment from "moment";
import { setallTask } from "../redux/alltask";

const TaskEdit = ({ setShoweDIT }) => {
  const assignOption = useSelector((state) => state.usersDrop);

  const dispatch = useDispatch();
  React.useEffect(() => {
    Api.assignDropDown().then((res) =>
      dispatch(setUsersDrop(res.results?.data))
    );
  }, []);

  return (
    <div className="editContainer">
      <Formik
        initialValues={{
          task_msg: "",
          assigned_user: "",
          task_date: "",
          task_time: "",
          is_completed: 0,
          time_zone: moment().diff(moment().startOf("day"), "seconds"),
        }}
        onSubmit={(values, { setSubmitting }) => {
          const tt = moment(values.task_time, "HH:mm ").diff(
            moment().startOf("day"),
            "seconds"
          );
          Api.addtask({ ...values, task_time: tt })
            .then((res) => {
              alert(res.message);
              setShoweDIT(false);
              Api.getAllTask().then((res) => {
                dispatch(setallTask(res.results));
              });
            })
            .catch((err) => alert(err.response?.data?.message));
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

            {errors.password && touched.password && errors.password}

            <div className="mt-3">
              <label>Assign User</label>
              <div className="inputs rounded px-2">
                <select
                  onChange={handleChange}
                  name="assigned_user"
                  className="w-100 h-100 bg-white rounded"
                >
                  <option value="">---</option>
                  {assignOption?.data?.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-100 text-end my-3">
              <button onClick={() => setShoweDIT(false)} className="btn px-4">
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
