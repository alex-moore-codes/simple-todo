'use client';

import { SetStateAction } from 'react';
import { Task } from '@/app/page';

type AddTaskProps = {
  taskField: string;
  setTaskField: React.Dispatch<SetStateAction<string>>;
  tasks: Task[];
  setTasks: React.Dispatch<SetStateAction<Task[]>>;
};

// export let nextId = 0;

export default function AddTask({
  taskField,
  setTaskField,
  tasks,
  setTasks,
}: AddTaskProps) {
  function handleAddTask() {
    function nextId(): number {
      return (Math.max(...tasks.map((task: Task) => task.id)) + 1) | 0;
    }

    setTasks([
      ...tasks,
      { id: nextId(), description: taskField, complete: false },
    ]);
    setTaskField('');
  }

  return (
    <div className="flex justify-between space-x-[25px] mt-[18px]">
      <input
        placeholder="add details"
        value={taskField}
        onChange={(e) => setTaskField(e.currentTarget.value)}
        className="rounded-[12px] py-[20px] px-[12px] border-solid border-[1px] border-[#BDBDBD] w-full"
      />

      <button
        onClick={handleAddTask}
        disabled={!taskField}
        className={`rounded-[12px] ${
          !taskField ? 'bg-[#BDBDBD]' : 'bg-primary'
        } text-[14px] font-semibold leading-[17.07px] w-[109px] text-[#FFFFFF]`}
      >
        Add
      </button>
    </div>
  );
}
