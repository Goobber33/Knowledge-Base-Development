"use client";

import { NextUIProvider } from "@nextui-org/system";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className="h-full">
        <div className="">{children}</div>
      </main>
    </NextUIProvider>
  );
};

export default HomeLayout;
