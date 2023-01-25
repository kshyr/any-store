import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body className="flex min-h-screen flex-col bg-base-100">
        <Header />
        <div className="h-full flex-1">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
