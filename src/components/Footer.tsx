import React from 'react';
import { Compass, Mail, Phone, Clock, Landmark, MessageSquare, Heart, MapPin, Facebook, Instagram, Youtube, Music } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onTabChange: (tab: string) => void;
  onAdminClick: () => void;
}

export default function Footer({ onTabChange, onAdminClick }: FooterProps) {
  const handleWAOpen = () => {
    const text = 'Bismillah, saya ingin bersilaturahim dengan Pengurus DKM Masjid MAAR 3 Orchid Green Park Sawangan.';
    const url = `https://api.whatsapp.com/send?phone=6288297793000&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer,noopener');
  };

  return (
    <footer id="website-footer" className="bg-emerald-950 text-white pt-16 pb-8 border-t border-emerald-800/20 relative overflow-hidden text-left selection:bg-amber-300 selection:text-emerald-950">
      {/* Background glowing ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Footer Grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-emerald-900">
          
          {/* Identity & Address Block */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <Logo size={58} className="filter drop-shadow-md shrink-0 duration-300 hover:rotate-6 transition-transform" />
              <div>
                <h4 className="font-serif font-bold text-lg md:text-xl text-white tracking-wide leading-tight">
                  MASJID MAAR 3
                </h4>
                <p className="text-[10px] text-emerald-300 font-sans tracking-wide">
                  Muniroh Abdullah Ar-Rukban 3
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/70 font-sans leading-relaxed">
              Pusat dakwah, pembinaan ukhuwah islamiyah, pendidikan Al-Quran generasi bangsa, serta pengabdian sosial terpadu warga Orchid Green Park.
            </p>

            <div className="space-y-3 pt-2 text-xs text-emerald-100/80">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mr- 2.5 mt-0.5" />
                <p className="font-sans leading-relaxed">
                  Perumahan Orchid Green Park, Kel. Pasir Putih, Kec. Sawangan, Kota Depok, Jawa Barat 16519
                </p>
              </div>
              <div className="flex items-center">
                <Compass className="w-4 h-4 text-emerald-405 shrink-0 mr-2.5 text-amber-400" />
                <span className="font-mono">Kecamatan Sawangan, Depok</span>
              </div>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="font-serif font-bold text-sm text-amber-400 tracking-wider uppercase border-b border-emerald-900 pb-2">
              Menu Cepat
            </h5>
            <div className="flex flex-col space-y-2.5 text-xs text-emerald-200Hover">
              {['Beranda', 'Profil', 'Jadwal Sholat', 'Kajian', 'Kegiatan', 'Galeri', 'Artikel', 'Donasi'].map((item) => {
                const id = item.toLowerCase().replace(' ', '');
                return (
                  <button
                    key={item}
                    onClick={() => onTabChange(id === 'jadwalsholat' ? 'jadwal' : id)}
                    className="text-left text-emerald-100/70 hover:text-amber-300 hover:translate-x-1 duration-300 transition-all font-medium"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Integrations and Contact Channels */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-serif font-bold text-sm text-amber-400 tracking-wider uppercase border-b border-emerald-900 pb-2">
              Hubungi & Medsos
            </h5>
            
            <div className="space-y-3 pt-1">
              <button
                id="footer-action-whatsapp"
                onClick={handleWAOpen}
                className="w-full flex items-center space-x-2.5 p-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-800/30 text-xs font-bold transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Hubungi via WhatsApp</span>
              </button>
              
              <div className="space-y-2 text-xs text-emerald-100/75 pl-1.5 font-sans">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-mono">0882-9779-3000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-mono">dkm@masjidmaar3.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Sekretariat Buka: 08:00 - 17:00</span>
                </div>
              </div>

              {/* Social Media Circular Buttons */}
              <div className="pt-4 border-t border-emerald-900/50 space-y-2.5">
                <p className="text-[10px] text-emerald-300 uppercase tracking-widest font-extrabold font-sans">
                  Ikuti Media Sosial DKM
                </p>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="https://www.facebook.com/masjidogp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#1877F2] hover:text-white text-blue-400 flex items-center justify-center transition-all duration-300 shadow shadow-emerald-950/20 hover:scale-110 cursor-pointer border border-emerald-800/30"
                    title="Facebook Masjid Muniroh Ar-Rukban 3"
                  >
                    <Facebook className="w-4 h-4 fill-current stroke-0 text-[#1877F2] hover:text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/masjid_ogp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white text-[#E1306C] flex items-center justify-center transition-all duration-300 shadow shadow-emerald-950/20 hover:scale-110 cursor-pointer border border-emerald-800/30 group"
                    title="Instagram @masjid_ogp"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C] group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@masjid.ogp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-black text-[#00f2fe] flex items-center justify-center transition-all duration-300 shadow shadow-emerald-950/20 hover:scale-110 cursor-pointer border border-emerald-800/30 group"
                    title="TikTok @masjid.ogp"
                  >
                    <Music className="w-4 h-4 text-[#00f2fe] group-hover:text-white transition-colors duration-300 drop-shadow-[1px_1px_rgba(254,9,121,0.8)]" />
                  </a>
                  <a
                    href="https://youtube.com/@masjidogp1617"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#FF0000] hover:text-white text-[#FF0000] flex items-center justify-center transition-all duration-300 shadow shadow-emerald-950/20 hover:scale-110 cursor-pointer border border-emerald-800/30 group"
                    title="YouTube @masjidogp1617"
                  >
                    <Youtube className="w-4 h-4 fill-current stroke-0 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Google Map embed of Depok/Orchid Green Park */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-serif font-bold text-sm text-amber-400 tracking-wider uppercase border-b border-emerald-900 pb-2">
              Google Maps OGP
            </h5>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-emerald-800 bg-slate-800 shadow">
              <iframe
                title="Peta Lokasi Masjid MAAR3"
                src="https://maps.google.com/maps?q=Orchid%20Green%20Park,%20Pasir%20Putih,%20Sawangan,%20Depok&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-none filter contrast-[1.1] saturate-[0.9] brightness-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] text-emerald-300 italic">
              * Terletak di pusat perumahan Orchid Green Park, Sawangan, Depok.
            </p>
          </div>

        </div>

        {/* Corporate line and copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-100/50 gap-4">
          <div>
            <p className="font-sans">
              Hak Cipta © 2026 <strong>DKM MAAR3</strong>. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="text-[10px] text-emerald-200/30 mt-0.5">
              Website DKM Masjid Muniroh Abdullah Ar-Rukban 3 • Orchid Green Park Sawangan Depok.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              id="admin-footer-trigger"
              onClick={onAdminClick}
              className="hover:text-amber-300 font-extrabold uppercase tracking-widest text-[9px] hover:underline"
            >
              Admin Workspace Login
            </button>
            <span>•</span>
            <span className="flex items-center text-[10px] text-amber-400 font-bold">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 mr-1 animate-pulse" />
              <span>Kemakmuran Umat</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
