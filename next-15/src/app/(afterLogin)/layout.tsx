import Link from 'next/link';
import { ReactNode } from 'react';
import zLogo from '../../../public/zlogo.png';
import Image from 'next/image';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu';
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton';
import TrendSection from '@/app/(afterLogin)/_component/TrendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend';
import RightSearchZone from '@/app/(afterLogin)/_component/RightSearchZone';
interface AfterLoginLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function AfterLoginLayout({
  children,
  modal,
}: AfterLoginLayoutProps) {
  return (
    <div className="flex items-stretch">
      <header className="flex flex-grow-1 flex-col items-end">
        <section className="h-[100dvh] w-[275px]">
          <div className="fixed flex h-full w-[inherit] flex-col">
            <Link
              href="/home"
              className="flex h-[50px] w-[50px] items-center justify-center hover:rounded-[50%] hover:bg-[rgba(15,20,25,0.1)]"
            >
              <Image src={zLogo} alt="zlogo이미지" width={40} height={40} />
            </Link>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href="/compose/tweet"
                className="my-2 flex h-[52px] w-[234px] items-center justify-center rounded-[26px] bg-[rgb(29,155,240)] font-bold text-white hover:bg-[rgb(26,140,216)]"
              >
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex-grow-1">
        <div className="flex h-full w-[990px] justify-between">
          <main className="w-[600px]">{children}</main>
          <div className="flex w-[350px] flex-col items-stretch">
            <RightSearchZone />
            <TrendSection />
            <div className="flex flex-col rounded-[16px] bg-[rgb(239,243,244)]">
              <div className="px-[16px] py-[12px] text-[20px] font-bold">
                <h3>팔로우 추천</h3>
                <ul>
                  <FollowRecommend />
                  <FollowRecommend />
                  <FollowRecommend />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
}
