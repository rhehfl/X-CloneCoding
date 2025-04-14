'use client';

import Trend from '@/app/(afterLogin)/_component/Trend';
import getTrends from '@/app/(afterLogin)/_lib/getTrends';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export default function TrendSection() {
  const { data: session } = useSession();
  const { data: trends } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    enabled: !!session?.user,
  });

  return (
    <div className="mb-[16px] flex flex-col bg-[rgb(239,243,244)]">
      {trends?.map((trend) => <Trend key={trend.id} trend={trend} />)}
    </div>
  );
}
