'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();
  const handleLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };
  if (!me) {
    return null;
  }
  if (!me.user) {
    return null;
  }
  return (
    <button
      onClick={handleLogout}
      className="my-3 flex h-[66px] cursor-pointer items-center p-3 hover:rounded-[33px] hover:bg-[rgba(15,20,25,0.1)]"
    >
      <Image
        src={me.user.image as string}
        alt={me.user.email as string}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="ml-2 hidden text-left xl:block">
        <div className="font-bold">{me.user.name as string}</div>
        <span>{me.user.email as string}</span>
      </div>
    </button>
  );
}
