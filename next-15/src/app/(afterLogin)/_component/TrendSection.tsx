'use client';
import Trend from '@/app/(afterLogin)/_component/Trend';
import getTrends from '@/app/(afterLogin)/_lib/getTrends';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const { data: session } = useSession();
  const pathName = usePathname();
  const { data: trends } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    enabled: !!session?.user,
  });

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
      {trends?.map((trend) => <Trend key={trend.id} trend={trend} />)}
    </div>
  );
}
