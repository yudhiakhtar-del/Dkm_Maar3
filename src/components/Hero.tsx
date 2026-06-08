import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, Clock, Compass, Users, BookOpen, Store } from 'lucide-react';

interface HeroProps {
  onTabChange: (tab: string) => void;
}

export default function Hero({ onTabChange }: HeroProps) {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen bg-emerald-950 flex items-center justify-center overflow-hidden pt-16">
      {/* Immersive Mosque Senja Background Wallpaper */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-102 filter brightness-[0.38] contrast-[1.05]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1600')` 
        }}
      />

      {/* Decorative Golden Ambient Lights & Fog Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Repeating Premium Arabesque Glowing Rotating Geometric Overlay */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] opacity-[0.06] pointer-events-none group animate-[spin_120s_linear_infinite] z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
          <path d="M50 0 L60 30 L90 20 L70 50 L100 60 L70 70 L90 90 L60 80 L50 100 L40 80 L10 90 L30 70 L0 60 L30 50 L10 20 L40 30 Z" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute left-[-15%] bottom-[-10%] w-[600px] h-[600px] opacity-[0.04] pointer-events-none animate-[spin_180s_linear_infinite] z-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
          <path d="M50 0 L60 30 L90 20 L70 50 L100 60 L70 70 L90 90 L60 80 L50 100 L40 80 L10 90 L30 70 L0 60 L30 50 L10 20 L40 30 Z" />
        </svg>
      </div>

      {/* Realistic Hanging Islamic Lanterns on side */}
      <div className="absolute top-20 right-8 md:right-20 lg:right-32 z-10 hidden sm:flex flex-col items-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-amber-400" />
        <div className="animate-bounce duration-[4000ms] text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 0a3 3 0 003 3h1a2 2 0 002-2V7h-6zm0 0a3 3 0 01-3 3H8a2 2 0 01-2-2V7h6m4 12h-8m8-3v3m-8-3v3m4-3v3m1-11v5" />
          </svg>
        </div>
      </div>

      {/* Main Container Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pt-6">
        {/* Modern luxury badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs md:text-sm text-amber-300 font-semibold tracking-wide uppercase mb-6 shadow-md backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>Selamat Datang Di Website Resmi</span>
        </motion.div>

        {/* Big Displays Title with Serif pairing */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-white font-serif font-extrabold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-md mb-3 uppercase"
        >
          <span className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent text-sm sm:text-base md:text-lg block tracking-[0.2em] font-sans font-bold text-amber-300 mb-2">
            DEWAN KEMAKMURAN MASJID (DKM)
          </span>
          <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl block leading-tight">
            MASJID MUNIROH ABDULLAH AR RUKBAN 3
          </span>
        </motion.h1>

        {/* Subtitle with gold elements */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif font-semibold text-lg sm:text-xl md:text-2xl text-amber-300 tracking-wide mb-4 drop-shadow-sm uppercase"
        >
          (MAAR 3)
        </motion.p>

        {/* Location indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="flex flex-col items-center justify-center space-y-2 text-emerald-100 dark:text-emerald-200 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto mb-10 pb-6 border-b border-white/10"
        >
          <div className="flex items-center space-x-1.5 text-center">
            <Compass className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="leading-relaxed">
              Perumahan Muslim The Orchid Green Park, RT 8/RW 8, Kelurahan Pasir Putih, Kecamatan Sawangan, Kota Depok, Jawa Barat
            </span>
          </div>
        </motion.div>

        {/* Beautiful responsive Quick-Nav Button Grid for the 6 key sections */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-2"
        >
          <p className="text-[11px] text-amber-300 font-bold uppercase tracking-widest text-center mb-5 opacity-90">
            Akses Cepat Layanan &amp; Informasi Kemaslahatan
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 justify-center">
            {/* Profil Button */}
            <button
              id="hero-quick-profil"
              onClick={() => onTabChange('profil')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <Users className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">Profil</span>
            </button>

            {/* Kajian Button */}
            <button
              id="hero-quick-kajian"
              onClick={() => onTabChange('kajian')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <BookOpen className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">Kajian</span>
            </button>

            {/* Kegiatan Button */}
            <button
              id="hero-quick-kegiatan"
              onClick={() => onTabChange('kegiatan')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <Calendar className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">Kegiatan</span>
            </button>

            {/* UMKM Button */}
            <button
              id="hero-quick-umkm"
              onClick={() => onTabChange('umkm')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <Store className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">UMKM</span>
            </button>

            {/* Donasi Button */}
            <button
              id="hero-quick-donasi"
              onClick={() => onTabChange('donasi')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <Heart className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">Donasi</span>
            </button>

            {/* Jadwal Sholat Button */}
            <button
              id="hero-quick-jadwal"
              onClick={() => onTabChange('jadwal')}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-900/40 hover:bg-amber-400 border border-emerald-500/20 hover:border-amber-400 group hover:text-emerald-950 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <Clock className="w-5 h-5 mb-2 text-amber-300 group-hover:text-emerald-950 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-950 font-sans tracking-wide">Jadwal Sholat</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Sleek down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center opacity-60">
        <span className="text-[10px] text-amber-200/80 font-sans tracking-widest uppercase mb-1">
          Scroll Down
        </span>
        <div className="w-1.5 h-6 rounded-full border border-amber-300/40 flex justify-center p-[2px]">
          <div className="w-1 h-1.5 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
