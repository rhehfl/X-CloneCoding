'use client';

import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import getSinglePost from '@/app/(afterLogin)/_lib/getSinglePost';
import { useQuery } from '@tanstack/react-query';

interface ImageZoneProps {
  id: string;
}
export default function ImageZone({ id }: ImageZoneProps) {
  const { data: post } = useQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
  });
  return (
    <div className="flex flex-1 flex-col">
      <div
        className="flex-1 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${post?.Images[0].link})` }}
      ></div>
      <div className="flex items-center justify-center">
        <div className="h-[60px] w-[700px]">
          <ActionButtons white />
        </div>
      </div>
    </div>
  );
}
