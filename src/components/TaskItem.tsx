interface TaksItem {
  description: string;
}

export function TaskItem(task: TaksItem) {
  return (
    <div>
      <input type="checkbox" />
      <label htmlFor="">{task.description}</label>
    </div>
  );
}
