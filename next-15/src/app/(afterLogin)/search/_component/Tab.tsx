'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Tab() {
  const [current, setCurrent] = useState<'hot' | 'live'>('hot');
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`);
  };
  const onClickLive = () => {
    setCurrent('live');
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className="flex h-[53px] w-[600px] cursor-pointer border-b-1 border-solid border-[rgba(239,243,244)]">
      <div
        onClick={onClickHot}
        className="relative flex flex-1 items-center justify-center hover:bg-[rgba(15,20,25,0.1)]"
      >
        인기
        {current === 'hot' && (
          <div className="absolute bottom-0 h-1 w-[56px] rounded-full bg-[#1d9bf0]" />
        )}
      </div>
      <div
        onClick={onClickLive}
        className="relative flex flex-1 items-center justify-center hover:bg-[rgba(15,20,25,0.1)]"
      >
        최신
        {current === 'live' && (
          <div className="absolute bottom-0 h-1 w-[56px] rounded-full bg-[#1d9bf0]" />
        )}
      </div>
    </div>
  );
}
