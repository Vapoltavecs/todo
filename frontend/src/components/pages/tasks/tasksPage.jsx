import classes from "./tasks.module.scss";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import getAllTasks from "../../../redux/asyncFunctions/getAllTasks";
import Task from "./task/task";
import Spinner from "../../spinner/Spinner";


const TasksPage = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.AuthReducer.token);
  const isLoading = useSelector((state) => state.setLoading.isLoading);
  const tasks = useSelector((state) => state.getAllTasks.tasks);
  const completedTask = tasks.filter((data) => data.isComplete === true)
  const notCompleted = tasks.filter(data => data.isComplete === false)



  const removeTask = async (taskId) => {
    const result = await fetch("http://localhost:8000/api/delete/delete", {
      method: "POST",
      body: JSON.stringify({ taskId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      dispatch(getAllTasks(id));
    } else {
      alert("Что то пошло не так");
    }
  };

  const completeTask = async (Taskid) => {
    const result = await fetch("http://localhost:8000/api/complete/", {
      method: "POST",
      body: JSON.stringify({ id: Taskid }),
      headers: {
        "Content-Type": "application/json",
      },

    });
    dispatch(getAllTasks(id));
  }
  useEffect(() => {
    dispatch(getAllTasks(id));
  }, []);

  const tasksArrayComplete = completedTask.map((data) => (
    <Task
      title={data.title}
      description={data.description}
      id={data._id}
      planed={data.planed}
      removeTask={removeTask}
      completeTask={completeTask} ъ
      isComplete={data.isComplete}
    />
  ));
  const tasksArrayNotComplete = notCompleted.map((data) => (
    <Task
      title={data.title}
      description={data.description}
      id={data._id}
      planed={data.planed}
      removeTask={removeTask}
      completeTask={completeTask}
    />
  ));
  return !isLoading ? (
    <div>
      {tasks.length > 0 ? (
        <div>
          {tasksArrayNotComplete.length > 0 && <div className="not-completed">
            <div className={classes.title}>Невыполенные задачи:</div>
            <div>{tasksArrayNotComplete}</div>
          </div>
          }
          {tasksArrayComplete.length > 0 && <div className="completed">
            <div className={classes.title}>Выполненные задачи:</div>
            <div>{tasksArrayComplete}</div>
          </div>
          }
        </div>
      ) : (
        <div className={classes.empty}>Задач пока нет</div>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default TasksPage;
