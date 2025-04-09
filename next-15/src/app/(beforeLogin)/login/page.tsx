'use client';

import Main from '@/app/(beforeLogin)/_components/Main';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.replace('/home');
    } else {
      router.replace('/i/flow/login');
    }
  }, [router, session]); // 의존성 배열을 추가하여 한 번만 실행되도록 설정
  return <Main />;
}
