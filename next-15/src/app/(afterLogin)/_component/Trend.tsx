import Link from 'next/link';

export default function Trend() {
  return (
    <Link
      href="/search?q=제로초"
      className="flex cursor-pointer flex-col px-[16px] py-[12px] hover:bg-[rgb(229,233,234)]"
    >
      <span className="text-[13px] text-[rgba(83,100,113,1)]">
        실시간트렌드
      </span>
      <span className="mt-0.5 text-[15px] font-semibold">제로초</span>
      <span className="mt-1 text-[13px] text-[rgba(83,100,113,1)]">
        1,123post
      </span>
    </Link>
  );
}
