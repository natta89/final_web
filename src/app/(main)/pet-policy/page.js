"use client";

import React from "react";
import { ShieldCheck, Heart, AlertCircle, CheckCircle, Clock, FileText } from "lucide-react";

export default function PolicyPage() {
  const policies = [
    {
      title: "1. เอกสารและสุขภาพสัตว์เลี้ยง",
      icon: <FileText className="text-orange-500" size={24} />,
      details: [
        "สัตว์เลี้ยงทุกตัวต้องมีประวัติการฉีดวัคซีนครบถ้วน (เช่น วัคซีนพิษสุนัขบ้า, วัคซีนรวม) และแสดงสมุดวัคซีนในวันเช็คอิน",
        "ต้องผ่านการหยอดยาป้องกันหมัดและเห็บภายใน 1 เดือนก่อนเข้ารับบริการ",
        "ไม่อนุญาตให้สัตว์เลี้ยงที่มีโรคติดต่อร้ายแรงหรือมีอาการป่วยฉุกเฉินเข้าพัก เพื่อความปลอดภัยของสัตว์เลี้ยงทุกตัว",
      ],
    },
    {
      title: "2. การเตรียมตัวก่อนเข้าพัก",
      icon: <Heart className="text-orange-500" size={24} />,
      details: [
        "แนะนำให้นำอาหารสำเร็จรูปที่น้องคุ้นเคยมาด้วย เพื่อป้องกันอาการท้องเสียจากการเปลี่ยนอาหารกระทันหัน",
        "สามารถนำของเล่นชิ้นโปรด หรือผ้าห่มที่มีกลิ่นคุ้นเคยของน้องมาด้วยได้ เพื่อช่วยลดความเครียด",
        "กรุณาแจ้งพฤติกรรมเฉพาะตัวของน้อง (เช่น กลัวเสียงดัง, หวงของ, หรือเข้ากับสัตว์ตัวอื่นยาก) ให้พี่เลี้ยงทราบล่วงหน้า",
      ],
    },
    {
      title: "3. เวลาในการเช็คอิน - เช็คเอาท์",
      icon: <Clock className="text-orange-500" size={24} />,
      details: [
        "เวลาเช็คอิน: 10:00 น. - 18:00 น.",
        "เวลาเช็คเอาท์: ก่อน 12:00 น. (หากเกินเวลาจะมีค่าบริการรายชั่วโมงเพิ่มเติม)",
        "กรณีต้องการฝากดูแลช่วงดึกหรือรับกลับนอกเวลาทำการ กรุณาแจ้งนัดหมายล่วงหน้ากับทางเจ้าหน้าที่",
      ],
    },
    {
      title: "4. มาตรการดูแลความปลอดภัยและกรณีฉุกเฉิน",
      icon: <ShieldCheck className="text-orange-500" size={24} />,
      details: [
        "มีพี่เลี้ยงประจำโซนและระบบกล้องวงจรปิดเปิดให้เจ้าของสตรีมดูน้องได้ตลอด 24 ชั่วโมง",
        "หากสัตว์เลี้ยงมีอาการเจ็บป่วยฉุกเฉินระหว่างเข้าพัก ทางโรงแรมจะรีบนำส่งโรงพยาบาลสัตว์ในเครือข่ายทันที และติดต่อเจ้าของโดยเร็วที่สุด",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
            <ShieldCheck size={16} /> PET PARADISE GUIDELINES
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            นโยบายและข้อกำหนด <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">การเข้าพัก</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            เพื่อความปลอดภัย ความสะอาด และความสุขของสัตว์เลี้ยงทุกตัวใน PetParadise กรุณาศึกษาและปฏิบัติตามกฎระเบียบเบื้องต้นดังต่อไปนี้
          </p>
        </div>

        {/* Policy Cards List */}
        <div className="space-y-6">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-xl shadow-orange-500/5 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  {policy.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{policy.title}</h2>
              </div>
              <ul className="space-y-3 pl-2 sm:pl-4">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                    <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note Box */}
        <div className="bg-amber-50 border border-amber-200/60 rounded-3xl p-6 sm:p-8 flex items-start gap-4 text-amber-900">
          <AlertCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
          <div className="space-y-1 text-sm sm:text-base">
            <span className="font-bold block">ข้อสงสัยเพิ่มเติม?</span>
            <p className="text-amber-800/80">
              หากท่านมีคำถามเกี่ยวกับเงื่อนไขเฉพาะของสัตว์เลี้ยงแต่ละประเภท สามารถติดต่อสอบถามทีมงานของเราได้โดยตรงผ่านหน้าติดต่อเราครับ
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}