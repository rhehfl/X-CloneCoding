'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChangeEventHandler, useRef, useState } from 'react';

export default function PostForm() {
  const [content, setContent] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);
  const { data: me } = useSession();
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    setContent(e.target.value);
  };

  const handleImageUploadClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <div className="flex w-full items-center justify-center px-4 pt-1">
      <form className="flex h-full w-full">
        <div className="mr-2 h-full pt-3">
          <div className="relative h-[40px] w-[40px]">
            {me?.user?.image && (
              <Image
                src={me?.user?.image}
                fill
                alt="프로필사진"
                className="rounded-full"
              />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="py-3">
            <textarea
              onChange={handleChange}
              placeholder="무슨 일이 일어나고 있나요?"
              className="w-full py-3 text-[20px] outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <input type="file" hidden multiple ref={imageRef} />
            <button
              onClick={handleImageUploadClick}
              type="button"
              className="cursor-pointer rounded-[17px] hover:bg-[rgb(29,155,240,0.1)]"
            >
              <div className="flex h-[36px] w-[36px] items-center justify-center">
                <svg
                  width={24}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="fill-[rgb(29,155,240)]"
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </div>
            </button>
            <button
              disabled={!content.length}
              type="submit"
              className="h-[36px] w-[94px] cursor-pointer rounded-[18px] bg-[rgb(29,155,240)] font-bold text-white hover:bg-[rgb(26,140,216)] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-[rgb(29,155,240)]"
            >
              게시하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
