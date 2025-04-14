'use client';

import getSinglePost from '@/app/(afterLogin)/_lib/getSinglePost';
import Post from '@/app/(afterLogin)/_component/Post';
import { useQuery } from '@tanstack/react-query';

interface SinglePostProps {
  id: string;
  noImage: boolean;
}

export default function SinglePost({ id, noImage }: SinglePostProps) {
  const { data: post } = useQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
  });
  if (!post) return <h1>게시글을 찾을 수 없습니다.</h1>;

  return <Post post={post} noImage={noImage} />;
}
