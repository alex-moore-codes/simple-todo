import { SetStateAction } from 'react';
import Checkbox from './Checkbox';
import { Task } from '@/app/page';

type TaskProps = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
};

export default function Task({ tasks, setTasks }: TaskProps) {
  return (
    <div className="mt-[32px] flex flex-col space-y-[27px]">
      {tasks &&
        tasks.map((task: Task) => (
          <div key={task.id} className="flex space-x-[7px]">
            <Checkbox checked={task.complete === 'Completed'} />
            <p
              className={`font-medium ${
                task.complete === 'Completed' && 'line-through'
              }`}
            >
              {task.description}
            </p>
          </div>
        ))}
    </div>
  );
}
