import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="w-[100vw] h-[100svh] flex justify-center items-center flex-col">
      <p>이 페이지는 존재하지 않습니다. </p>
      <Link href="/search">검색</Link>
    </div>
  );
};

export default NotFound;
