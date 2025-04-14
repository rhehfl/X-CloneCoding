import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import getUser from '@/app/(afterLogin)/[username]/_lib/getUser';
import UserInfo from '@/app/(afterLogin)/[username]/_component/UserInfo';
import UserPosts from '@/app/(afterLogin)/[username]/_component/UserPosts';
import getUserPosts from '@/app/(afterLogin)/[username]/_lib/getUserPosts';

interface ProfileProps {
  params: Promise<{
    username: string;
  }>;
}
export default async function Profile({ params }: ProfileProps) {
  const { username } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="flex w-[600px] flex-col border-x-1 border-solid border-[#eff3f4]">
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} />
        <UserPosts username={username} />
      </HydrationBoundary>
      {/* <Post /> */}
    </main>
  );
}
