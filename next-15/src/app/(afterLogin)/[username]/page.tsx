import BackButton from '@/app/(afterLogin)/_component/BackButton';
import Post from '@/app/(afterLogin)/_component/Post';
import Image from 'next/image';

export default function Profile() {
  const User = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: '/elone.jpg',
  };
  return (
    <main className="flex w-[600px] flex-col border-x-1 border-solid border-[#eff3f4]">
      <div className="flex h-[53px] w-full items-center">
        <BackButton />
        <h3 className="ml-[30px] text-[20px] font-bold">{User.nickname}</h3>
      </div>
      <div className="flex items-center px-3 py-4">
        <div className="relative mr-3 h-[134px] w-[134px] rounded-full">
          <Image
            src="/elone.jpg"
            fill
            alt="프로필이미지"
            className="rounded-full"
          />
        </div>
        <div className="mx-3 flex flex-col">
          <span className="text-[20px] font-bold">{User.nickname}</span>
          <span className="text-[15px]">{User.id}</span>
        </div>
      </div>
      <div className="flex py-2">
        <span>0 팔로워</span>
        &nbsp;
        <span>0 팔로우 중</span>
      </div>
      <Post />
    </main>
  );
}
