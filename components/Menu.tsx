'use client';

import { MenuItem } from '@/app/page';
import { SetStateAction } from 'react';

type MenuProps = {
  isActiveNav: string;
  setIsActiveNav: React.Dispatch<SetStateAction<string>>;
};

const menuItems: MenuItem[] = ['All', 'Active', 'Completed'];

export default function Menu({ isActiveNav, setIsActiveNav }: MenuProps) {
  return (
    <nav className="border-b-[1px] border-[#BDBDBD] border-solid py-[18px] flex justify-center">
      {menuItems.map((item: MenuItem) => (
        <div className="w-1/3 flex justify-evenly relative" key={item}>
          <button onClick={() => setIsActiveNav(item)}>
            <span className="text-[14px] leading-[17.07px] font-semibold">
              {item}
            </span>
          </button>
          {item === isActiveNav && (
            <div className="bg-primary absolute -bottom-[19px] h-[4px] w-1/3 rounded-t-[4px]" />
          )}
        </div>
      ))}
    </nav>
  );
}
