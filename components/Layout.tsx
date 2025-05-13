import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  // return <SessionProvider>{children}</SessionProvider>;
  return <div>{children}</div>;
};

export default Layout;
