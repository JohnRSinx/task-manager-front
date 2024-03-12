import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TaskItem } from "./TaskItem";

interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}
export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const getTasks = async () => {
    try {
      const { data } = await axios.get<Task[]>("http://localhost:8000/tasks");
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  const tasksNotCompleted = tasks.filter((task) => task.isCompleted === false);

  return (
    <>
      <div>Tarefas</div>
      {tasksNotCompleted.map((task) => (
        <TaskItem key={task.id} description={task.description} />
      ))}
      <div>Tarefas concluidas</div>
      {completedTasks.map((task) => (
        <TaskItem key={task.id} description={task.description} />
      ))}
    </>
  );
}
