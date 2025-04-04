'use client';

import Image from 'next/image';

export default function LogoutButton() {
  const me = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };
  return (
    <button className="my-3 flex h-[66px] cursor-pointer items-center p-3 hover:rounded-[33px] hover:bg-[rgba(15,20,25,0.1)]">
      <Image
        src={me.image}
        alt={me.id}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="ml-2 hidden text-left xl:block">
        <div className="font-bold">{me.nickname}</div>
        <span>{me.id}</span>
      </div>
    </button>
  );
}
