'use client';

import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { tr } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Edit2, Check, X } from 'lucide-react';

const roomTypes = [
    { id: '1', name: 'Standart Oda' },
    { id: '2', name: 'Deluxe Suit' },
    { id: '3', name: 'Kral Dairesi' }
];

export default function MasterCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [editingCell, setEditingCell] = useState<string | null>(null);
    const [editValue, setEditValue] = useState('');
    
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });

    const handleCellClick = (roomId: string, date: string) => {
        setEditingCell(`${roomId}-${date}`);
        setEditValue('5'); // Default or current value
    };

    const handleSave = () => {
        // Here we would call the backend API /api/v1/rates/update-rate
        console.log('Saving new availability:', editValue);
        setEditingCell(null);
    };

    return (
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden flex flex-col h-[70vh]">
            {/* Header */}
            <div className="p-8 bg-gray-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <CalendarIcon size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight uppercase">Master Takvim</h2>
                        <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Tüm Kanallar Canlı Senkronize</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <button onClick={() => setCurrentDate(addDays(currentDate, -30))} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm font-black uppercase tracking-widest w-32 text-center">
                            {format(currentDate, 'MMMM yyyy', { locale: tr })}
                        </span>
                        <button onClick={() => setCurrentDate(addDays(currentDate, 30))} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-auto">
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 z-10 bg-gray-50 shadow-sm">
                        <tr>
                            <th className="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest border-r border-b bg-gray-50 min-w-[200px]">Oda Tipi</th>
                            {days.map(day => (
                                <th key={day.toISOString()} className="p-4 text-center border-r border-b min-w-[60px]">
                                    <p className="text-[10px] font-black text-gray-400 uppercase">{format(day, 'EEE', { locale: tr })}</p>
                                    <p className="text-lg font-black text-gray-900 leading-none mt-1">{format(day, 'd')}</p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {roomTypes.map(room => (
                            <tr key={room.id} className="group hover:bg-blue-50/30 transition-colors">
                                <td className="p-6 border-r border-b bg-white group-hover:bg-blue-50/50">
                                    <span className="text-sm font-bold text-gray-900 uppercase tracking-tight">{room.name}</span>
                                </td>
                                {days.map(day => {
                                    const dayKey = day.toISOString();
                                    const isEditing = editingCell === `${room.id}-${dayKey}`;
                                    const isAvailable = Math.random() > 0.3; // Mock data

                                    return (
                                        <td 
                                            key={dayKey} 
                                            className="p-4 border-r border-b relative group/cell cursor-pointer"
                                            onClick={() => handleCellClick(room.id, dayKey)}
                                        >
                                            {isEditing ? (
                                                <div className="flex flex-col gap-2 animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
                                                    <input 
                                                        autoFocus
                                                        type="number"
                                                        value={editValue}
                                                        onChange={e => setEditValue(e.target.value)}
                                                        className="w-full h-10 border-2 border-blue-500 rounded-xl text-center font-black text-xs"
                                                    />
                                                    <div className="flex gap-1">
                                                        <button onClick={handleSave} className="flex-1 bg-blue-600 text-white p-1 rounded-lg hover:bg-blue-700 transition-colors">
                                                            <Check size={14} className="mx-auto" />
                                                        </button>
                                                        <button onClick={() => setEditingCell(null)} className="flex-1 bg-gray-200 text-gray-600 p-1 rounded-lg hover:bg-gray-300 transition-colors">
                                                            <X size={14} className="mx-auto" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className={`w-full h-10 rounded-xl flex items-center justify-center transition-all ${isAvailable ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 hover:scale-105' : 'bg-red-50 text-red-600 border border-red-100 opacity-50'}`}>
                                                        <span className="text-xs font-black">{isAvailable ? '5' : '0'}</span>
                                                    </div>
                                                    <div className="absolute top-1 right-1 opacity-0 group-hover/cell:opacity-100 transition-opacity">
                                                        <Edit2 size={10} className="text-gray-400" />
                                                    </div>
                                                </>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
