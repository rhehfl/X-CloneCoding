'use client';

import { NAV_MENU } from '@/app/(afterLogin)/_component/constants';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  const { data: me } = useSession();
  console.log(segment, me?.user?.email, segment === me?.user?.email);
  return (
    <>
      {NAV_MENU.map((menu) => {
        const isActive = '/' + segment === menu.route;

        return (
          <li key={menu.id}>
            <Link href={menu.route} className="group flex">
              <div className="flex h-[50px] items-center justify-center p-[12px] group-hover:rounded-[29px] group-hover:bg-[rgba(15,20,25,0.1)]">
                {isActive ? menu.activeSvg : menu.inActiveSvg}
                <span
                  className={`mr-[16px] ml-[20px] text-[20px] ${isActive && 'font-bold'} hidden xl:block`}
                >
                  {menu.title}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
      <li>
        <Link href={`/${me?.user?.email}`} className="group flex">
          <div className="flex h-[50px] items-center justify-center p-[12px] group-hover:rounded-[29px] group-hover:bg-[rgba(15,20,25,0.1)]">
            {segment === me?.user?.email ? (
              <>
                <svg
                  width={26}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e fill-black"
                >
                  <g>
                    <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                  </g>
                </svg>
                <span className="mr-[16px] ml-[20px] hidden text-[20px] font-bold xl:block">
                  프로필
                </span>
              </>
            ) : (
              <>
                <svg
                  width={26}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
                >
                  <g>
                    <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                  </g>
                </svg>
                <span className="mr-[16px] ml-[20px] hidden text-[20px] xl:block">
                  프로필
                </span>
              </>
            )}
          </div>
        </Link>
      </li>
    </>
  );
}
