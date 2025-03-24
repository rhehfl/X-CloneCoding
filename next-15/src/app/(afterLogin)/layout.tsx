import Link from 'next/link';
import { PropsWithChildren } from 'react';
import zLogo from '../../../public/zlogo.png';
import Image from 'next/image';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu';
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton';

export default function AfterLoginLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-stretch ">
      <header className="flex flex-grow-1 flex-col items-end">
        <section className="w-[275px] bg-amber-950 h-[100dvh]">
          <div className="fixed w-[inherit] h-full flex flex-col">
            <Link
              href="/home"
              className="flex justify-center items-center w-[50px] h-[50px] hover:rounded-[50%] hover:bg-[rgba(15,20,25,0.1)]"
            >
              <Image
                src={zLogo}
                alt="zlogo이미지"
                width={40}
                height={40}
              ></Image>
            </Link>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href="/compose/tweet"
                className="flex justify-center items-center w-[234px] h-[52px] bg-[rgb(29,155,240)] my-2 text-white font-bold rounded-[26px]
                hover:bg-[rgb(26,140,216)]"
              >
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex-grow-1 ">
        <div className="flex h-full w-[990px] justify-between">
          <main className="w-[600px] bg-amber-500">{children}</main>
          <div className="w-[350px] bg-amber-300">
            <form
              className="fixed rounded-[21px] h-[42px] w-[inherit] bg-white flex mt-[6px] mb-[12px] items-center
              border border-solid border-gray-500 focus-within:border-2 focus-within:border-blue-500"
            >
              <svg
                width={20}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-[20px] fill-[rgb(83,100,113)]"
              >
                <g>
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </g>
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="w-full pr-[16px] pl-[4px] focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
