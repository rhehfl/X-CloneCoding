import BackButton from '@/app/(afterLogin)/_component/BackButton';
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function ChatRoom() {
  const you = {
    id: 'youyou',
    nickname: '닉네임임',
    image: faker.image.avatar(),
  };
  const meassages = [
    {
      messageId: 1,
      roomId: 123,
      id: 'youyou',
      content: '안녕하세saddddddddddddddddddddddddddddddddddddd요',
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: '도윤',
      content: '안녕하세요2222',
      createdAt: new Date(),
    },
  ];
  return (
    <main className="flex h-[100dvh] flex-col border-x-1 border-solid border-[#eff3f4]">
      <div className="flex h-[53px] items-center px-4">
        <BackButton />
        <h3 className="ml-[40px] text-[20px] font-bold">{you.nickname}</h3>
      </div>
      <Link
        href={`/${you.id}`}
        className="mb-5 flex flex-col items-center border-b-1 border-solid border-[#eff3f4] px-4 pt-5 pb-[60px] hover:bg-[rgba(0,0,0,0.04)]"
      >
        <img src={you.image} className="h-16 w-16 rounded-full" />
        <div>
          <b>{you.nickname}</b>
        </div>
        <div>
          <span>@{you.id}</span>
        </div>
      </Link>
      <div className="flex-1 px-4">
        {meassages.map((message) => {
          if (message.id === you.id) {
            return (
              <div key={message.messageId} className="flex flex-col items-end">
                <div className="rounded-l-[22px] rounded-tr-[22px] bg-[#0083eb] px-4 py-3 text-[15px] text-white">
                  {message.content}
                </div>
                <div className="mt-2 text-[13px] text-[#536471]">
                  {dayjs(message.createdAt).format(
                    'YYYY년 MM월 DD일 A HH시 mm분'
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={message.messageId}
                className="flex flex-col items-start"
              >
                <div className="rounded-tl-[22px] rounded-r-[22px] bg-[#eff3f4] px-4 py-3 text-[15px] text-black">
                  {message.content}
                </div>
                <div className="mt-2 text-[13px] text-[#536471]">
                  {dayjs(message.createdAt).format(
                    'YYYY년 MM월 DD일 A HH시 mm분'
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="h-14 border-t-1 border-solid border-[#eff3f4]">
        <form className="mx-3 my-1 flex h-[42px] w-full items-center rounded-[16px] bg-[#eff3f4] p-1">
          <textarea
            className="line-height-[20px] h-5 flex-1 resize-none overflow-hidden text-[15px] outline-none"
            placeholder="새 쪽지 작성하기"
          />
          <button className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="18"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03 fill-[#1d9bf0]"
            >
              <g>
                <path d="M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z"></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}
