"use client";

import { useRouter } from "next/navigation";

export default function SignupModal() {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex bg-[rgba(0,0,0,0.4)] h-sxcreen justify-center w-screen ] absolute items-center left-0 top-0">
      <div className="flex flex-col bg-white h-[550px] rounded-[16px] max-w-[80vw] min-w-[600px] relative top-[-5%]">
        <div className="flex h-[48px] w-full items-center px-[16px]">
          <button
            onClick={handleClose}
            className="flex h-[34px] justify-center rounded-full w-[34px] cursor-pointer hover:bg-[rgba(15,20,25,0.1)] items-center"
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
        <div className="flex flex-col h-full px-[80px]">
          <div className="flex h-[76px] items-center">
            <span className="text-[31px] font-bold">계정을 생성하세요</span>
          </div>
          <form className="flex flex-col h-full justify-between">
            <div>
              <div className="py-[12px]">
                <div className="flex flex-col h-[56px] relative">
                  <input
                    type="text"
                    className="border border-[rgb(207,217,222)] rounded-[4px] text-[17px] w-full focus:border-[rgb(29,155,240)] outline-none pb-[8px] peer pt-[20px] px-[8px] transition"
                    placeholder=" "
                  />
                  <label className="text-[16px] text-[rgb(83,100,113)] absolute duration-200 ease-out left-[8px] origin-left peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)] peer-focus:translate-y-[-90%] pointer-events-none top-1/2 transform transition-all translate-y-[-50%]">
                    아이디
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="flex flex-col h-[56px] relative">
                  <input
                    type="text"
                    className="border border-[rgb(207,217,222)] rounded-[4px] text-[17px] w-full focus:border-[rgb(29,155,240)] outline-none pb-[8px] peer pt-[20px] px-[8px] transition"
                    placeholder=" "
                  />
                  <label className="text-[16px] text-[rgb(83,100,113)] absolute duration-200 ease-out left-[8px] origin-left peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)] peer-focus:translate-y-[-90%] pointer-events-none top-1/2 transform transition-all translate-y-[-50%]">
                    닉네임
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="flex flex-col h-[56px] relative">
                  <input
                    type="password"
                    className="border border-[rgb(207,217,222)] rounded-[4px] text-[17px] w-full focus:border-[rgb(29,155,240)] outline-none pb-[8px] peer pt-[20px] px-[8px] transition"
                    placeholder=" "
                  />
                  <label className="text-[16px] text-[rgb(83,100,113)] absolute duration-200 ease-out left-[8px] origin-left peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)] peer-focus:translate-y-[-90%] pointer-events-none top-1/2 transform transition-all translate-y-[-50%]">
                    비밀번호
                  </label>
                </div>
              </div>

              <div className="py-[12px]">
                <div className="flex flex-col h-[56px] relative">
                  <input
                    type="file"
                    className="border border-[rgb(207,217,222)] rounded-[4px] text-[17px] w-full focus:border-[rgb(29,155,240)] outline-none pb-[8px] peer pt-[20px] px-[8px] transition"
                    placeholder=" "
                  />
                  <label className="text-[16px] text-[rgb(83,100,113)] absolute duration-200 ease-out left-[8px] origin-left peer-focus:scale-75 peer-focus:text-[rgb(29,155,240)] peer-focus:translate-y-[-90%] pointer-events-none top-1/2 transform transition-all translate-y-[-50%]">
                    프로필
                  </label>
                </div>
              </div>
            </div>

            <div className="py-[24px]">
              <button className="bg-[rgb(15,20,25,0.44)] h-[50px] rounded-[24px] text-white w-full cursor-pointer hover:bg-[rgb(15,20,25)]">
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
