import { Trend } from '@/app/model/Trend';

export default async function getTrends(): Promise<Trend[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`, {
    next: {
      tags: ['trends'],
    },
  });
  if (!res.ok) {
    throw new Error('데이터 불러오기 실패');
  }
  return res.json();
}
