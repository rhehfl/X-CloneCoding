'use client';

import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import { usePathname } from 'next/navigation';

export default function RightSearchZone() {
  const pathName = usePathname();
  if (pathName === '/explore') return null;
  if (pathName === '/search')
    return (
      <div className="flex flex-col pt-3">
        <div className="mb-4 rounded-[16px] border-1 border-[rgb(239,243,244)] p-4">
          <h2 className="text-[20px] font-bold">검색 필터</h2>
        </div>
        <div className="mb-4 rounded-[16px] border-1 border-[rgb(239,243,244)] p-4">
          <div className="flex flex-col text-[15px]">
            <div className="h-[36px] pt-3 pb-1">
              <label className="font-bold">사용자</label>
            </div>
            <div className="flex py-1">
              <label className="flex-1">누구나</label>
              <input
                type="radio"
                name="pf"
                className="h-[20px] w-[20px]"
                value="on"
                defaultChecked
              />
            </div>
            <div className="flex py-1">
              <label className="flex-1">내가 팔로우한 사람</label>
              <input type="radio" name="pf" className="h-[20px] w-[20px]" />
            </div>
          </div>
          <div className="flex flex-col text-[15px]">
            <div className="h-[36px] pt-3 pb-1">
              <label className="font-bold">위치</label>
            </div>
            <div className="flex py-1">
              <label className="flex-1">모두</label>
              <input
                type="radio"
                name="lg"
                className="h-[20px] w-[20px]"
                value="on"
                defaultChecked
              />
            </div>
            <div className="flex py-1">
              <label className="flex-1">내 근처</label>
              <input type="radio" name="lg" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </div>
    );
  return <SearchForm />;
}
