import MasterCalendar from '@/components/calendar/MasterCalendar';
import { Hotel, Users, Bed, Image as ImageIcon, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F8FAFC] p-8 lg:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center text-white shadow-xl shadow-blue-100">
                            <Hotel size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight">AyrisStay Dashboard</h1>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">Otonom Otel Yönetim Paneli</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <Link href="/rooms" className="flex items-center gap-3 bg-white px-6 py-4 rounded-[24px] border border-gray-100 shadow-sm hover:border-emerald-500 transition-all group">
                            <Bed size={20} className="text-gray-400 group-hover:text-emerald-500" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-900">Odalarım</span>
                        </Link>
                        <Link href="/gallery" className="flex items-center gap-3 bg-white px-6 py-4 rounded-[24px] border border-gray-100 shadow-sm hover:border-blue-500 transition-all group">
                            <ImageIcon size={20} className="text-gray-400 group-hover:text-blue-500" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-900">Galeri</span>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: 'Doluluk Oranı', value: '%84', sub: 'Son 7 Gün', color: 'blue' },
                        { label: 'Bugün Girecek', value: '12', sub: 'Check-in Bekliyor', color: 'emerald' },
                        { label: 'Bugün Çıkacak', value: '8', sub: 'Check-out Bekliyor', color: 'orange' },
                        { label: 'Bekleyen Mesaj', value: '4', sub: 'AI Tarafından Cevaplandı', color: 'purple' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[36px] border border-gray-100 shadow-sm hover:border-blue-500 transition-colors cursor-pointer group">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 group-hover:text-blue-500">{stat.label}</p>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                            <p className="text-[10px] font-bold text-gray-300 uppercase">{stat.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Master Calendar */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between px-4">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">Kanal ve Müsaitlik Takibi</h2>
                        <div className="flex gap-2">
                             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] font-black text-emerald-600 uppercase">Booking: Bağlı</span>
                             </div>
                             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] font-black text-emerald-600 uppercase">Airbnb: Bağlı</span>
                             </div>
                        </div>
                    </div>
                    <MasterCalendar />
                </section>
            </div>
        </main>
    );
}
