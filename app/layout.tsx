import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body
        className={
          "max- flex min-h-screen flex-col bg-base-100 " + inter.className
        }
      >
        <Header />
        <div className="flex flex-1 flex-row">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
