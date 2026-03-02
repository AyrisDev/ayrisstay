'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Plus, Trash2, Home, Upload, Grid } from 'lucide-react';
import Link from 'next/link';

export default function GalleryPage() {
    const [images, setImages] = useState([
        { id: '1', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop', title: 'Genel Görünüm' },
        { id: '2', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop', title: 'Deluxe Suit' }
    ]);

    return (
        <main className="min-h-screen bg-[#F8FAFC] p-8 lg:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-blue-600 rounded-[24px] flex items-center justify-center text-white shadow-xl">
                            <ImageIcon size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">Galeri</h1>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">Görsel Varlık Yönetimi</p>
                        </div>
                    </div>
                    <Link href="/" className="p-4 bg-white rounded-2xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all shadow-sm">
                        <Home size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Upload Card */}
                    <div className="aspect-video md:aspect-square border-2 border-dashed border-gray-200 rounded-[40px] flex flex-col items-center justify-center gap-4 text-gray-300 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50/30 transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Plus size={24} />
                        </div>
                        <span className="font-black text-xs uppercase tracking-[0.3em]">Fotoğraf Yükle</span>
                    </div>

                    {images.map(img => (
                        <div key={img.id} className="group relative aspect-video md:aspect-square rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
                            <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-white font-black uppercase text-xs tracking-widest">{img.title}</p>
                                    <button className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
