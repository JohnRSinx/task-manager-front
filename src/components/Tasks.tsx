import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { AddTask } from "./AddTask";

interface Task {
  _id: string;
  description: string;
  isCompleted: boolean;
}
export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    try {
      const { data } = await axios.get<Task[]>("http://localhost:8000/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const tasksNotCompleted = tasks.filter((task) => task.isCompleted === false);
  const completedTasks = tasks.filter((task) => task.isCompleted === true);

  return (
    <div className="max-w-96">
      <h1 className="text-2xl">Minhas Tarefas</h1>
      <AddTask getTasks={getTasks} />
      <h2 className="text-xl mt-4">Últimas tarefas</h2>
      {tasksNotCompleted.map((task) => (
        <TaskItem
          key={task._id}
          description={task.description}
          isCompleted={task.isCompleted}
          getTasks={getTasks}
          id={task._id}
        />
      ))}
      <h2 className="text-xl mt-4">Tarefas concluidas</h2>
      {completedTasks.map((task) => (
        <TaskItem
          key={task._id}
          description={task.description}
          isCompleted={task.isCompleted}
          getTasks={getTasks}
          id={task._id}
        />
      ))}
    </div>
  );
}
