import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
