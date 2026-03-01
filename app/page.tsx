import MasterCalendar from '@/components/calendar/MasterCalendar';
import { Hotel, Users, MapPin, Search } from 'lucide-react';

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
                    
                    <div className="flex items-center gap-4 bg-white p-4 rounded-[28px] border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-lg font-black text-gray-900">324</p>
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-tighter">Aktif Misafir</p>
                        </div>
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
