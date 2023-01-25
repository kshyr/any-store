import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="forest">
      <head />
      <body className="flex min-h-screen flex-col bg-base-100">
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
