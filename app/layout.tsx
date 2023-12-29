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
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${inter.className} relative  bg-gray-50 dark:bg-gray-900 dark:text-gray-50  text-gray-950`}
      >
        <div
          className="bg-orange-100 dark:bg-transparent -z-10 absolute top-[-1rem] 
        right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#ebe2fb] dark:bg-transparent -z-10 absolute top-[-1rem] 
        left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
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
