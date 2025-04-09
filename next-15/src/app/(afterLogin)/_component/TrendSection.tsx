'use client';
import Trend from '@/app/(afterLogin)/_component/Trend';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const pathName = usePathname();
  const { data: session } = useSession();
  if (pathName === '/explore') return null;
  if (!session?.user) {
    return (
      <div className="mb-[16px] flex flex-col rounded-[16px] bg-[rgb(239,243,244)]">
        <div className="px-[16px] py-[12px] text-[16px]">
          트렌드를 볼 수 없습니다.
        </div>
      </div>
    );
  }
  return (
    <div className="mb-[16px] flex flex-col rounded-[16px] bg-[rgb(239,243,244)]">
      <div className="px-[16px] py-[12px] text-[20px] font-bold">
        <h2>나를 위한 트렌드</h2>
      </div>
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <Trend />
    </div>
  );
}
