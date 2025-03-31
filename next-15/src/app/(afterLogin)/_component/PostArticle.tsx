'use client';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface PostArticleProps {
  post: {
    postId: number;
    content: string;
    createdAt: Date;
    Images: unknown[];

    User: {
      id: string;
      nickname: string;
      image: string;
    };
  };
  children: ReactNode;
}
export default function PostArticle({ post, children }: PostArticleProps) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article
      onClickCapture={handleOnClick}
      className="poin flex w-full cursor-pointer border-y-1 border-solid border-[#eff3f4] px-3 py-4 transition-colors duration-200 hover:bg-[rgba(0,0,0,0.03)]"
    >
      {children}
    </article>
  );
}
