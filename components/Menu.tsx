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
    <nav className="border-b-[1px] border-[#BDBDBD] border-solid py-[18px] flex justify-center">
      {menuItems.map((item: MenuItem) => (
        <div className="w-1/3 flex justify-evenly relative">
          <button>
            <span className="text-[14px] leading-[17.07px] font-semibold">
              {item.name}
            </span>
          </button>
          {item.active && (
            <div className="bg-primary absolute -bottom-[19px] h-[4px] w-1/3 rounded-t-[4px]" />
          )}
        </div>
      ))}
    </nav>
  );
}
