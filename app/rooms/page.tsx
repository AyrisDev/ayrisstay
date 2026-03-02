'use client';

import React, { useState } from 'react';
import { Bed, Plus, Trash2, Home, Save } from 'lucide-react';
import Link from 'next/link';

export default function RoomsPage() {
    const [rooms, setRooms] = useState([
        { id: '1', name: 'Standart Oda', price: 1200, capacity: 2 },
        { id: '2', name: 'Deluxe Suit', price: 2500, capacity: 3 }
    ]);
    const [isAdding, setIsAdding] = useState(false);
    const [newRoom, setNewRoom] = useState({ name: '', price: '', capacity: '2' });

    const handleAdd = () => {
        setRooms([...rooms, { id: Date.now().toString(), name: newRoom.name, price: Number(newRoom.price), capacity: Number(newRoom.capacity) }]);
        setIsAdding(false);
        setNewRoom({ name: '', price: '', capacity: '2' });
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC] p-8 lg:p-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-emerald-600 rounded-[24px] flex items-center justify-center text-white shadow-xl">
                            <Bed size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">Odalarım</h1>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">Oda Tipleri ve Fiyatlandırma</p>
                        </div>
                    </div>
                    <Link href="/" className="p-4 bg-white rounded-2xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all shadow-sm">
                        <Home size={20} />
                    </Link>
                </div>

                <div className="grid gap-6">
                    {rooms.map(room => (
                        <div key={room.id} className="bg-white p-8 rounded-[36px] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-emerald-500 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                                    <Bed size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 uppercase">{room.name}</h3>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kapasite: {room.capacity} Kişi</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="text-right">
                                    <p className="text-2xl font-black text-gray-900">{room.price.toLocaleString('tr-TR')} ₺</p>
                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter">Taban Fiyat</p>
                                </div>
                                <button className="p-3 text-gray-300 hover:text-red-500 transition-colors">
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    ))}

                    {isAdding ? (
                        <div className="bg-white p-10 rounded-[40px] border-2 border-emerald-500 shadow-2xl space-y-8 animate-in zoom-in duration-300">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Oda Adı</label>
                                    <input 
                                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                                        placeholder="Örn: Kral Dairesi"
                                        value={newRoom.name}
                                        onChange={e => setNewRoom({...newRoom, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Taban Fiyat (₺)</label>
                                    <input 
                                        type="number"
                                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                                        placeholder="5000"
                                        value={newRoom.price}
                                        onChange={e => setNewRoom({...newRoom, price: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={handleAdd} className="flex-1 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-100">
                                    <Save size={18} /> Kaydet
                                </button>
                                <button onClick={() => setIsAdding(false)} className="px-8 py-5 bg-gray-100 text-gray-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                                    İptal
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => setIsAdding(true)}
                            className="w-full py-10 border-2 border-dashed border-gray-200 rounded-[40px] flex flex-col items-center justify-center gap-4 text-gray-300 hover:text-emerald-500 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Plus size={24} />
                            </div>
                            <span className="font-black text-xs uppercase tracking-[0.3em]">Yeni Oda Tipi Ekle</span>
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
}
