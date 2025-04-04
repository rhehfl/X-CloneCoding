import BackButton from '@/app/(afterLogin)/_component/BackButton';

export default function SinglePost() {
  return (
    <main className="border-x-1 border-solid border-[rgba(239,243,244)]">
      <div className="flex h-[53px] items-center">
        <BackButton />
        <h3 className="ml-[30px] text-[20px] font-bold">게시하기</h3>
      </div>
    </main>
  );
}
