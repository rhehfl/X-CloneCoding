'use client';

import { TabContext } from '@/app/(afterLogin)/home/_component/TabProvider';
import Link from 'next/link';
import { useContext } from 'react';

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const setFol = () => {
    setTab('fol');
  };
  const setRec = () => {
    setTab('rec');
  };

  return (
    <nav className="bg-filter fixed z-10 w-[598px] border-b border-solid border-[rgba(239,243,244)] bg-[rgb(255,255,255,0.85)] backdrop-blur-md">
      <div className="px-3 py-4 text-[20px] font-bold">홈</div>
      <div className="flex h-full">
        <Link
          onClick={setFol}
          href="home"
          className="flex h-[53px] min-w-[53px] flex-1 items-center justify-center px-4 hover:bg-[rgba(15,20,25,0.1)]"
        >
          {tab === 'fol' ? (
            <>
              <span className="text-[15px] font-bold text-[rgba(15,20,25)]">
                추천
              </span>
              <div className="absolute bottom-0 h-1 w-[56px] rounded-full bg-[rgba(29,155,240)]" />
            </>
          ) : (
            <span className="text-[15px] text-[rgba(83,100,113)]">추천</span>
          )}
        </Link>
        <Link
          onClick={setRec}
          href="home"
          className="flex h-[53px] min-w-[53px] flex-1 items-center justify-center px-4 hover:bg-[rgba(15,20,25,0.1)]"
        >
          {tab === 'rec' ? (
            <>
              <span className="text-[15px] font-bold text-[rgba(15,20,25)]">
                팔로우 중
              </span>
              <div className="absolute bottom-0 h-1 w-[56px] rounded-full bg-[rgba(29,155,240)]" />
            </>
          ) : (
            <span className="text-[15px] text-[rgba(83,100,113)]">
              팔로우 중
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
