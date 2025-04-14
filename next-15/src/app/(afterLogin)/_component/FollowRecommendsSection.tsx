'use client';

import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend';
import getFollowRecommends from '@/app/(afterLogin)/_lib/getFollowRecommends';
import { useQuery } from '@tanstack/react-query';

export default function FollowRecommendsSection() {
  const { data: users } = useQuery({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
  });
  return users?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
