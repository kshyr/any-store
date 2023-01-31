import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ModalWrapper from "@/components/ModalWrapper";
import { Inter } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <head />
      <body
        className={
          "max- flex min-h-screen flex-col bg-base-100 " + inter.className
        }
      >
        <Header />
        <div className="flex flex-1 flex-row">
          <Sidebar />
          <main className="flex-1 bg-base-100">
            {children}
            <ModalWrapper />
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
