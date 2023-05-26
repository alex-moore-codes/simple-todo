'use client';

import { useState } from 'react';
import Menu from '@/components/Menu';
import AddTask from '@/components/AddTask';
import Task from '@/components/Task';

export type MenuItem = string;
export type Task = {
  id: number;
  description: string;
  complete: 'Active' | 'Completed';
};
export type ActiveNav = {
  isActiveNav: 'All' | 'Active' | 'Completed';
};

export default function Home() {
  const [isActiveNav, setIsActiveNav] = useState<MenuItem>('All');
  const [taskField, setTaskField] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section className="mt-[40px] w-2/5">
      <Menu isActiveNav={isActiveNav} setIsActiveNav={setIsActiveNav} />
      <AddTask
        isActiveNav={isActiveNav}
        taskField={taskField}
        setTaskField={setTaskField}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Task tasks={tasks} setTasks={setTasks} />
    </section>
  );
}
