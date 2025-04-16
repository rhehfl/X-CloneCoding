import { Post } from '@/app/model/Post';

type Props = { pageParam?: number };
export default async function getFollowingPosts({
  pageParam,
}: Props): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts?cursor=${pageParam}`,
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
