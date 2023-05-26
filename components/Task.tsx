import { SetStateAction } from 'react';
import Checkbox from './Checkbox';
import { Task, ActiveNav } from '@/app/page';

type TaskProps = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
  isActiveNav: ActiveNav;
};

export default function Task({ tasks, setTasks, isActiveNav }: TaskProps) {
  function handleCheck(task: Task) {
    const newTasks: Task[] = tasks.map((item: Task) => {
      if (item.id !== task.id) {
        return item;
      } else {
        return {
          ...item,
          complete: !item.complete,
        };
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="mt-[32px] flex flex-col space-y-[27px]">
      {tasks &&
        tasks.map((task: Task) => (
          <div key={task.id} className="flex space-x-[7px]">
            <Checkbox
              onCheck={() => handleCheck(task)}
              checked={task.complete}
            />
            <p className={`font-medium ${task.complete && 'line-through'}`}>
              {task.description}
            </p>
          </div>
        ))}
    </div>
  );
}
