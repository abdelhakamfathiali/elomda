import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

import Footer from "@/components/Footer";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Takhtit Trading",
  description: "Elomda Group",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className={`antialiased`}>
        <Layout>
          <Navbar />
          <main className="w-full h-full ">
            <SidebarProvider>
              <div className="sm:hidden md:hidden lg:inline-block h-full  ">
                <AppSidebar className="mt-1 bg-blue-800" />
              </div>
              <div className="flex w-full h-full flex-col justify-center    ">
                <div className="  h-full ml-[-5px]">{children}</div>

                <Footer />
              </div>
            </SidebarProvider>
          </main>
        </Layout>
      </body>
    </html>
  );
}
