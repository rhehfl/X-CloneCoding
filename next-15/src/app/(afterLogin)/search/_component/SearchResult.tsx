'use client';

import Post from '@/app/(afterLogin)/_component/Post';
import getSearchResult from '@/app/(afterLogin)/search/_lib/getSearchResult';
import { useQuery } from '@tanstack/react-query';

interface SearchResultProps {
  searchQuery: { q: string; f: string; pf: string };
}
export default function SearchResult({ searchQuery }: SearchResultProps) {
  const { data: posts } = useQuery({
    queryKey: ['posts', 'search', searchQuery],
    queryFn: getSearchResult,
  });
  return posts?.map((post) => <Post key={post.postId} post={post} />);
}
