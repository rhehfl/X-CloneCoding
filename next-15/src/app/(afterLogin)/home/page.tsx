import PostForm from '@/app/(afterLogin)/_component/PostForm';
import PostsDeciderSuspense from '@/app/(afterLogin)/home/_component/PostsDeciderSuspense';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import { TabProvider } from '@/app/(afterLogin)/home/_component/TabProvider';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex h-full w-[600px] flex-col items-stretch border-x-1 border-solid border-[rgba(239,243,244)]">
      <TabProvider>
        <Tab />
        <div className="h-[115px]" />
        <PostForm />
        <Suspense fallback={<div>로딩중</div>}>
          <PostsDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
