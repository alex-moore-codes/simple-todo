'use client';

type MenuItem = {
  name: string;
  active: boolean;
};

const menuItems: MenuItem[] = [
  { name: 'All', active: true },
  { name: 'Active', active: false },
  { name: 'Completed', active: false },
];

export default function Menu() {
  return (
    <nav className="w-full border-b-[1px] border-[#BDBDBD] border-solid py-[18px]">
      <div className="flex justify-evenly">
        {menuItems.map((item: MenuItem) => (
          <button className={`${item.active && 'text-primary'}`}>
            <span className="text-[14px] leading-[17.07px] font-semibold">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
