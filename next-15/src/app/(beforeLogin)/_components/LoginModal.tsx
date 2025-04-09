'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEventHandler, useState } from 'react';

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await signIn('credentials', {
        username: id,
        password,
        redirect: false,
      });
      router.replace('/home');
    } catch (err) {
      console.error(err);
      setMessage('확인좀');
    }
  };

  const handleClose = () => {
    router.back();
  };
  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="] absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="relative top-[-5%] flex h-[450px] max-w-[80vw] min-w-[600px] flex-col rounded-[16px] bg-white">
        <div className="flex h-[48px] w-full items-center px-[16px]">
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
        </div>
        <div className="flex h-full flex-col px-[80px]">
          <div className="flex h-[76px] items-center">
            <span className="text-[31px] font-bold">로그인하세요</span>
          </div>
          <form
            className="flex h-full flex-col justify-between"
            onSubmit={onSubmit}
          >
            <div>
              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    onChange={handleId}
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    아이디
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="relative flex h-[56px] flex-col">
                  <input
                    onChange={handlePassword}
                    className="peer w-full rounded-[4px] border border-[rgb(207,217,222)] px-[8px] pt-[20px] pb-[8px] text-[17px] transition outline-none focus:border-[rgb(29,155,240)]"
                    placeholder=" "
                  />
                  <label className="pointer-events-none absolute top-1/2 left-[8px] origin-left translate-y-[-50%] transform text-[16px] text-[rgb(83,100,113)] transition-all duration-200 ease-out peer-focus:translate-y-[-90%] peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)]">
                    비밀번호
                  </label>
                </div>
              </div>
            </div>

            <div className="py-[24px]">
              <button className="h-[50px] w-full cursor-pointer rounded-[24px] bg-[rgb(15,20,25,0.44)] text-white hover:bg-[rgb(15,20,25)]">
                로그인하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
