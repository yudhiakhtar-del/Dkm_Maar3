import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Phone, MapPin, User, Tag, Store, Sparkles, Filter, Percent } from 'lucide-react';
import { Umkm } from '../types';

interface UmkmPanelProps {
  umkmList: Umkm[];
}

const CATEGORIES: { value: string; label: string; icon: string }[] = [
  { value: 'Semua', label: 'Semua Usaha', icon: '🏪' },
  { value: 'Kuliner', label: 'Kuliner / Makanan', icon: '🍔' },
  { value: 'Jasa', label: 'Jasa & Servis', icon: '🛠️' },
  { value: 'Fashion', label: 'Fashion / Pakaian', icon: '👕' },
  { value: 'Sembako', label: 'Sembako & Toko', icon: '🌾' },
  { value: 'Lainnya', label: 'Lain-lain', icon: '🎁' }
];

export default function UmkmPanel({ umkmList }: UmkmPanelProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Filter UMKM
  const filteredUmkm = umkmList.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWaLink = (phone: string, businessName: string) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Assalamualaikum wr. wb., saya warga Orchid Green Park tertarik dengan produk *${businessName}* yang dipromosikan di Portal Masjid MAAR 3. Apakah bisa pesan?`
    );
    return `https://wa.me/${cleanPhone}?text=${message}`;
  };

  return (
    <section id="umkm-section" className="py-20 bg-emerald-950/5 dark:bg-slate-900/40 border-y border-emerald-950/5 dark:border-slate-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            UMKM Warga Orchid Green Park
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-950 dark:text-white leading-tight">
            Papan Pemberdayaan Ekonomi Kreatif Warga
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-sans">
            Sinergi belanja dari dan untuk tetangga sendiri. Temukan beragam produk, makanan lezat, pakaian syar'i, dan jasa profesional dari jamaah & warga perumahan Orchid Green Park Sawangan Depok.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-950 rounded-2xl border border-gray-150/45 dark:border-slate-800 p-4 md:p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center gap-4 justify-between">
          
          {/* Category Filter Pills (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10 scale-105'
                      : 'bg-slate-50 hover:bg-slate-100 active:scale-95 dark:bg-slate-900 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400'
                  }`}
                  id={`filter-umkm-${cat.value.toLowerCase()}`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
            <input
              type="text"
              placeholder="Cari toko, roti, jasa pangkas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 focus:bg-white dark:bg-slate-900/50 dark:focus:bg-slate-900 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans"
              id="umkm-search-input"
            />
          </div>

        </div>

        {/* UMKM Display Grid */}
        <AnimatePresence mode="popLayout">
          {filteredUmkm.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredUmkm.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                  key={item.id}
                  className="group bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-gray-150/45 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300"
                  id={`umkm-card-${item.id}`}
                >
                  <div>
                    {/* Cover Photo */}
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                      <img
                        src={item.image || 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400'}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Category Badge & Promo Banner */}
                      <div className="absolute inset-x-0 top-0 p-3 flex flex-wrap justify-between items-start gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-bold tracking-wide shadow-md">
                          <Tag className="w-3 h-3" />
                          {item.category}
                        </span>
                        
                        {item.promo && (
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider shadow-md animate-pulse">
                            <Percent className="w-3 h-3" />
                            Promo
                          </span>
                        )}
                      </div>

                      {/* Info overlay on image bottom */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12 text-left">
                        <span className="flex items-center gap-1 text-[10px] text-amber-300 font-bold mb-0.5 tracking-wide uppercase">
                          <User className="w-3 h-3" />
                          Owner: {item.owner}
                        </span>
                        <h3 className="text-base font-serif font-black text-white leading-tight">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    {/* Specifications Body */}
                    <div className="p-4 space-y-3.5 text-left">
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed min-h-[48px] line-clamp-3">
                        {item.description}
                      </p>

                      {/* Promo Special Box */}
                      {item.promo && (
                        <div className="p-2.5 rounded-xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10 dark:border-orange-500/20 text-[11px] text-orange-600 dark:text-orange-400 font-semibold font-sans flex items-start gap-2">
                          <Percent className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{item.promo}</span>
                        </div>
                      )}

                      {/* Location address */}
                      <div className="flex items-center text-[11px] text-gray-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                        <span>{item.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Hub Call Box */}
                  <div className="p-4 pt-0">
                    <a
                      href={getWaLink(item.whatsapp, item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/10 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-200 fill-current" />
                      <span>Hubungi & Pesan</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 px-4 rounded-2xl bg-white dark:bg-slate-950 border border-gray-150/45 dark:border-slate-800 text-center"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h4 className="font-serif font-black text-lg text-gray-950 dark:text-white">
                Usaha Tidak Ditemukan
              </h4>
              <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto mt-1">
                Tidak ada UMKM warga yang cocok dengan pencarian "{searchTerm}" dan kategori "{selectedCategory}". Silakan gunakan pencarian lain.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Note and Submission Link */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-emerald-950/5 dark:border-slate-800 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-gray-950 dark:text-white flex items-center gap-1.5">
              🏪 Mau Toko / Usaha Anda Tampil Di Sini?
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed">
              Khusus jamaah Masjid MAAR 3 dan warga komplek perumahan Orchid Green Park, silakan daftarkan usaha Anda secara GRATIS melalui pengurus DKM.
            </p>
          </div>
          <a
            href="https://wa.me/6281298765432?text=Bismillah,%20saya%20warga%20OGP%20ingin%20mendaftarkan%20usaha%20saya%20di%20portal%20UMKM%20Masjid%20MAAR%203.%20Bagaimana%2520caranya?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg border border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 text-xs font-bold uppercase whitespace-nowrap cursor-pointer transition-colors"
          >
            Daftar Usaha Anda &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
