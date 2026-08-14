import Image from 'next/image';
import Link from 'next/link';

export default function Cardsection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">ห้องพักสำหรับคุณและสัตว์เลี้ยง</h2>
          <p className="mt-2 text-gray-600">
            สุนัขเข้าพักได้สูงสุด 7 ตัว/ห้อง (น้ำหนักไม่เกิน 30 กก., สูงไม่เกิน 1.2 ม.) และสัตว์เลี้ยงอื่นๆ ไม่จำกัดจำนวน
          </p>
        </div>

        {/* ตะแกรง Grid แบบ 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {/* ==================== การ์ดใบที่ 1: ห้องดีลักซ์ วิวสวน ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&q=80"
                alt="Deluxe Garden Room"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                Deluxe Garden View
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ห้องพักกว้างขวาง พร้อมพื้นที่สนามหญ้าส่วนตัวให้น้องหมาวิ่งเล่น รองรับสุนัขได้สูงสุด 7 ตัว
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-orange-600">฿2,500 <span className="text-xs font-normal text-gray-500">/ คืน</span></span>
                <Link
                  href="/rooms/deluxe-garden"
                  className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          </div>

          {/* ==================== การ์ดใบที่ 2: ห้องสวีทสำหรับครอบครัวสัตว์เลี้ยง ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80"
                alt="Pet Family Suite"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                Pet Family Suite
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ห้องสวีทขนาดใหญ่พิเศษ มีเบาะนอนและชามอาหารพร้อมรองรับสัตว์เลี้ยงทุกประเภทอย่างไร้ขีดจำกัด
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-orange-600">฿4,200 <span className="text-xs font-normal text-gray-500">/ คืน</span></span>
                <Link
                  href="/rooms/pet-family-suite"
                  className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          </div>

          {/* ==================== การ์ดใบที่ 3: วิลล่าส่วนตัว ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80"
                alt="Private Pool Villa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                Private Pool Villa
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                วิลล่าส่วนตัวพร้อมสระว่ายน้ำระบบเกลือที่พาสัตว์เลี้ยงลงเล่นได้ เป็นส่วนตัวขั้นสุด
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-orange-600">฿6,500 <span className="text-xs font-normal text-gray-500">/ คืน</span></span>
                <Link
                  href="/rooms/private-pool-villa"
                  className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition-colors"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}