import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function AddTask() {
  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <Input placeholder="Adicione uma tarefa" />
      <Button variant="secondary" size="sm">
        <Plus />
      </Button>
    </div>
  );
}
