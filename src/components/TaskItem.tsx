import { Trash } from "lucide-react";
import { ChangeEvent } from "react";

interface TaskItemProps {
  description: string;
  isCompleted: boolean;
  handleChangeTaskComplete: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TaskItem({
  description,
  isCompleted,
  handleChangeTaskComplete,
}: TaskItemProps) {
  return (
    <div className="flex items-center p-3 rounded-lg">
      <input
        type="checkbox"
        className="form-checkbox h-6 w-6 text-green-500"
        defaultChecked={isCompleted}
        onChange={(e) => handleChangeTaskComplete(e)}
      />
      <label
        className={`ml-3 text-lg font-medium ${
          isCompleted ? "line-through text-gray-500" : "text-gray-700"
        }`}
        htmlFor="task"
      >
        {description}
      </label>
      <button className="ml-auto focus:outline-none">
        <Trash className="w-6 h-6 text-red-500 hover:text-red-700" />
      </button>
    </div>
  );
}
