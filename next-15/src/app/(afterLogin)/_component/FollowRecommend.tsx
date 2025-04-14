'use client';
import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/app/model/User';
interface FollowRecommendProps {
  user: User;
}
export default function FollowRecommend({ user }: FollowRecommendProps) {
  const handleClick = () => {};

  return (
    <li className="flex cursor-pointer flex-col px-[16px] py-[12px] hover:bg-[rgb(229,233,234)]">
      <Link href="그사람주소로나중에바꾸기">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="relative mr-2 h-[40px] w-[40px]">
              <Image
                src={user.image}
                fill
                alt="이미지"
                className="rounded-[20px]"
              />
            </div>
            <div className="flex flex-col text-[15px]">
              <span>{user.nickname}</span>
              <span className="font-medium text-[rgba(83,100,113)]">
                @{user.id}
              </span>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="flex min-h-[32px] cursor-pointer items-center rounded-[16px] bg-[rgba(15,20,25)] px-[16px] hover:bg-[rgba(39,44,48)]"
          >
            <span className="text-[14px] font-bold text-white">팔로우</span>
          </button>
        </div>
      </Link>
    </li>
  );
}
