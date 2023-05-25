import Checkbox from './Checkbox';

type Task = {
  id: number;
  description: string;
  complete: boolean;
};

const tasks: Task[] = [
  { id: 1, description: 'test task 1', complete: false },
  { id: 2, description: 'test task 2', complete: false },
  { id: 3, description: 'test task 3', complete: true },
];

export default function Task() {
  return (
    <div className="mt-[32px] flex flex-col space-y-[27px]">
      {tasks.map((task: Task) => (
        <div key={task.id} className="flex space-x-[7px]">
          <Checkbox checked={task.complete} />
          <p className={`font-medium ${task.complete && 'line-through'}`}>
            {task.description}
          </p>
        </div>
      ))}
    </div>
  );
}
