import PostsDecider from '@/app/(afterLogin)/home/_component/PostsDecider';
import getPostRecommends from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function PostsDeciderSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <PostsDecider />
    </HydrationBoundary>
  );
}
