"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "สอบถามทั่วไป",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    swal.fire({
      icon: "success",
      title: "ส่งข้อความสำเร็จ!",
      text: "ขอบคุณที่ติดต่อ PetParadise ทีมงานจะรีบติดต่อกลับหาคุณโดยเร็วที่สุดครับ",
      confirmButtonColor: "#f97316",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "สอบถามทั่วไป",
      message: "",
    });
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <Sparkles size={14} /> GET IN TOUCH WITH US
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            ติดต่อเรา <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">PetParadise</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg">
            มีข้อสงสัยเรื่องการจองห้องพัก นโยบาย หรือต้องการปรึกษาผู้เชี่ยวชาญ ติดต่อเราได้ทุกช่องทางตลอดเวลาทำการ
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-xl shadow-orange-500/5 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">ข้อมูลการติดต่อ</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ที่อยู่โรงแรม</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      123/45 ถ.นิมมานเหมินท์ ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">เบอร์โทรศัพท์</h4>
                    <p className="text-gray-600 text-sm mt-1">053-123-456 / 089-876-5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">อีเมล</h4>
                    <p className="text-gray-600 text-sm mt-1">support@petparadise.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">เวลาทำการ</h4>
                    <p className="text-gray-600 text-sm mt-1">เปิดบริการทุกวัน 09:00 - 20:00 น.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-100 shadow-xl shadow-orange-500/5">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ส่งข้อความถึงเรา</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">ชื่อ - นามสกุล</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="กรอกชื่อของคุณ"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">เบอร์โทรศัพท์</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      placeholder="0812345678"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">อีเมล</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">หัวข้อที่ต้องการติดต่อ</label>
                    <select 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                    >
                      <option value="สอบถามทั่วไป">สอบถามทั่วไป</option>
                      <option value="จองห้องพัก/แพ็กเกจ">จองห้องพัก / แพ็กเกจ</option>
                      <option value="ปรึกษาสุขภาพสัตว์เลี้ยง">ปรึกษาสุขภาพสัตว์เลี้ยง</option>
                      <option value="ปัญหาการใช้งานระบบ">ปัญหาการใช้งานระบบ</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">ข้อความของคุณ</label>
                  <textarea 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    placeholder="พิมพ์รายละเอียดที่ต้องการสอบถาม..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} /> ส่งข้อความ
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}