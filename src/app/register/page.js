"use client";

import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight, Heart, Sparkles, ShieldCheck } from "lucide-react";
import swal from "sweetalert2";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_email: "",
    txt_password: "",
    txt_confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. ตรวจสอบรหัสผ่านตรงกัน
    if (form.txt_password !== form.txt_confirm_password) {
      await swal.fire({
        icon: "warning",
        title: "รหัสผ่านไม่ตรงกัน",
        text: "กรุณาตรวจสอบรหัสผ่านและการยืนยันรหัสผ่านใหม่อีกครั้ง",
        confirmButtonText: "เข้าใจแล้ว",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    // 2. ตรวจสอบสถานะอินเทอร์เน็ต
    if (!navigator.onLine) {
      await swal.fire({
        icon: "error",
        title: "ไม่มีการเชื่อมต่ออินเทอร์เน็ต",
        text: "กรุณาตรวจสอบสัญญาณเน็ตของคุณแล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://6a7e6fb43183f5fd884a14c2.mockapi.io/pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          txt_firstname: form.txt_firstname,
          txt_lastname: form.txt_lastname,
          txt_email: form.txt_email,
          txt_password: form.txt_password,
        }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch (err) {
        result = { message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" };
      }

      // รองรับทั้งสถานะ 200 OK และ 201 Created ของ MockAPI
      if (response.ok || response.status === 201) {
        await swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ!",
          text: "ยินดีต้อนรับเข้าสู่ครอบครัว PetParadise เรียบร้อยแล้ว",
          confirmButtonText: "เข้าสู่ระบบ",
          confirmButtonColor: "#f97316",
        });
        // รีเซ็ตฟอร์มหลังสมัครสำเร็จ
        setForm({
          txt_firstname: "",
          txt_lastname: "",
          txt_email: "",
          txt_password: "",
          txt_confirm_password: "",
        });
      } else if (response.status === 400) {
        await swal.fire({
          icon: "warning",
          title: "ไม่สามารถสมัครสมาชิกได้",
          text: result.message || "อีเมลนี้อาจถูกใช้งานแล้ว หรือข้อมูลไม่ถูกต้อง",
          confirmButtonText: "ลองอีกครั้ง",
          confirmButtonColor: "#f97316",
        });
      } else {
        await swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: result.message || "กรุณาลองใหม่อีกครั้งในภายหลัง",
          confirmButtonText: "ปิด",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      await swal.fire({
        icon: "error",
        title: "เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ",
        text: "ไม่สามารถส่งข้อมูลไปยังระบบได้ในขณะนี้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-orange-50 via-amber-50/50 to-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl shadow-orange-500/5 border border-orange-100 overflow-hidden grid lg:grid-cols-12 my-auto">
        
        {/* ฝั่งซ้าย: ข้อมูลแบรนด์ (4 ส่วน) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-orange-500 to-amber-500 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* วงกลมตกแต่งพื้นหลัง */}
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
              <Sparkles size={14} /> PetParadise Member
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-snug mb-4">
              เริ่มต้นดูแล<br />เพื่อนรักตัวน้อยของคุณ
            </h1>
            <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
              สมัครสมาชิกวันนี้เพื่อรับสิทธิพิเศษ จองห้องพักโรงแรมสัตว์เลี้ยง และติดตามอาการน้องๆ ได้ตลอด 24 ชั่วโมง
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-3 text-sm text-orange-100">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Heart size={16} className="fill-white" />
              </div>
              <span>บริการด้วยความรักจากทีมงานมืออาชีพ</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-orange-100">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} />
              </div>
              <span>ระบบรักษาความปลอดภัยข้อมูลส่วนตัวสูงสุด</span>
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: ฟอร์มสมัครสมาชิก (7 ส่วน) */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              สร้างบัญชีผู้ใช้งาน
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              กรอกข้อมูลด้านล่างเพื่อลงทะเบียนเข้าสู่ระบบ PetParadise
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="ชื่อจริง"
                name="txt_firstname"
                value={form.txt_firstname}
                onChange={handleChange}
                icon={<User size={18} />}
                placeholder="เช่น สมชาย"
              />
              <InputField
                label="นามสกุล"
                name="txt_lastname"
                value={form.txt_lastname}
                onChange={handleChange}
                icon={<User size={18} />}
                placeholder="เช่น ใจดี"
              />
            </div>

            <InputField
              label="อีเมล"
              name="txt_email"
              value={form.txt_email}
              onChange={handleChange}
              icon={<Mail size={18} />}
              type="email"
              placeholder="name@example.com"
            />

            <InputField
              label="รหัสผ่าน"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              icon={<Lock size={18} />}
              type="password"
              placeholder="••••••••"
            />

            <InputField
              label="ยืนยันรหัสผ่าน"
              name="txt_confirm_password"
              value={form.txt_confirm_password}
              onChange={handleChange}
              icon={<Lock size={18} />}
              type="password"
              placeholder="••••••••"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  ยืนยันการสมัครสมาชิก <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, icon, type = "text", placeholder }) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
      {label}
    </label>
    <div className="relative flex items-center">
      <div className="absolute left-4 text-gray-400">{icon}</div>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 focus:bg-white transition-all duration-200"
      />
    </div>
  </div>
);