import AddTask from '@/components/AddTask';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <section className="mt-[40px] w-2/5">
      <Menu />
      <AddTask />
    </section>
  );
}
