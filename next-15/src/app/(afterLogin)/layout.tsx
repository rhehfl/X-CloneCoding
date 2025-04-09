import Link from 'next/link';
import { ReactNode } from 'react';
import zLogo from '../../../public/zlogo.png';
import Image from 'next/image';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu';
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton';
import TrendSection from '@/app/(afterLogin)/_component/TrendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend';
import RightSearchZone from '@/app/(afterLogin)/_component/RightSearchZone';
import { auth } from '@/auth';
interface AfterLoginLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default async function AfterLoginLayout({
  children,
  modal,
}: AfterLoginLayoutProps) {
  const session = await auth();
  return (
    <div className="flex items-stretch justify-center">
      <header className="flex flex-grow-1 justify-end">
        <section className="flex h-[100dvh] w-[72px] xl:w-[275px]">
          <div className="fixed flex h-full flex-col xl:w-[inherit]">
            <Link
              href="/home"
              className="flex h-[50px] w-[50px] items-center justify-center hover:rounded-[50%] hover:bg-[rgba(15,20,25,0.1)]"
            >
              <Image src={zLogo} alt="zlogo이미지" width={40} height={40} />
            </Link>
            {session?.user && (
              <>
                <nav className="flex-1">
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link
                    href="/compose/tweet"
                    className="my-2 flex h-[50px] w-[50px] items-center justify-center rounded-[26px] bg-[rgb(29,155,240)] font-bold text-white hover:bg-[rgb(26,140,216)] xl:h-[52px] xl:w-[234px]"
                  >
                    <span className="hidden xl:inline">게시하기</span>
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      aria-hidden="true"
                      className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp fill-white xl:hidden"
                    >
                      <g>
                        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                      </g>
                    </svg>
                  </Link>
                </nav>
              </>
            )}

            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex-grow-1">
        <div className="flex h-full justify-between lg:w-[990px]">
          <main className="w-[600px]">{children}</main>
          <div className="hidden w-[350px] flex-col items-stretch lg:flex">
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
