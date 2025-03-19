import Image from 'next/image';
import Link from 'next/link';
import zLogo from '../../../public/zlogo.png';

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh]">
      <div className="w-full h-full flex">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center">
            <Image src={zLogo} alt="클론코딩이미지" width={306} height={276} />
          </div>
        </div>
        <div className="p-[16px] flex justify-center flex-col flex-1">
          <div className="my-[45px]">
            <span className="text-[64px] font-semibold">
              지금 일어나고 있는 일
            </span>
          </div>
          <div className="mb-[32px]">
            <span className="text-[31px] font-semibold">지금 가입하세요</span>
          </div>
          <Link
            href="/i/flow/signup"
            className="w-[300px] h-[40px] rounded-[20px] bg-[rgb(29,155,240)] flex items-center justify-center hover:bg-[rgb(26,140,216)] 
"
          >
            <span className=" text-white font-semibold">계정 만들기</span>
          </Link>
          <div className="mb-[40px]"></div>
          <span className="text-[17px] font-semibold mb-[20px]">
            이미 트위터에 가입하셨나요?
          </span>
          <Link
            href="/i/flow/login"
            className="w-[300px] h-[40px] rounded-[20px] border border-[rgb(207,217,222)] flex justify-center items-center hover:bg-[rgba(29,155,240,0.1)]"
          >
            <span className="text-[15px] text-[rgb(29,155,240)]">로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
