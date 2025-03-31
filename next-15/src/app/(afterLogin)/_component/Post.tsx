import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/home/_component/ActionButtons';
import PostArticle from '@/app/(afterLogin)/_component/PostArticle';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function Post() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elone.jpg',
    },
    postId: 1,
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [],
  };

  return (
    <PostArticle post={target}>
      <div className="mr-[8px]">
        <div className="relative h-[40px] w-[40px]">
          <Link href={`/${target.User.id}`}>
            <div className="absolute z-10 h-full w-full rounded-full hover:bg-[rgba(0,0,0,0.2)]" />
            <Image
              src={target.User.image}
              fill
              alt="일론"
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="mb-1 flex h-[20px]">
          <Link
            href={`/${target.User.id}`}
            className="decoration-1 underline-offset-2 hover:underline"
          >
            <span className="text-[15px] font-semibold">
              {target.User.nickname}
            </span>
          </Link>
          <div className="text-[15px] text-[rgb(83,100,113)]">
            <Link href={`/${target.User.id}`} className="ml-1">
              <span>@{target.User.id}</span>
            </Link>
            <span className="px-1">·</span>
            <Link
              href={`/${target.User.id}/status`}
              className="decoration-1 underline-offset-2 hover:underline"
            >
              <span>{dayjs(target.createdAt).fromNow(true)}</span>
            </Link>
          </div>
        </div>
        <p className="text-[15px]">{target.content}</p>

        <div className="rounded-8 relative mt-3 h-[500px] w-full">
          <Image src="/5Udwvqim.jpg" fill alt="사진" className="rounded-8" />
        </div>
        <ActionButtons />
      </div>
    </PostArticle>
  );
}
