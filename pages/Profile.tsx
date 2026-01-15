
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="p-6 animate-fadeIn space-y-8">
      {/* Office Header Section */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 bg-[#002B5B] rounded-3xl shadow-xl flex items-center justify-center mb-6 border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <i className="fa-solid fa-landmark text-white text-5xl"></i>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-800 text-center uppercase tracking-tight">
          KPP Pratama Jayapura
        </h2>
        <div className="h-1 w-12 bg-blue-600 rounded-full mt-2"></div>
      </div>

      {/* Info Cards */}
      <div className="space-y-4">
        {/* Address Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Alamat Kantor</h4>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Jl. Otonom No.3, Wahno, Kec. Abepura, Kota Jayapura, Papua 99224
            </p>
            <button 
              onClick={() => window.open('https://maps.google.com/?q=KPP+Pratama+Jayapura', '_blank')}
              className="mt-3 text-xs text-blue-600 font-bold flex items-center space-x-1 hover:underline"
            >
              <span>Petunjuk Arah</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
            </button>
          </div>
        </div>

        {/* Service Hours Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start space-x-4">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
            <i className="fa-solid fa-clock"></i>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Jam Pelayanan</h4>
            <p className="text-sm text-slate-700 font-bold">
              08.00 s.d. 13.00 WIT
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Senin s.d. Jumat
            </p>
            <div className="mt-3 inline-flex items-center px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[9px] font-bold uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
              Sesuai Jam Operasional
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-slate-800 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-xs font-bold opacity-70 uppercase tracking-widest mb-2">Bantuan Cepat</h4>
            <p className="text-sm font-medium mb-4">Butuh informasi lebih lanjut terkait administrasi pajak?</p>
            <button 
              onClick={() => window.open('https://wa.me/628114216899', '_blank')}
              className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 active:scale-95 transition-all"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Chat Admin Sekarang</span>
            </button>
          </div>
          <i className="fa-solid fa-headset absolute -right-4 -bottom-4 text-7xl opacity-10 -rotate-12"></i>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center pt-4">
        <button className="text-red-500 text-xs font-bold flex items-center justify-center space-x-2 mx-auto opacity-50 hover:opacity-100 transition-opacity">
          <i className="fa-solid fa-sign-out-alt"></i>
          <span>Keluar Aplikasi</span>
        </button>
        <p className="mt-8 text-[9px] text-slate-300 uppercase tracking-[0.2em]">
          Jayapura Digital Services &copy; 2025
        </p>
      </div>
    </div>
  );
};

export default Profile;
