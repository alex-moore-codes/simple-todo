import './globals.css';
import { ReactNode } from 'react';
import { Raleway, Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple Todo App',
  description: 'Manage your todos with this simple app.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${raleway.className} pt-[32px]`}>
        <h1 className="text-center text-[36px] leading-[42.26px] font-bold tracking-tighter">
          &#x23;todo
        </h1>
        <main
          className={`${mont.className} w-2/5 flex flex-col justify-center items-center`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
