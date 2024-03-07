"use client";

import { NextUIProvider } from "@nextui-org/system";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <main className="h-full">
        <div className="">{children}</div>
      </main>
    </NextUIProvider>
  );
};

export default SignUpLayout;
