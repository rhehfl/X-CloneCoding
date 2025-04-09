/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from 'next';
import './globals.css';
import { MSWProvider } from '@/app/_component/MSWComponent';
import AuthSession from '@/app/_component/AuthSession';

if (
  process.env.NEXT_RUNTIME === 'nodejs' &&
  process.env.NODE_ENV !== 'production'
) {
  const { server } = require('@/mocks/http');
  server.listen();
}
export const metadata: Metadata = {
  title: 'X, 지금 무슨 일이 일어나고 있나요',
  description: 'x클론코딩하기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MSWProvider>
          <AuthSession>{children}</AuthSession>
        </MSWProvider>
      </body>
    </html>
  );
}
