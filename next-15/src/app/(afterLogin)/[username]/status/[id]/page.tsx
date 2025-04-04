import CommentForm from '@/app/(afterLogin)/_component/CommentForm';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import Post from '@/app/(afterLogin)/_component/Post';

export default function SinglePost() {
  return (
    <main className="border-x-1 border-solid border-[rgba(239,243,244)]">
      <div className="fixed z-10 flex h-[53px] w-[598px] items-center bg-[rgb(255,255,255,0.85)] backdrop-blur-md">
        <BackButton />
        <h3 className="ml-[30px] text-[20px] font-bold">게시하기</h3>
      </div>
      <div className="h-[53px]"></div>
      <Post />
      <CommentForm />
      <div>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </main>
  );
}
