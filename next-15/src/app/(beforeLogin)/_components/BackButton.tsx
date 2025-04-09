'use client';

import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <button
      onClick={handleClose}
      className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full hover:bg-[rgba(15,20,25,0.1)]"
    >
      <svg
        width={24}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="r-18jsvk2 r-19wmn03 r-1plcrui r-4qtqp9 r-bnwqim r-dnmrzs r-lrvibr r-yyyyoo r-z80fyv"
      >
        <g>
          <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
        </g>
      </svg>
    </button>
  );
}
