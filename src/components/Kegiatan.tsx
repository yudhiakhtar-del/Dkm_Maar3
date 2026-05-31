import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Search, Grid, Tag, Sparkles } from 'lucide-react';
import { Kegiatan } from '../types';

interface KegiatanProps {
  kegiatanList: Kegiatan[];
}

export default function KegiatanComponent({ kegiatanList }: KegiatanProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Kajian Islam',
    'Bank Sampah',
    'Posyandu',
    'SiJum',
    'Ogp Farm',
    'Ogp Sport',
    'KBMA',
    'Ramadhan',
    'Idul Adha',
    'Kerja Bakti',
  ];

  // Filtering Logic
  const filteredKegiatan = kegiatanList.filter((keg) => {
    const matchesCategory = selectedCategory === 'Semua' || keg.category === selectedCategory;
    const matchesSearch =
      keg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      keg.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: Kegiatan['status']) => {
    switch (status) {
      case 'Sedang Berjalan':
        return 'bg-emerald-500 text-white shadow-emerald-500/20';
      case 'Mendatang':
        return 'bg-amber-400 text-emerald-950 shadow-amber-400/20';
      case 'Selesai':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div id="kegiatan-section" className="bg-white dark:bg-slate-950 transition-colors">
      
      {/* Immersive Beranda-style Header Banner Section */}
      <div className="relative py-24 bg-emerald-950 overflow-hidden flex items-center justify-center text-center">
        {/* Immersive Mosque Senja Background Wallpaper */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-102 filter brightness-[0.38] contrast-[1.05]"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1600')` 
          }}
        />

        {/* Decorative Golden Ambient Lights & Fog Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/45 to-transparent z-10" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl z-10" />

        {/* Repeating Premium Arabesque Glowing Rotating Geometric Overlays */}
        <div className="absolute right-[-10%] top-[-10%] w-[450px] h-[450px] opacity-[0.05] pointer-events-none animate-[spin_120s_linear_infinite] z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
            <path d="M50 0 L60 30 L90 20 L70 50 L100 60 L70 70 L90 90 L60 80 L50 100 L40 80 L10 90 L30 70 L0 60 L30 50 L10 20 L40 30 Z" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute left-[-10%] bottom-[-10%] w-[450px] h-[450px] opacity-[0.04] pointer-events-none animate-[spin_180s_linear_infinite] z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
            <path d="M50 0 L60 30 L90 20 L70 50 L100 60 L70 70 L90 90 L60 80 L50 100 L40 80 L10 90 L30 70 L0 60 L30 50 L10 20 L40 30 Z" />
          </svg>
        </div>

        {/* Header content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs md:text-sm text-amber-300 font-semibold tracking-wide uppercase mb-4 shadow-md backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Katalog Agenda Komunitas</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-serif font-black tracking-wider text-white uppercase drop-shadow-md mb-3">
            <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
              Kegiatan & Agenda
            </span>
          </h2>

          <p className="mt-2 text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto font-sans leading-relaxed">
            Jelajahi seluruh program ibadah, sosial, lingkungan, dan kemasyarakatan yang berjalan di lingkungan Masjid MAAR3.
          </p>
        </div>
      </div>

      {/* Main Body Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search, Filter Tools Row */}
        <div className="space-y-6 mb-12">
          {/* Live Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari agenda kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full border border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs md:text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
            />
          </div>

          {/* Scollable Category Selector Wrapper with luxury indicators */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                    : 'bg-emerald-50 dark:bg-slate-900 border border-emerald-100/40 dark:border-slate-800/80 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-emerald-500-10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Activity Card Display Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredKegiatan.length > 0 ? (
              filteredKegiatan.map((keg) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  id={`kegiatan-card-${keg.id}`}
                  key={keg.id}
                  className="group bg-white dark:bg-slate-900 overflow-hidden rounded-3xl border border-gray-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-emerald-500/20 transition-all flex flex-col justify-between"
                >
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                      src={keg.image}
                      alt={keg.title}
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-all filter brightness-[0.9]"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10 shadow-lg">
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${getStatusColor(keg.status)}`}>
                        {keg.status}
                      </span>
                    </div>

                    {/* Category Overlay tag */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md text-white border border-white/10">
                      <Tag className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-semibold tracking-wide">{keg.category}</span>
                    </div>
                  </div>

                  {/* Body textual copy */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-3.5">
                      <h4 className="text-lg font-serif font-bold text-gray-950 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                        {keg.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-sans line-clamp-3">
                        {keg.description}
                      </p>
                    </div>

                    {/* Footer stats details */}
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800/80 space-y-2">
                      <div className="flex items-center text-[11px] text-gray-600 dark:text-gray-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-500 mr-2 shrink-0" />
                        <span>{keg.date}</span>
                      </div>
                      <div className="flex items-center text-[11px] text-gray-600 dark:text-gray-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-500 mr-2 shrink-0" />
                        <span>{keg.time}</span>
                      </div>
                      <div className="flex items-center text-[11px] text-gray-600 dark:text-gray-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 mr-2 shrink-0" />
                        <span>{keg.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-sans">
                  Tidak ada agenda kegiatan yang cocok dengan kriteria filter/pencarian Anda.
                </p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Information badge */}
        <div className="mt-16 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Butuh koordinasi/pengurusan agenda komplek? Silahkan hubungi Pengurus DKM MAAR3 Bidang Sosial/Dakwah.</p>
        </div>

      </div>
    </div>
  );
}
