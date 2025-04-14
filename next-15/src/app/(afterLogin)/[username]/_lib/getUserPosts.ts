import { Post } from '@/app/model/Post';
import { QueryFunction } from '@tanstack/react-query';

const getUserPosts: QueryFunction<Post[], [string, string]> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, username] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`,
    {
      next: {
        tags: ['posts', 'users', username],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  return res.json();
};
export default getUserPosts;
