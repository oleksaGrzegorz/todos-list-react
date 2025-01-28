import { useState } from "react";
import { useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  const markAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const savedTasksInLocalStorage = localStorage.getItem("tasks");
    if (savedTasksInLocalStorage) {
      setTasks(JSON.parse(savedTasksInLocalStorage));
    }
  }, []);

  return {
    tasks,
    addNewTask,
    markAllDone,
    toggleTaskDone,
    removeTask,
  };
};

export default useTasks;
