'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import getPostRecommends from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function PostRecommends() {
  const { ref, inView } = useInView({ threshold: 0, delay: 100 });
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ['posts', 'recommends'],
      queryFn: getPostRecommends,
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
