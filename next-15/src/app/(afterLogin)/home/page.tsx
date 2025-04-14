import PostForm from '@/app/(afterLogin)/_component/PostForm';
import PostsDecider from '@/app/(afterLogin)/home/_component/PostsDecider';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import { TabProvider } from '@/app/(afterLogin)/home/_component/TabProvider';
import getPostRecommends from '@/app/(afterLogin)/home/_lib/getPostRecommends';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="flex h-full w-[600px] flex-col items-stretch border-x-1 border-solid border-[rgba(239,243,244)]">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <div className="h-[115px]" />
          <PostForm />
          <PostsDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
