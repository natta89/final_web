import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// แก้ไข Path ให้ถูกต้องโดยถอยหลังออกไป 2 ชั้นเพื่อเข้าถึงโฟลเดอร์ components
import Navigation from "../../components/Navigation"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "สมัครสมาชิก - PetParadise",
  description: "ลงทะเบียนสมาชิกโรงแรมสัตว์เลี้ยง",
};

export default function RegisterLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col bg-[#020617]">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
    </div>
  );
}