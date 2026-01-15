
import React, { useState, useCallback } from 'react';
import { AppTab, ServiceCategory, MainService, SubService } from './types';
import { SERVICES } from './constants';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceList from './pages/ServiceList';
import ServiceDetail from './pages/ServiceDetail';
import Tutorial from './pages/Tutorial';
import TutorialDetail from './pages/TutorialDetail';
import Profile from './pages/Profile';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('Beranda');
  const [selectedService, setSelectedService] = useState<MainService | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [selectedTutorialId, setSelectedTutorialId] = useState<string | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleSelectService = (category: ServiceCategory) => {
    const service = SERVICES.find(s => s.id === category);
    if (service) {
      setSelectedService(service);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSubService = (sub: SubService) => {
    setSelectedSubService(sub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTutorial = (id: string) => {
    setSelectedTutorialId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = useCallback(() => {
    setSelectedSubService(null);
  }, []);

  const handleBackToHome = useCallback(() => {
    setSelectedService(null);
    setSelectedSubService(null);
  }, []);

  const handleBackToTutorialList = useCallback(() => {
    setSelectedTutorialId(null);
  }, []);

  const renderContent = () => {
    if (activeTab === 'Beranda') {
      if (selectedSubService) {
        return <ServiceDetail subService={selectedSubService} onBack={handleBackToServices} />;
      }
      if (selectedService) {
        return <ServiceList service={selectedService} onBack={handleBackToHome} onSelectSubService={handleSelectSubService} />;
      }
      return <Home onSelectService={handleSelectService} />;
    }

    switch (activeTab) {
      case 'Tutorial':
        if (selectedTutorialId) {
          return <TutorialDetail tutorialId={selectedTutorialId} onBack={handleBackToTutorialList} />;
        }
        return <Tutorial onSelectTutorial={handleSelectTutorial} />;
      case 'Profil':
        return <Profile />;
      case 'Chat':
        // Chat AI dihilangkan, jika tab terpilih tapi modal tertutup (setelah batal),
        // otomatis akan diredirect kembali ke Beranda melalui efek state.
        return <Home onSelectService={handleSelectService} />;
      default:
        return <Home onSelectService={handleSelectService} />;
    }
  };

  const handleTabChange = (tab: AppTab) => {
    // Jika tab yang diklik adalah Chat, tampilkan popup WhatsApp
    if (tab === 'Chat') {
      setIsWhatsAppModalOpen(true);
      // Tetap set activeTab ke Beranda agar UI tidak kosong di belakang modal
      setActiveTab('Beranda');
    } else {
      setActiveTab(tab);
      
      // Reset page states when switching tabs
      if (tab !== 'Beranda') {
        setSelectedService(null);
        setSelectedSubService(null);
      }
      if (tab !== 'Tutorial') {
        setSelectedTutorialId(null);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleConfirmWhatsApp = () => {
    window.open("https://wa.me/628114216899", "_blank");
    setIsWhatsAppModalOpen(false);
    setActiveTab('Beranda');
  };

  const handleCancelWhatsApp = () => {
    setIsWhatsAppModalOpen(false);
    setActiveTab('Beranda');
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={handleTabChange}>
      <div className="max-w-md mx-auto min-h-screen bg-slate-50 relative">
        {renderContent()}
      </div>

      {/* Confirmation Modal for WhatsApp */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={handleCancelWhatsApp}
          ></div>
          <div className="bg-white w-full max-w-xs rounded-[32px] overflow-hidden shadow-2xl relative z-10 animate-slideUp">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-brands fa-whatsapp text-4xl"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Hubungi Admin</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Apakah akan diteruskan ke admin kami melalui WhatsApp?
              </p>
              <div className="space-y-3">
                <button 
                  onClick={handleConfirmWhatsApp}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <i className="fa-solid fa-check"></i>
                  <span>Ya, Lanjutkan</span>
                </button>
                <button 
                  onClick={handleCancelWhatsApp}
                  className="w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl active:scale-95 transition-all"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles and Global Classes */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </Layout>
  );
};

export default App;
