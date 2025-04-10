'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from '@/app/(afterLogin)/_component/PostArticle';
import PostImages from '@/app/(afterLogin)/_component/PostImages';
import { Post as IPost } from '@/app/model/Post';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface PostProps {
  noImage?: boolean;
  post: IPost;
}
export default function Post({ noImage = false, post }: PostProps) {
  const target = post;

  return (
    <PostArticle post={target}>
      <div className="mr-[8px]">
        <div className="relative h-[40px] w-[40px]">
          <Link href={`/${target.user.id}`}>
            <div className="absolute z-10 h-full w-full rounded-full hover:bg-[rgba(0,0,0,0.2)]" />
            <Image
              src={target.user.image}
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
            href={`/${target.user.id}`}
            className="decoration-1 underline-offset-2 hover:underline"
          >
            <span className="text-[15px] font-semibold">
              {target.user.nickname}
            </span>
          </Link>
          <div className="text-[15px] text-[rgb(83,100,113)]">
            <Link href={`/${target.user.id}`} className="ml-1">
              <span>@{target.user.id}</span>
            </Link>
            <span className="px-1">·</span>
            <Link
              href={`/${target.user.id}/status`}
              className="decoration-1 underline-offset-2 hover:underline"
            >
              <span>{dayjs(target.createdAt).fromNow(true)}</span>
            </Link>
          </div>
        </div>
        <p className="text-[15px]">{target.content}</p>

        <div className="max-h-[510px]">
          {!noImage && <PostImages target={target}></PostImages>}
        </div>
        <ActionButtons />
      </div>
    </PostArticle>
  );
}
