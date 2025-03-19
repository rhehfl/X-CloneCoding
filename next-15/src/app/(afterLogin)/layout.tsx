import { PropsWithChildren } from 'react';

export default function AfterLogin({ children }: PropsWithChildren) {
  return (
    <div>
      에프터 로그인 레이아웃
      {children}
    </div>
  );
}
