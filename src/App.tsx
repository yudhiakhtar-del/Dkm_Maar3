import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import JadwalSholat from './components/JadwalSholat';
import KajianComponent from './components/Kajian';
import KegiatanComponent from './components/Kegiatan';
import GaleriComponent from './components/Galeri';
import ArtikelComponent from './components/Artikel';
import DonasiComponent from './components/Donasi';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import VideoProfil from './components/VideoProfil';
// @ts-ignore
import fiqihSunnahFlyer from './assets/images/fiqih_sunnah_flyer_1780238395487.png';
// @ts-ignore
import sirahNabawiyahFlyer from './assets/images/sirah_nabawiyah_flyer_1780239260088.png';
// @ts-ignore
import bankSampahOrchidFlyer from './assets/images/bank_sampah_orchid_flyer_1780239512122.png';
// @ts-ignore
import ustadzIdrusAbidin from './assets/images/ustadz_idrus_abidin_1780270163083.png';

// Types
import { Artikel, Kegiatan, Kajian, Galeri, DonasiCampaign, Pengurus, Donor } from './types';

// Initial Mock Content
import {
  INITIAL_ARTIKEL,
  INITIAL_KEGIATAN,
  INITIAL_KAJIAN,
  INITIAL_GALERI,
  INITIAL_DONASI,
  INITIAL_PENGURUS,
} from './data/initialData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('beranda');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Core synchronized lists for CRUD administration operations
  const [artikelList, setArtikelList] = useState<Artikel[]>(() => {
    const cached = localStorage.getItem('maar3_artikel');
    return cached ? JSON.parse(cached) : INITIAL_ARTIKEL;
  });

  const [kegiatanList, setKegiatanList] = useState<Kegiatan[]>(() => {
    const cached = localStorage.getItem('maar3_kegiatan');
    if (cached) {
      const parsed = JSON.parse(cached);
      return parsed.map((item: Kegiatan) => {
        if (item.id === 'keg-3') {
          return { ...item, image: bankSampahOrchidFlyer };
        }
        return item;
      });
    }
    return INITIAL_KEGIATAN;
  });

  const [kajianList, setKajianList] = useState<Kajian[]>(() => {
    const cached = localStorage.getItem('maar3_kajian');
    if (cached) {
      const parsed = JSON.parse(cached);
      return parsed.map((item: Kajian) => {
        if (item.id === 'kajian-1') {
          return { ...item, image: fiqihSunnahFlyer };
        }
        if (item.id === 'kajian-2') {
          return { ...item, image: sirahNabawiyahFlyer };
        }
        if (item.id === 'kajian-3') {
          return { ...item, image: ustadzIdrusAbidin };
        }
        return item;
      });
    }
    return INITIAL_KAJIAN;
  });

  const [galeriList, setGaleriList] = useState<Galeri[]>(() => {
    const cached = localStorage.getItem('maar3_galeri');
    if (cached) {
      const parsed = JSON.parse(cached);
      return parsed.map((item: Galeri) => {
        if (item.id === 'gal-5') {
          return { ...item, image: bankSampahOrchidFlyer };
        }
        return item;
      });
    }
    return INITIAL_GALERI;
  });

  const [campaignList, setCampaignList] = useState<DonasiCampaign[]>(() => {
    const cached = localStorage.getItem('maar3_campaigns');
    return cached ? JSON.parse(cached) : INITIAL_DONASI;
  });

  const [pengurusList, setPengurusList] = useState<Pengurus[]>(() => {
    const cached = localStorage.getItem('maar3_pengurus');
    if (cached) {
      try {
        let parsed = JSON.parse(cached);
        // Filter out deleted roles
        parsed = parsed.filter(
          (p: any) => p.id !== 'peng-1' && p.role !== 'Ketua Umum DKM MAAR3' && p.role !== 'Ketua Umum DKMMAAR3'
        );
        
        // Find if Ustadz Idrus Abidin is already in parsed
        const idrusIndex = parsed.findIndex((p: any) => p.name.includes("Idrus Abidin") || p.id === 'peng-idrus');
        if (idrusIndex === -1) {
          // If Ustadz Idrus Abidin is missing, we prepend/add him from INITIAL_PENGURUS
          const idrusInitial = INITIAL_PENGURUS.find(p => p.id === 'peng-idrus');
          if (idrusInitial) {
            parsed.unshift(idrusInitial);
          }
        } else {
          // If he exists, ensure his image is ALWAYS the latest image
          parsed[idrusIndex].image = ustadzIdrusAbidin;
        }
        
        return parsed;
      } catch (e) {
        return INITIAL_PENGURUS;
      }
    }
    return INITIAL_PENGURUS;
  });

  // Recent simulated donors list
  const [recentDonors, setRecentDonors] = useState<Donor[]>(() => {
    const cached = localStorage.getItem('maar3_donors');
    if (cached) return JSON.parse(cached);
    return [
      {
        id: 'don-p-1',
        campaignId: 'don-1',
        name: 'Bapak H. Yudhi Akhtar',
        amount: 2500000,
        date: '2026-05-30',
        message: 'Bismillah, lancarkan seluruh renovasi menara kiblat Masjid MAAR3. Semoga menjadi wasilah istana surga.',
      },
      {
        id: 'don-p-2',
        campaignId: 'don-2',
        name: 'Ibu Ratna Orchid',
        amount: 150000,
        date: '2026-05-31',
        message: 'Sedekah jumat barokah, khusus bagi asatidzah dan operasional kelistrikan ac subuh.',
      },
      {
        id: 'don-p-3',
        campaignId: 'don-4',
        name: 'Hamba Allah',
        amount: 300000,
        date: '2026-05-31',
        message: 'Infaq bagi santunan rutin bulanan anak yatim komplek Orchid Green Park.'
      }
    ];
  });

  // Keep state hydrated inside localStorage of Client Sandbox
  const [profileVideoUrl, setProfileVideoUrl] = useState<string>(() => {
    const cached = localStorage.getItem('maar3_profile_video');
    if (!cached || cached === 'https://www.youtube.com/watch?v=eW6l4uVnEAs') {
      return 'https://www.youtube.com/watch?v=6NLwziTHHy4&list=PLLrzrdSGtEBben3b7-LIzvaqjY60XFM8S';
    }
    return cached;
  });

  useEffect(() => {
    localStorage.setItem('maar3_profile_video', profileVideoUrl);
  }, [profileVideoUrl]);

  useEffect(() => {
    localStorage.setItem('maar3_artikel', JSON.stringify(artikelList));
  }, [artikelList]);

  useEffect(() => {
    localStorage.setItem('maar3_kegiatan', JSON.stringify(kegiatanList));
  }, [kegiatanList]);

  useEffect(() => {
    localStorage.setItem('maar3_kajian', JSON.stringify(kajianList));
  }, [kajianList]);

  useEffect(() => {
    localStorage.setItem('maar3_galeri', JSON.stringify(galeriList));
  }, [galeriList]);

  useEffect(() => {
    localStorage.setItem('maar3_campaigns', JSON.stringify(campaignList));
  }, [campaignList]);

  useEffect(() => {
    localStorage.setItem('maar3_pengurus', JSON.stringify(pengurusList));
  }, [pengurusList]);

  useEffect(() => {
    localStorage.setItem('maar3_donors', JSON.stringify(recentDonors));
  }, [recentDonors]);

  // Dark light mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Article Liking functionality
  const handleLikeArtikel = (id: string) => {
    setArtikelList((prev) =>
      prev.map((art) => (art.id === id ? { ...art, likes: art.likes + 1 } : art))
    );
  };

  // Add donation live simulation handler
  const handleAddDonation = (campaignId: string, amount: number, donorName: string, message: string) => {
    // 1. Update Campaign raised metric
    setCampaignList((prev) =>
      prev.map((camp) =>
        camp.id === campaignId
          ? {
              ...camp,
              raised: camp.raised + amount,
              donorsCount: camp.donorsCount + 1,
            }
          : camp
      )
    );

    // 2. Add as scroll contributor list
    const newDonor: Donor = {
      id: `donor-${Date.now()}`,
      campaignId,
      name: donorName,
      amount,
      date: new Date().toISOString().split('T')[0],
      message,
    };
    setRecentDonors([newDonor, ...recentDonors]);
  };

  // Active Tab View Routing render helper
  const renderTabView = () => {
    switch (currentTab) {
      case 'beranda':
        return (
          <>
            <Hero onTabChange={setCurrentTab} />
            
            {/* Quick Summary Highlights Section */}
            <div className="bg-white dark:bg-slate-950 py-16 border-t border-emerald-950/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Highlights grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Text panel Left */}
                  <div className="lg:col-span-5 text-left space-y-4">
                    <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest bg-amber-100 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
                      Pusat Kemaslahatan Umat
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-black text-gray-950 dark:text-white leading-tight">
                      Visi Kebersamaan Di Wilayah Depok
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                      Masjid MAAR3 bukan sekadar bangunan peribadahan bisu. Kami membina lingkungan harmonis warga Orchid Green Park melalui kolaborasi program kesejahteraan lahir dan batin, kebersihan ekologi lingkungan, serta pembinaan akhlaq generasi masa depan bangsa.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => setCurrentTab('profil')}
                        className="py-2.5 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase cursor-pointer transition-colors shadow-sm"
                      >
                        Baca Sejarah Masjid &rarr;
                      </button>
                      <button
                        onClick={() => setCurrentTab('artikel')}
                        className="py-2.5 px-5 rounded-lg border border-gray-200 text-gray-600 hover:text-emerald-700 dark:border-slate-800 dark:text-slate-300 dark:hover:text-amber-400 text-xs font-bold uppercase cursor-pointer"
                      >
                        Perpustakaan Syiar Artikel
                      </button>
                    </div>
                  </div>

                  {/* Visual card Highlights Right */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Highlight Box 1 */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-150/40 dark:border-slate-800 text-left relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-xl group-hover:scale-125 duration-500 transition-transform" />
                      <div className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 flex items-center justify-center font-bold mb-4 font-mono">
                        🕋
                      </div>
                      <h4 className="font-serif font-bold text-base text-gray-950 dark:text-white">
                        Kajian Ruang Utama
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-sans leading-relaxed">
                        Pengembangan materi fiqih, tafsir, aqidah serta tazkiyatun nafs rutin dibina asatidzah berkompeten tiap Sabtu & Ahad subuh.
                      </p>
                    </div>

                    {/* Highlight Box 2 */}
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-150/40 dark:border-slate-800 text-left relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-full blur-xl group-hover:scale-125 duration-500 transition-transform" />
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4 font-mono">
                        🌱
                      </div>
                      <h4 className="font-serif font-bold text-base text-gray-950 dark:text-white">
                        Bank Sampah & Posyandu
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-sans leading-relaxed">
                        Sinergitas nyata DKM MAAR3 bersama pengurus warga Orchid Green Park dalam melestarikan bumi asri asri serta pemeriksaan balita-lansia.
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Video Profil Masjid */}
            <VideoProfil 
              videoUrl={profileVideoUrl} 
              onUpdateVideoUrl={setProfileVideoUrl} 
              isAdmin={true}
            />

            {/* Quick interactive schedules Widget on home */}
            <JadwalSholat />
          </>
        );

      case 'profil':
        return <Profil pengurusList={pengurusList} />;
      
      case 'jadwal':
        return <JadwalSholat />;

      case 'kajian':
        return <KajianComponent kajianList={kajianList} />;

      case 'kegiatan':
        return <KegiatanComponent kegiatanList={kegiatanList} />;

      case 'galeri':
        return <GaleriComponent galeriList={galeriList} />;

      case 'artikel':
        return <ArtikelComponent artikelList={artikelList} onLike={handleLikeArtikel} />;

      case 'donasi':
        return (
          <DonasiComponent
            campaigns={campaignList}
            onAddDonation={handleAddDonation}
            recentDonors={recentDonors}
          />
        );

      case 'admin':
        return (
          <AdminDashboard
            artikelList={artikelList}
            kegiatanList={kegiatanList}
            kajianList={kajianList}
            galeriList={galeriList}
            campaignList={campaignList}
            pengurusList={pengurusList}
            setArtikelList={setArtikelList}
            setKegiatanList={setKegiatanList}
            setKajianList={setKajianList}
            setGaleriList={setGaleriList}
            setCampaignList={setCampaignList}
            setPengurusList={setPengurusList}
            onClose={() => setCurrentTab('beranda')}
          />
        );

      default:
        return <Hero onTabChange={setCurrentTab} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Glossmorphism Header Navigation Menu */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onAdminClick={() => setCurrentTab('admin')}
      />

      {/* Main Routed Components viewport */}
      <main className="flex-grow">
        {renderTabView()}
      </main>

      {/* Footer layout */}
      <Footer
        onTabChange={setCurrentTab}
        onAdminClick={() => setCurrentTab('admin')}
      />

    </div>
  );
}
