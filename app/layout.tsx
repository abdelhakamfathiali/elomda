import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Takhtit Trading",
  description: "Elomda Group",
};

export default function RootLayout({
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
          <Header />
          <main className="w-full h-full  ">
            <SidebarProvider>
              <div className=" sm:hidden md:hidden lg:inline-block h-full mt-0 ">
                <AppSidebar className="" />
              </div>
              <div className="flex w-full h-full flex-col justify-center  p-2 ">
                <div className=" p-5 h-full">{children}</div>

                <Footer />
              </div>
            </SidebarProvider>
          </main>

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
