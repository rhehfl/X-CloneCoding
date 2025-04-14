import { Post } from '@/app/model/Post';
import { QueryFunction } from '@tanstack/react-query';

const getComments: QueryFunction<
  Post[],
  [string, string, id: string]
> = async ({ queryKey }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, id] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}/comments`,
    {
      next: {
        tags: ['posts', id, 'comments'],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }
  return res.json();
};

export default getComments;
