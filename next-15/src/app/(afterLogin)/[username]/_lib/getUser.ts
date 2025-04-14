import { User } from '@/app/model/User';
import { QueryFunction } from '@tanstack/react-query';

const getUser: QueryFunction<User, [_1: string, username: string]> = async ({
  queryKey,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, username] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
    {
      next: {
        tags: ['users'],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }

  return res.json();
};
export default getUser;
