'use client';

import PostForm from '@/app/(afterLogin)/_component/PostForm';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const handleclose = () => {
    router.back();
  };
  return (
    <div className="absolute top-0 left-0 z-20 flex h-full w-full justify-center bg-[rgb(0,0,0,0.4)]">
      <div className="relative top-[5%] flex max-h-[90vh] max-w-[80vw] min-w-[600px] flex-col rounded-[16px] bg-white">
        <div className="flex h-[53px] items-center px-4">
          <button
            onClick={handleclose}
            className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[50%] hover:bg-[rgba(15,20,25,0.1)]"
          >
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
        <PostForm />
      </div>
    </div>
  );
}
