import Link from 'next/link'
import { Sparkles, ShieldCheck, Heart, Coffee, Waves, Stethoscope, Utensils, Home } from 'lucide-react'

export default function Herosection() {
  const highlights = [
    {
      icon: <Home className="text-orange-600" size={24} />,
      title: "ห้องพักหลากสไตล์",
      description: "มีให้เลือกถึง 6 ระดับ ตั้งแต่ Cozy Box ไปจนถึง Private Pool Villa ส่วนตัว"
    },
    {
      icon: <ShieldCheck className="text-orange-600" size={24} />,
      title: "ปลอดภัย ไร้กังวล",
      description: "ระบบกล้องวงจรปิดส่วนตัวสตรีมดูน้องได้ตลอด 24 ชม. พร้อมพี่เลี้ยงดูแลใกล้ชิด"
    },
    {
      icon: <Waves className="text-orange-600" size={24} />,
      title: "สระว่ายน้ำระบบเกลือ",
      description: "โซนออกกำลังกายและสระว่ายน้ำผ่อนคลายสำหรับสัตว์เลี้ยงโดยเฉพาะ"
    },
    {
      icon: <Stethoscope className="text-orange-600" size={24} />,
      title: "ดูแลโดยผู้เชี่ยวชาญ",
      description: "มีสัตวแพทย์และทีมงานคอยตรวจเช็คสุขภาพและให้คำปรึกษาตลอดการเข้าพัก"
    },
    {
      icon: <Coffee className="text-orange-600" size={24} />,
      title: "Pet-Friendly Café",
      description: "โซนคาเฟ่สุดชิคสำหรับเจ้าของและน้องๆ นั่งจิบเครื่องดื่มพร้อมพบปะเพื่อนใหม่"
    },
    {
      icon: <Utensils className="text-orange-600" size={24} />,
      title: "อาหารและโภชนาการ",
      description: "คัดสรรอาหารเกรดพรีเมียมและขนมขบเคี้ยวธรรมชาติ ปลอดภัยต่อน้องๆ"
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Main Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-emerald-700">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                <Sparkles size={16} /> ยินดีต้อนรับสู่โรงแรม Pet-Friendly ระดับพรีเมียม
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                พักผ่อนอย่างมีความสุข
                <span className="block text-yellow-300">
                  ร่วมกับสัตว์เลี้ยงแสนรักของคุณ
                </span>
              </h1>

              <p className="mt-6 text-lg text-amber-100 leading-relaxed">
                โรงแรมที่เข้าใจคนรักสัตว์ รองรับสุนัขสูงสุด 7 ตัวต่อห้อง (น้ำหนักไม่เกิน 30 กก., สูงไม่เกิน 1.2 ม.) 
                และยินดีต้อนรับสัตว์เลี้ยงประเภทอื่นๆ แบบไม่จำกัดจำนวน พร้อมสิ่งอำนวยความสะดวกครบครัน!
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/room"
                  className="rounded-xl bg-white px-6 py-3.5 font-semibold text-orange-700 shadow-xl transition hover:scale-105 text-center active:scale-95"
                >
                  จองห้องพัก (Pet-Friendly)
                </Link>

                <Link
                  href="/policy"
                  className="rounded-xl border border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-orange-700 text-center active:scale-95"
                >
                  ดูนโยบายสัตว์เลี้ยง
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-white/20 blur-3xl"></div>

                <img
                  src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=900"
                  alt="Happy dog at hotel"
                  className="relative w-full max-w-lg rounded-3xl shadow-2xl object-cover h-[400px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights & Services Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-orange-600 font-bold text-xs uppercase tracking-widest bg-orange-100 px-3 py-1 rounded-full">
            บริการระดับเวิลด์คลาส
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            ทำไมต้องเลือกพักผ่อนกับ <span className="text-orange-600">PetParadise</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            เรามอบประสบการณ์การพักผ่อนที่ดีที่สุดสำหรับคุณและสมาชิกตัวน้อย ด้วยมาตรฐานการดูแลที่ใส่ใจในทุกรายละเอียด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  {/* Clone element to inherit hover color if needed */}
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}