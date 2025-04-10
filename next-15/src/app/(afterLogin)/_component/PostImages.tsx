'use client';
import { Post } from '@/app/model/Post';
import Link from 'next/link';
interface PostImagesProps {
  target: Post;
}

export default function PostImages({ target }: PostImagesProps) {
  if (!target.Images) return null;
  if (target.Images.length === 0) return null;
  if (target.Images.length === 1) {
    return (
      <Link
        className="max-h-[510px] w-full rounded-[16px] bg-contain bg-no-repeat"
        href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
        style={{ backgroundImage: `url(${target.Images[0].link})` }}
      >
        <img
          src={target.Images[0].link}
          alt="사진"
          className="h-full w-full rounded-[16px]"
        />
      </Link>
    );
  }
  if (target.Images.length === 2) {
    return (
      <div className="flex h-[272px] w-full gap-0.5">
        <Link
          href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
          className="max-h-[510px] w-full flex-1 rounded-l-[16px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${target.Images[0].link})` }}
        >
          <img
            src={target.Images[0].link}
            alt="사진"
            className="h-[272px] w-full rounded-l-[16px]"
          />
        </Link>
        <Link
          href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[1].imageId}`}
          className="max-h-[510px] w-full flex-1 rounded-r-[16px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${target.Images[1].link})` }}
        >
          <img
            src={target.Images[1].link}
            alt="사진"
            className="h-[272px] w-full rounded-r-[16px]"
          />
        </Link>
      </div>
    );
  }
  if (target.Images.length === 3) {
    return (
      <div className="flex w-full gap-0.5">
        <Link
          href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
          className="h-[272px] w-full flex-1 rounded-l-[16px] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${target.Images[0].link})` }}
        >
          <img
            src={target.Images[0].link}
            alt="사진"
            className="h-[272px] w-full rounded-l-[16px]"
          />
        </Link>
        <div className="flex flex-1 flex-col gap-0.5">
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[1].imageId}`}
            className="w-full flex-1 rounded-tr-[16px] bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[1].link})` }}
          >
            <img
              src={target.Images[1].link}
              alt="사진"
              className="h-[136px] w-full rounded-tr-[16px]"
            />
          </Link>
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[2].imageId}`}
            className="w-full flex-1 rounded-br-[16px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[2].link})` }}
          >
            <img
              src={target.Images[2].link}
              alt="사진"
              className="h-[136px] w-full rounded-br-[16px]"
            />
          </Link>
        </div>
      </div>
    );
  }
  if (target.Images.length === 4) {
    return (
      <div className="flex w-full gap-0.5">
        <div className="flex flex-1 flex-col gap-0.5">
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
            className="w-full flex-1 rounded-tl-[16px] bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[0].link})` }}
          >
            <img
              src={target.Images[0].link}
              alt="사진"
              className="h-[136px] w-full rounded-tl-[16px]"
            />
          </Link>
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[1].imageId}`}
            className="w-full flex-1 rounded-bl-[16px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[1].link})` }}
          >
            <img
              src={target.Images[1].link}
              alt="사진"
              className="h-[136px] w-full rounded-bl-[16px]"
            />
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-0.5">
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[2].imageId}`}
            className="w-full flex-1 rounded-tr-[16px] bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[2].link})` }}
          >
            <img
              src={target.Images[2].link}
              alt="사진"
              className="h-[136px] w-full rounded-tr-[16px]"
            />
          </Link>
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.Images[3].imageId}`}
            className="w-full flex-1 rounded-br-[16px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${target.Images[3].link})` }}
          >
            <img
              src={target.Images[3].link}
              alt="사진"
              className="h-[136px] w-full rounded-br-[16px]"
            />
          </Link>
        </div>
      </div>
    );
  }
}
