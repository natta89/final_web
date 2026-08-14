"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ตรวจสอบขนาดหน้าจออัตโนมัติทุกครั้งที่มีการย่อ/ขยายหน้าจอ
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // ปิดเมนูมือถือทันทีถ้าขยายจอเป็นคอมพิวเตอร์
      }
    };

    handleResize(); // เช็คค่าตั้งแต่โหลดครั้งแรก
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'ห้องพัก', href: '/rooms' },
    { name: 'นโยบายสัตว์เลี้ยง', href: '/pet-policy' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-gray-900 border-b border-amber-500/30 fixed top-0 left-0 z-50 h-20 flex items-center shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-between items-center text-sm font-medium">
          
          {/* โลโก้เว็บไซต์สัตว์เลี้ยง */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white font-bold text-lg shadow-lg shadow-orange-500/30 transition-transform group-hover:scale-105">
              🐾
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                PetParadise
              </h1>
              <p className="text-[11px] font-medium uppercase tracking-wider text-amber-200/70">
                Hotel & Pet Care
              </p>
            </div>
          </Link>

          {/* ถ้าเป็นจอคอม (Desktop): แสดงเมนูและปุ่มสมัครปกติ */}
          {!isMobile ? (
            <div className="flex items-center gap-6 text-white">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-amber-400 transition-colors">
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/register" 
                className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-400 transition-all text-sm shadow-md shadow-orange-500/20"
              >
                สมัครสมาชิก
              </Link>
            </div>
          ) : (
            /* ถ้าเป็นมือถือ (Mobile): ซ่อนทั้งหมดแล้วแสดงปุ่มขีดสามขีดแทน */
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-400 p-2 focus:outline-none flex items-center justify-center rounded-full bg-white/10"
              aria-label="Toggle Menu"
            >
              <div className="space-y-1.5 w-6">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          )}

        </div>
      </div>

      {/* เมนูแบบพับเก็บสำหรับมือถือ */}
      {isMobile && isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 border-b border-amber-500/30 px-6 py-6 flex flex-col gap-4 text-white shadow-2xl">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="hover:text-amber-400 transition-colors py-2 border-b border-white/5"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link 
              href="/register" 
              onClick={() => setIsOpen(false)} 
              className="block text-center py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold rounded-full hover:from-amber-500 hover:to-orange-400 transition-all text-sm shadow-lg"
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}