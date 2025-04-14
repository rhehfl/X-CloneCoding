'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import getFollowingPosts from '@/app/(afterLogin)/home/_lib/getFollowingPosts';
import { useQuery } from '@tanstack/react-query';

export default function FollowingPosts() {
  const { data: posts } = useQuery({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
  });

  return posts?.map((post) => <Post key={post.postId} post={post} />);
}
