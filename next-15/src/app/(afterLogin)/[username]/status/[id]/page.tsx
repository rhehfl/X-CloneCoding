import CommentForm from '@/app/(afterLogin)/_component/CommentForm';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import getSinglePost from '@/app/(afterLogin)/_lib/getSinglePost';
import SinglePost from '@/app/(afterLogin)/_component/SinglePost';
import Comments from '@/app/(afterLogin)/_component/Comments';
import getComments from '@/app/(afterLogin)/_lib/getComments';

interface SinglePostProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: SinglePostProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="border-x-1 border-solid border-[rgba(239,243,244)]">
      <div className="fixed z-10 flex h-[53px] w-[598px] items-center bg-[rgb(255,255,255,0.85)] backdrop-blur-md">
        <BackButton />
        <h3 className="ml-[30px] text-[20px] font-bold">게시하기</h3>
      </div>
      <div className="h-[53px]"></div>
      <HydrationBoundary state={dehydratedState}>
        <SinglePost id={id} />
        <CommentForm />
        <div className="border-t-1 border-solid border-[rgba(239,243,244)]">
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
