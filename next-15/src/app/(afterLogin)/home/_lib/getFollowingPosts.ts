import { Post } from '@/app/model/Post';

export default async function getFollowingPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ['posts', 'following'],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }
  return res.json();
}
