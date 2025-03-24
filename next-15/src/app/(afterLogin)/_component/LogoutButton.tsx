'use client';

import Image from 'next/image';

export default function LogoutButton() {
  const me = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };
  return (
    <button className="flex items-center w-[258px] h-[66px] cursor-pointer p-3 hover:bg-[rgba(15,20,25,0.1)] hover:rounded-[33px]">
      <Image
        src={me.image}
        alt={me.id}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="text-left ml-2">
        <div className="font-bold">{me.nickname}</div>
        <span>{me.id}</span>
      </div>
    </button>
  );
}
