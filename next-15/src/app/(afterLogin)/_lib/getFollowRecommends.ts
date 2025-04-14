import { User } from '@/app/model/User';

export default async function getFollowRecommends(): Promise<User[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followRecommends`,
    {
      next: {
        tags: ['users', 'followRecommends'],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }
  return res.json();
}
