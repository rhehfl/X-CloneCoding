'use client';
import Trend from '@/app/(afterLogin)/_component/Trend';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const pathName = usePathname();
  if (pathName === '/explore') return null;
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
