import Menu from '@/components/Menu';
import AddTask from '@/components/AddTask';
import Task from '@/components/Task';

export default function Home() {
  return (
    <section className="mt-[40px] w-2/5">
      <Menu />
      <AddTask />
      <Task />
    </section>
  );
}
