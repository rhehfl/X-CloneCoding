'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChangeEventHandler, useState } from 'react';
export default function CommentForm() {
  const [content, setContent] = useState('');
  const { data: me } = useSession();
  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    setContent(e.target.value);
  };

  return (
    <form className="flex px-4 pt-4 pb-2">
      <div className="mr-3 h-[88px] w-[40px]">
        <div className="relative h-[40px] w-[40px]">
          <Image
            src={me?.user?.image as string}
            fill
            alt="프로필이미지"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col">
        <textarea
          onChange={handleContent}
          className="h-[48px] w-full resize-none overflow-hidden py-3 text-[20px] outline-none"
          placeholder="답글 게시하기"
          value={content}
        />
        <div className="flex h-[34px] justify-between">
          <button className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[16px] hover:bg-[rgba(15,20,25,0.1)]">
            <svg
              width="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="fill-[#1d9bf0]"
            >
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </g>
            </svg>
          </button>
          <button className="h-[36px] w-[94px] cursor-pointer rounded-[18px] bg-[#1d9bf0] text-[15px] text-white hover:bg-[rgb(26,140,216)]">
            답글
          </button>
        </div>
      </div>
    </form>
  );
}
