'use client';

import getUser from '@/app/(afterLogin)/[username]/_lib/getUser';
import getUserPosts from '@/app/(afterLogin)/[username]/_lib/getUserPosts';
import Post from '@/app/(afterLogin)/_component/Post';
import { useQuery } from '@tanstack/react-query';

interface UserPostsProps {
  username: string;
}
export default function UserPosts({ username }: UserPostsProps) {
  const { data: posts } = useQuery({
    queryKey: ['posts', username],
    queryFn: getUserPosts,
  });
  const { data: user } = useQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });
  if (!user) return null;
  return posts?.map((post) => <Post key={post.postId} post={post} />);
}
