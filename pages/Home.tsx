
import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

interface HomeProps {
  onSelectService: (category: ServiceCategory) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectService }) => {
  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      {/* Hero Section - Cleaned Up */}
      <div className="bg-gradient-to-br from-[#003B7B] to-[#002B5B] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Selamat Datang!</h2>
          <p className="text-blue-100 text-sm opacity-90 leading-relaxed max-w-[80%]">
            Akses layanan perpajakan KPP Pratama Jayapura dengan lebih cepat dan mudah langsung dari genggaman Anda.
          </p>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Services Grid */}
      <div>
        <div className="mb-4">
          <h3 className="font-bold text-slate-800 text-lg">Layanan Utama</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:scale-[1.02] hover:shadow-md group active:scale-95"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl shadow-lg transition-transform group-hover:rotate-6`}>
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <span className="font-bold text-slate-700">{service.title}</span>
              <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Klik untuk rincian</span>
            </button>
          ))}
        </div>
      </div>

      {/* Info Banner Updated for 2026 */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center space-x-2 mb-3">
          <i className="fa-solid fa-bullhorn text-amber-600"></i>
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">Informasi Terbaru</h4>
        </div>
        <ul className="space-y-3">
          {/* Combined Item: Aktivasi Akun Coretax & Kode Otorisasi DJP - YouTube logo removed */}
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Segera lakukan <strong className="cursor-pointer hover:text-amber-600 hover:underline transition-all" onClick={() => window.open('https://www.youtube.com/watch?v=w5I7g5OeOEQ', '_blank')}>Aktivasi Akun Coretax</strong> dan <strong className="cursor-pointer hover:text-amber-600 hover:underline transition-all" onClick={() => window.open('https://www.youtube.com/watch?v=RUV3lw9C21M', '_blank')}>Kode Otorisasi DJP</strong>
            </p>
          </li>

          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Jika Gabung NPWP istri ke Suami : <strong>Istri Ajukan Non-Aktif Sebelum 31 Maret 2026*</strong>
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Batas pelaporan SPT Tahunan PPh Orang Pribadi adalah <strong>31 Maret 2026</strong>. Segera laporkan sebelum terlambat!
            </p>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              Batas pelaporan SPT Tahunan Badan adalah <strong>30 April 2026</strong>. Segera laporkan sebelum terlambat!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
