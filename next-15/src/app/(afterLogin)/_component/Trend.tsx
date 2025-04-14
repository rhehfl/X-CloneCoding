import { Trend as ITrend } from '@/app/model/Trend';
import Link from 'next/link';

interface TrendProps {
  trend: ITrend;
}

export default function Trend({ trend }: TrendProps) {
  return (
    <Link
      href={`/search?q=${trend.title}`}
      className="flex cursor-pointer flex-col px-[16px] py-[12px] hover:bg-[rgb(229,233,234)]"
    >
      <span className="text-[13px] text-[rgba(83,100,113,1)]">
        실시간트렌드
      </span>
      <span className="mt-0.5 text-[15px] font-semibold">{trend.title}</span>
      <span className="mt-1 text-[13px] text-[rgba(83,100,113,1)]">
        {trend.count.toLocaleString()}post
      </span>
    </Link>
  );
}
