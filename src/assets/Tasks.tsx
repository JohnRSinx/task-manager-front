import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { AddTask } from "./AddTask";

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
    <div className="max-w-96">
      <h1 className="text-2xl">Minhas Tarefas</h1>
      <AddTask />
      <h2 className="text-xl mt-4">Últimas tarefas</h2>
      {tasksNotCompleted.map((task) => (
        <TaskItem key={task.id} description={task.description} />
      ))}
      <h2 className="text-xl mt-4">Tarefas concluidas</h2>
      {completedTasks.map((task) => (
        <TaskItem key={task.id} description={task.description} />
      ))}
    </div>
  );
}
