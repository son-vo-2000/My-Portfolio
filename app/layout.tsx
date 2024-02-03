import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ActivePageProvider from "@/context/ActivePageProvider";
import Footer from "@/components/Footer";
import ThemeMode from "@/components/ThemeMode";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Son Vo",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" >
      <body
        className={` ${inter.className}  bg-gray-50 dark:bg-gray-900 dark:text-gray-50  text-gray-950`}
      >
        <ActivePageProvider>
          <Header />
          {children}
          <Footer />
        </ActivePageProvider>
        <ThemeMode />
      </body>
    </html>
  );
}
