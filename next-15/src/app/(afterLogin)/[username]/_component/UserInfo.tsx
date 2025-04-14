'use client';

import getUser from '@/app/(afterLogin)/[username]/_lib/getUser';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
interface UserInfoProps {
  username: string;
}
export default function UserInfo({ username }: UserInfoProps) {
  const { data: user } = useQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });

  if (!user)
    return (
      <>
        <div className="flex h-[53px] w-full items-center">
          <BackButton />
          <h3 className="ml-[30px] text-[20px] font-bold">
            존재하지 않는 유저입니다.
          </h3>
        </div>
        <div className="flex items-center px-3 py-4">
          <div className="relative mr-3 h-[134px] w-[134px] rounded-full">
            {' '}
          </div>
          <div className="mx-3 flex flex-col">
            <span className="text-[20px] font-bold">
              존재하지 않는 유저입니다.
            </span>
            <span className="text-[15px]">존재하지 않는 유저입니다.</span>
          </div>
        </div>
        <div className="flex py-2">
          <span>0 팔로워</span>
          &nbsp;
          <span>0 팔로우 중</span>
        </div>
      </>
    );

  return (
    <>
      <div className="flex h-[53px] w-full items-center">
        <BackButton />
        <h3 className="ml-[30px] text-[20px] font-bold">{user.nickname}</h3>
      </div>
      <div className="flex items-center px-3 py-4">
        <div className="relative mr-3 h-[134px] w-[134px] rounded-full">
          <Image
            src={user.image}
            fill
            alt="프로필이미지"
            className="rounded-full"
          />
        </div>
        <div className="mx-3 flex flex-col">
          <span className="text-[20px] font-bold">{user.nickname}</span>
          <span className="text-[15px]">{user.id}</span>
        </div>
      </div>
      <div className="flex py-2">
        <span>0 팔로워</span>
        &nbsp;
        <span>0 팔로우 중</span>
      </div>
    </>
  );
}
