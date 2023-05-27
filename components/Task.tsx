import { SetStateAction } from 'react';
import Checkbox from './Checkbox';
import { MenuItem, Task } from '@/app/page';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type TaskProps = {
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
  isActiveNav: MenuItem;
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

  function handleDelete(task: Task) {
    const newTasks: Task[] = tasks.filter((item: Task) => item.id !== task.id);
    setTasks(newTasks);
  }

  function handleDeleteAll() {
    const newTasks: Task[] = tasks.filter((item: Task) => !item.complete);
    setTasks(newTasks);
  }

  return (
    <div className="relative min-h-fit">
      <div className="mt-[32px] flex flex-col space-y-[27px]">
        {tasks &&
          tasks.map((task: Task) => (
            <div key={task.id} className="flex justify-between">
              <div className="flex space-x-[7px]">
                <Checkbox
                  onCheck={() => handleCheck(task)}
                  checked={task.complete}
                />
                <p className={`font-medium ${task.complete && 'line-through'}`}>
                  {task.description}
                </p>
              </div>
              {isActiveNav === 'Completed' && (
                <div className="w-1/6 flex justify-end mr-3">
                  <button onClick={() => handleDelete(task)}>
                    <DeleteOutlinedIcon className="h-6 w-6 text-[#BDBDBD]" />
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      {isActiveNav === 'Completed' && (
        <button
          onClick={handleDeleteAll}
          className="font-semibold bg-[#EB5757] absolute mt-[35px] right-0 text-[12px] leading-[14.63px] rounded-[4px] flex justify-center text-white w-[124px] h-[40px] space-x-[5.5px] items-center"
        >
          <DeleteOutlinedIcon className=" w-4 h-4" />
          <span>delete all</span>
        </button>
      )}
    </div>
  );
}
