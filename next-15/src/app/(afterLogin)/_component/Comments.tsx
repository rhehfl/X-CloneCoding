'use client';

import getComments from '@/app/(afterLogin)/_lib/getComments';
import Post from '@/app/(afterLogin)/_component/Post';
import { useQuery } from '@tanstack/react-query';
interface CommentsProps {
  id: string;
}
export default function Comments({ id }: CommentsProps) {
  const { data: comments } = useQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
    staleTime: 60 * 1000,
  });
  if (!comments) return <div>댓글이 없습니다.</div>;

  return comments.map((post) => <Post key={post.postId} post={post} />);
}
