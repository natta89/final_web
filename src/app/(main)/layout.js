import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// ใช้ Path Alias เพื่อความสะอาดและป้องกันปัญหาเรื่อง Path ผิด
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetParadise - Hotel & Pet Care",
  description: "โรงแรมและบริการดูแลสัตว์เลี้ยงสุดพรีเมียม",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ใส่ Navigation ไว้ด้านบนสุดของ body */}
        <Navigation />
        
        {/* ส่วน main มี pt-20 เพื่อไม่ให้เนื้อหาถูก Header บัง */}
        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}