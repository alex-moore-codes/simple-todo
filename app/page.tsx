'use client';

import { useEffect, useState } from 'react';
import Menu from '@/components/Menu';
import AddTask from '@/components/AddTask';
import Task from '@/components/Task';
import { LocalLaundryService } from '@mui/icons-material';

export type MenuItem = string;
export type Task = {
  id: number;
  description: string;
  complete: boolean;
};

export default function Home() {
  const [isActiveNav, setIsActiveNav] = useState<MenuItem>('All');
  const [taskField, setTaskField] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const localTasks: string = localStorage.getItem('tasks') || '';
    function parseTasks(localTasks: string): Task[] {
      if (localTasks === '') {
        return [];
      }
      return JSON.parse(localTasks);
    }
    setTasks(parseTasks(localTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="mt-[40px] w-2/5">
      <Menu isActiveNav={isActiveNav} setIsActiveNav={setIsActiveNav} />
      {isActiveNav !== 'Completed' && (
        <AddTask
          taskField={taskField}
          setTaskField={setTaskField}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
      <Task tasks={tasks} setTasks={setTasks} isActiveNav={isActiveNav} />
    </section>
  );
}
