import { PropsWithChildren } from 'react';

export default async function HomeLayout({ children }: PropsWithChildren) {
  return <div>홈 레이아웃{children}</div>;
}
