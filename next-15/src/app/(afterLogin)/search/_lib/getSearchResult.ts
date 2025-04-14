import { Post } from '@/app/model/Post';
import { QueryFunction } from '@tanstack/react-query';

const getSearchResult: QueryFunction<
  Post[],
  [string, string, { q: string; f: string; pf: string }]
> = async ({ queryKey }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, searchQuery] = queryKey;
  const urlSearchParams = new URLSearchParams(searchQuery);
  console.log(urlSearchParams.toString());
  console.log(searchQuery);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${urlSearchParams.toString()}`,
    {
      next: {
        tags: ['posts', 'search', searchQuery.q],
      },
    }
  );
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }
  return res.json();
};

export default getSearchResult;
