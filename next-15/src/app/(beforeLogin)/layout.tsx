import { ReactNode } from "react";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="h-[100dvh] w-[100dvw]">
      {children}
      {modal}
    </div>
  );
}
