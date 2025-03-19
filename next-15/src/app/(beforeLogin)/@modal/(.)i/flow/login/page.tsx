'use client';

export default function Page() {
  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 flex justify-center items-center ]">
      <div className="bg-white relative top-[-5%] max-w-[80vw] min-w-[600px] h-[450px] rounded-[16px] flex flex-col ">
        <div className="h-[48px] flex items-center px-[16px] w-full">
          <button className="w-[34px] h-[34px] rounded-full hover:bg-[rgba(15,20,25,0.1)] flex items-center justify-center cursor-pointer">
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="flex h-full flex-col px-[80px]">
          <div className="h-[76px] flex items-center">
            <span className="text-[31px] font-bold">계정을 생성하세요</span>
          </div>
          <form className="h-full flex flex-col justify-between">
            <div>
              <div className="py-[12px]">
                <div className="flex flex-col relative h-[56px]">
                  <input
                    className="peer w-full border border-[rgb(207,217,222)] rounded-[4px] px-[8px] pt-[20px] pb-[8px] text-[17px] outline-none focus:border-[rgb(29,155,240)] transition"
                    placeholder=" "
                  />
                  <label
                    className="
                  absolute left-[8px] top-1/2 translate-y-[-50%]
                  text-[16px] text-[rgb(83,100,113)] pointer-events-none
                  peer-focus:text-[rgb(29,155,240)] peer-focus:scale-75 peer-focus:translate-y-[-90%]
                  transform origin-left transition-all duration-200 ease-out
                "
                  >
                    아이디
                  </label>
                </div>
              </div>
              <div className="py-[12px]">
                <div className="flex flex-col relative h-[56px]">
                  <input
                    className="peer w-full border border-[rgb(207,217,222)] rounded-[4px] px-[8px] pt-[20px] pb-[8px] text-[17px] outline-none focus:border-[rgb(29,155,240)] transition"
                    placeholder=" "
                  />
                  <label
                    className="
                  absolute left-[8px] top-1/2 translate-y-[-50%]
                  text-[16px] text-[rgb(83,100,113)] pointer-events-none
                  peer-focus:text-[rgb(29,155,240)] peer-focus:scale-75 peer-focus:translate-y-[-90%]
                  transform origin-left transition-all duration-200 ease-out
                "
                  >
                    비밀번호
                  </label>
                </div>
              </div>
            </div>

            <div className="py-[24px]">
              <button className="w-full h-[50px] rounded-[24px] bg-[rgb(15,20,25)] text-white cursor-pointer">
                로그인하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
