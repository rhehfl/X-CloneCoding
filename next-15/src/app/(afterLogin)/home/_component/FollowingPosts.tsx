'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import getFollowingPosts from '@/app/(afterLogin)/home/_lib/getFollowingPosts';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FollowingPosts() {
  const { ref, inView } = useInView({ threshold: 0, delay: 100 });
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    initialPageParam: 0,
  });
  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;
    if (isFetching) return;
    fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage, isFetching]);

  return (
    <>
      {data?.pages.map((posts, idx) => (
        <Fragment key={idx}>
          {posts.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div className="h-[50px]" ref={ref}></div>
    </>
  );
}
