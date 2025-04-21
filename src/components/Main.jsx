import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [task, setTask] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Variables that are used in creating a task
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  // const [strtDate, setStrtDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  // Showing Form For adding task
  const handleAddTask = () => {
    setShowForm(true);
  };

  // Cancelling Form
  const handleCancelTask = () => {
    setShowForm(false);
  };

  // Form Sumbit Handler ...
  const submitHandler = (e) => {
    e.preventDefault(); // Preventing page refresh after form submitting

    setTask([...task, { taskName, taskDesc, completed: false }]);

    setShowForm(false);
    setShowSuccess(true);

    // clear form
    setTaskName("");
    setTaskDesc("");

    // Hide success popup after 2s
    setTimeout(() => setShowSuccess(false), 2000);
  };

  // For Deleting Task ....
  const taskDeletition = (i) => {
    const taskContainer = [...task];
    taskContainer.splice(i, 1);

    setTask(taskContainer);
  };

  // When the task Completed
  const taskCompletition = (index) => {
    const completedTask = [...task];
    completedTask[index].completed = !completedTask[index].completed;
    setTask(completedTask);

  };



  // For rendering "Empty"
  let renderItem = (
    <h2 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[1.4rem] font-mono font-bold">
      Empty ... !
    </h2>
  );

  // For rendering Tasks
  if (task.length > 0) {
    renderItem = task.map((t, i) => {
      return (
        <li key={i} className="task h-20 w-[25vmax] relative mb-5">
          <div className="w-[70%] flex flex-col">
            <h2 className="text-white text-lg">{t.taskName}</h2>
            <p className="text-zinc-500 text-sm/4">{t.taskDesc}</p>
          </div>

          <div className="w-[20%] flex items-center justify-center">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="complete"
                className="complete cursor-pointer h-5 w-5"
                checked={t.completed}
                disabled={t.completed}
                onChange={() => {
                  taskCompletition(i);
                  // disabled={t.completed};
                }}
              />
              <button onClick={()=>{
                taskDeletition(i);
              }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-800 h-6 w-6"
                />
              </button>
            </div>

            <div className="absolute right-4 bottom-1">
              <p className={`text-[0.8rem] text-end ${t.completed ? "text-green-500" : "text-blue-500"} tracking-widest`}>
                {t.completed ? "Completed ..." : "Pending ..."}
              </p>
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      {/*Tasks Container...  */}
      <div className="task-container h-auto w-[80vmax] text-[rgb(97,97,97)] bg-[#0f1313] rounded-lg relative">
        <div className=" w-full flex flex-col justify-evenly py-[4vmin] px-[3vmin] overflow-y-auto">
          <h3 className="text-[1.5rem] text-blue-300 font-mono ">
            Pending Tasks
          </h3>

          <hr className="mb-10" />

         

          <ul className="w-full flex flex-wrap">
            {renderItem}
          </ul>
          
        </div>

        {/* <span className="bg-zinc-700 h-[1px] w-full"></span> */}
        {/* <div className="h-[80vh] w-[80vmax] flex flex-col justify-evenly px-[3vmin]">
          <h3 className="text-[1.5rem] text-green-300 font-mono ">
            Completed Tasks
          </h3>

          <hr className="mb-10" />

          <ul className="taskContainer h-[68vh] w-full overflow-y-auto flex flex-wrap justify-evenly gap-[0.5rem]">
            {renderItem}
          </ul>
        </div> */}
      </div>

      {/* Button for Adding a new TASK ... */}
      <button
        className="h-[3rem] w-[3rem] flex items-center justify-center rounded-full text-white text-[2vmax] font-semibold bg-blue-600 fixed bottom-5 right-5 hover:scale-75"
        onClick={handleAddTask}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>

      {/* Show Form for Adding Tasks ...  */}
      {showForm && (
        <div className="w-[35vmax] bg-zinc-700 rounded-lg fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] py-3 px-5">
          <div className="flex items-center justify-between border-b py-1 mb-5">
            <h2 className="text-blue-200 text-[1.4rem]">Let's add a task</h2>
            <button
              className="text-blue-200 text-[1.2rem]"
              onClick={handleCancelTask}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <form
            onSubmit={submitHandler}
            className="h-full w-full flex flex-col"
            action=""
          >
            <label
              className="text-lg font-semibold text-white mb-1"
              htmlFor="task"
            >
              Task
            </label>
            <input
              value={taskName}
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
              className="outline-none h-10 w-full text-white text-sm px-3 font-mono bg-[#232b2b] rounded-lg mb-5"
              type="text"
              placeholder="Write a task"
              required
            />

            <label
              className="text-lg font-semibold text-white mb-1"
              htmlFor="task"
            >
              Task Desc
            </label>
            <textarea
              value={taskDesc}
              onChange={(e) => {
                setTaskDesc(e.target.value);
              }}
              className="outline-none  w-full text-white text-sm px-3 py-2 font-mono bg-[#232b2b] resize-none mb-5"
              type="text"
              rows={4}
              placeholder="Write a Description"
              required
            />

            {/* Importance of task */}
            <div className="flex items-center gap-3">
              <input type="checkbox" name="imp" id="" className="h-4 w-4" />
              <p className="text-[1rem] text-blue-300">
                Mark as Important Task
              </p>
            </div>

            {/* Start Date and Last Date for Task ...  */}
            {/* <div className="flex items-center justify-between gap-3  flex-wrap">
              <div className="flex flex-col gap-1">
                <label className="text-green-500 text-sm" htmlFor="strtdate">
                  Start Date
                </label>
                <input
                  onChange={(e) => {
                    setStrtDate(e.target.value);
                  }}
                  value={strtDate}
                  className="text-sm text-white py-1 px-1 bg-[#232b2b]"
                  type="date"
                  name="strtDate"
                  id="strtDate"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-green-500 text-sm" htmlFor="enddate">
                  End Date
                </label>
                <input
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  value={endDate}
                  className="text-sm text-white py-1 px-1 bg-[#232b2b]"
                  type="date"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div> */}

            {/* Submit Button ..........  */}
            <input
              type="submit"
              value="Add Task"
              className="bg-[#87ace4] text-black font-semibold h-12 rounded-lg cursor-pointer active:scale-90 mt-5"
            />
          </form>
        </div>
      )}

      {/* Show Success after Adding Tasks ...  */}
      {showSuccess && (
        <div className="success-popup">Task Created Successfully!</div>
      )}
    </>
  );
};

export default Main;
