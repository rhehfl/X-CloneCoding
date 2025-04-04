import Room from '@/app/(afterLogin)/messages/_component/Room';

export default function Messages() {
  return (
    <main className="flex h-full flex-col border-x-1 border-solid border-[#eff3f4]">
      <div className="flex h-[53px] items-center px-4">
        <h3 className="text-[20px] font-bold">쪽지</h3>
      </div>
      <Room></Room>
    </main>
  );
}
