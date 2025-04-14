import ImageZone from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/ImageZone';
import PhotoModalCloseButton from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton';
import CommentForm from '@/app/(afterLogin)/_component/CommentForm';
import Comments from '@/app/(afterLogin)/_component/Comments';
import SinglePost from '@/app/(afterLogin)/_component/SinglePost';
import getComments from '@/app/(afterLogin)/_lib/getComments';
import getSinglePost from '@/app/(afterLogin)/_lib/getSinglePost';
import ScrollRock from '@/app/_component/ScrollRock';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

interface PageModalProps {
  params: Promise<{ id: string }>;
}
export default async function PageModal({ params }: PageModalProps) {
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
    <>
      <ScrollRock />
      <div className="fixed z-20 h-full w-full overflow-hidden bg-[rgba(0,0,0,0.85)]">
        <PhotoModalCloseButton />
        <div className="flex h-full w-full">
          <ImageZone id={id} />

          <div className="flex w-[350px] flex-col overflow-auto bg-white">
            <HydrationBoundary state={dehydratedState}>
              <SinglePost id={id} noImage />
              <CommentForm />
              <Comments id={id} />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </>
  );
}
