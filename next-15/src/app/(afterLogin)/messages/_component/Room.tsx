'use client';

import relativeTime from 'dayjs/plugin/relativeTime';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useRouter } from 'next/navigation';
dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const user = {
    id: '도윤',
    nickname: 'dy',
    Messages: [
      { roomId: 123, content: '안녕하세요', createdAt: new Date() },
      { roomId: 1244, content: '안녕하세요2222', createdAt: new Date() },
    ],
  };
  const handleOnClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}/`);
  };

  return (
    <div
      onClickCapture={handleOnClick}
      className="flex cursor-pointer p-4 transition-colors duration-200 hover:bg-[rgba(0,0,0,0.03)]"
    >
      <img
        src={faker.image.avatar()}
        alt=""
        className="mr-4 h-[40px] w-[40px] rounded-full"
      />
      <div className="flex flex-col text-[15px] text-[#536471]">
        <div className="flex">
          <b className="text-black">{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>&nbsp;·&nbsp;
          <span>{dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}</span>
        </div>
        <div>{user.Messages.at(-1)?.content}</div>
      </div>
    </div>
  );
}
