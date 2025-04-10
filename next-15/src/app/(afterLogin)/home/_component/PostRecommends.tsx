'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import getPostRecommends from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import { useQuery } from '@tanstack/react-query';

export default function PostRecommends() {
  const { data: posts } = useQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  console.log(posts);

  return posts?.map((post) => <Post key={post.postId} post={post} />);
}
