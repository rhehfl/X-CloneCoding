'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function FollowRecommend() {
  const handleClick = () => {};

  return (
    <li
      className="flex flex-col px-[16px] py-[12px] 
  cursor-pointer hover:bg-[rgb(229,233,234)] "
    >
      <Link href="그사람주소로나중에바꾸기">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="relative w-[40px] h-[40px] mr-2">
              <Image
                src="/elone.jpg"
                fill
                alt="이미지"
                className="rounded-[20px]"
              />
            </div>
            <div className="flex flex-col text-[15px]">
              <span>이름</span>
              <span className="text-[rgba(83,100,113)] font-medium">이름2</span>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="flex items-center min-h-[32px] px-[16px] 
        bg-[rgba(15,20,25)] rounded-[16px] cursor-pointer hover:bg-[rgba(39,44,48)]"
          >
            <span className="text-white text-[14px] font-bold ">팔로우</span>
          </button>
        </div>
      </Link>
    </li>
  );
}
