import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import axios from "axios";

interface AddTask {
  getTasks: () => void;
}

export function AddTask({ getTasks }: AddTask) {
  const [descriptionTask, setDescriptionTask] = useState("");
  function handleAddDescriptionTask(e: ChangeEvent<HTMLInputElement>) {
    setDescriptionTask(e.target.value);
  }
  async function handleAddTask() {
    try {
      if (!descriptionTask) {
        return alert("Precisa ter uma descrição");
      }
      await axios.post("http://localhost:8000/tasks/", {
        description: descriptionTask,
      });
      getTasks();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <Input
        placeholder="Adicione uma tarefa"
        onChange={(e) => handleAddDescriptionTask(e)}
      />
      <Button variant="secondary" size="sm" onClick={handleAddTask}>
        <Plus />
      </Button>
    </div>
  );
}
