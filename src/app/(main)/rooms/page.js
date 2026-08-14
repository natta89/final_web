"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, Info, X } from "lucide-react";
import swal from "sweetalert2";

export default function RoomPage() {
  const [activeModal, setActiveModal] = useState(null);

  // รายการห้องพัก 6 ระดับ เรียงจากราคาต่ำไปสูง
  const roomsData = [
    {
      id: 1,
      name: "Standard Cozy Box",
      price: "350",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      description: "ห้องพักส่วนตัวขนาดกะทัดรัด เหมาะสำหรับน้องแมวหรือสุนัขพันธุ์เล็ก อบอุ่น ปลอดภัย",
      details: "พื้นที่ 1.2 x 1.2 เมตร ควบคุมอุณหภูมิด้วยแอร์ตลอด 24 ชม. พร้อมเบาะนอนนุ่มพิเศษและกล้องวงจรปิดส่วนตัวให้เจ้าของสตรีมดูน้องได้ตลอดเวลา",
      capacity: "สุนัข/แมวพันธุ์เล็ก น้ำหนักไม่เกิน 10 กก. (สูงสุด 1 ตัว)",
    },
    {
      id: 2,
      name: "Feline Treehouse (Cat Zone)",
      price: "500",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80",
      description: "โซนพิเศษสำหรับน้องแมวโดยเฉพาะ เพลิดเพลินกับคอนโดไต่ระดับและวิวสวนธรรมชาติ",
      details: "ติดกระจกใสวิวสวนช่วยลดความเครียด มีคอนโดไม้ไต่รอบห้อง กระบะทรายเก็บกลิ่นอย่างดี และของเล่นแคทนิปธรรมชาติปลอดสารพิษ",
      capacity: "น้องแมวทุกสายพันธุ์ (สูงสุด 2 ตัวต่อห้อง)",
    },
    {
      id: 3,
      name: "Deluxe Garden View",
      price: "850",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      description: "ห้องพักกว้างขวาง พร้อมพื้นที่สนามหญ้าส่วนตัวให้น้องหมาวิ่งเล่นผ่อนคลาย",
      details: "ห้องพักขนาดกลางพร้อมประตูกระจกเปิดออกสู่สนามหญ้าส่วนตัว มีบริการพาเดินเล่นออกกำลังกายวันละ 2 รอบ และตรวจสุขภาพเบื้องต้น",
      capacity: "รองรับสุนัขน้ำหนักไม่เกิน 20 กก. (สูงสุด 3 ตัว/ห้อง)",
    },
    {
      id: 4,
      name: "Anti-Allergy & Pure Air Suite",
      price: "1,200",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      description: "ห้องพักพิเศษสำหรับผู้มีอาการแพ้ง่าย ติดตั้งเครื่องกรองอากาศ HEPA เกรดการแพทย์",
      details: "เหมาะสำหรับเจ้าของหรือสัตว์เลี้ยงที่แพ้ง่าย ป้องกันไรฝุ่นและขนสัตว์ด้วยระบบหมุนเวียนอากาศแยกอิสระ ทำความสะอาดแบบ Deep Clean ทุกครั้ง",
      capacity: "รองรับสัตว์เลี้ยงทุกประเภท ควบคุมความสะอาดขั้น 100%",
    },
    {
      id: 5,
      name: "Pet Family Suite",
      price: "1,800",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
      description: "ห้องสวีทขนาดใหญ่พิเศษ มีเบาะนอนพรีเมียมและชามอาหารหรูหรา สำหรับสัตว์เลี้ยงหลายตัว",
      details: "พื้นที่กว้างขวางเสมือนห้องพักโรงแรมคน ประดับตกแต่งอบอุ่น พร้อมทีวีเปิดเพลงกล่อมสัตว์เลี้ยงและพี่เลี้ยงดูแลใกล้ชิด",
      capacity: "รองรับสัตว์เลี้ยงรวมกันสูงสุด 5 ตัวต่อห้อง",
    },
    {
      id: 6,
      name: "Private Pool Villa",
      price: "2,900",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      description: "วิลล่าส่วนตัวพร้อมสระว่ายน้ำระบบเกลือที่พาสัตว์เลี้ยงลงเล่นได้ เป็นส่วนตัวขั้นสุด",
      details: "ที่สุดแห่งความหรูหรา สระว่ายน้ำส่วนตัวสำหรับน้องหมาคลายร้อน สนามหญ้าส่วนตัวกว้างขวาง และบริการสปา-นวดผ่อนคลายฟรี 1 ครั้ง",
      capacity: "สัตว์เลี้ยงเข้าพักได้สูงสุด 7 ตัว/ห้อง (ไม่จำกัดน้ำหนัก)",
    },
  ];

  const handleBooking = (roomName) => {
    setActiveModal(null);
    swal.fire({
      icon: "success",
      title: `สนใจจองห้อง ${roomName}`,
      text: "ระบบกำลังพาท่านไปยังหน้าลงทะเบียนสมาชิกเพื่อยืนยันการจองครับ",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#f97316",
    }).then(() => {
      window.location.href = "/register";
    });
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3.5 py-1 rounded-full text-xs font-bold">
            <Sparkles size={14} /> PET PARADISE EXCLUSIVE ROOMS
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            ห้องพักสำหรับคุณและสัตว์เลี้ยง
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            เลือกห้องพักที่เหมาะกับน้องๆ ได้หลากหลายระดับ ตั้งแต่โซนอบอุ่น Cozy ไปจนถึง พูลวิลล่าส่วนตัวระดับพรีเมียม
          </p>
        </div>

        {/* 6 Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="h-52 w-full overflow-hidden relative">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                <div className="pt-4">
                  <span className="text-xl sm:text-2xl font-black text-orange-600">฿{room.price}</span>
                  <span className="text-xs text-gray-500 ml-1">/ คืน</span>
                </div>
                <button
                  onClick={() => setActiveModal(room)}
                  className="mt-4 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <Info size={16} /> ดูรายละเอียด
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup แสดงรายละเอียดห้องเมื่อกดปุ่ม */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="relative h-60 w-full">
              <img src={activeModal.image} alt={activeModal.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{activeModal.name}</h3>
                <span className="text-2xl font-black text-orange-600">฿{activeModal.price} <span className="text-xs text-gray-500 font-normal">/ คืน</span></span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-gray-800">{activeModal.description}</p>
                <p className="bg-orange-50 p-3 rounded-xl border border-orange-100 text-orange-900">
                  <strong>สิ่งอำนวยความสะดวก:</strong> {activeModal.details}
                </p>
                <p className="text-xs text-gray-500">
                  <strong>เงื่อนไขการรองรับ:</strong> {activeModal.capacity}
                </p>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all"
                >
                  ปิดหน้าต่าง
                </button>
                <button
                  onClick={() => handleBooking(activeModal.name)}
                  className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar size={18} /> จองห้องนี้
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}