import Post from '@/app/(afterLogin)/_component/Post';
import PostForm from '@/app/(afterLogin)/_component/PostForm';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import { TabProvider } from '@/app/(afterLogin)/home/_component/TabProvider';

export default function Home() {
  return (
    <main className="flex h-full w-[600px] flex-col items-stretch border-x-1 border-solid border-[rgba(239,243,244)]">
      <TabProvider>
        <Tab />
        <div className="h-[53px]" />
        <PostForm />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
