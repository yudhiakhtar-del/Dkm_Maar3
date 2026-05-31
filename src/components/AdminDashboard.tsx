import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, LogOut, Plus, Trash2, Edit3, Folder, HelpCircle, Check, AlertCircle, FileText, Calendar, Camera, BookOpen, Heart, Users, ShieldAlert } from 'lucide-react';
import { Artikel, Kegiatan, Kajian, Galeri, DonasiCampaign, Pengurus } from '../types';

interface AdminDashboardProps {
  // Lists
  artikelList: Artikel[];
  kegiatanList: Kegiatan[];
  kajianList: Kajian[];
  galeriList: Galeri[];
  campaignList: DonasiCampaign[];
  pengurusList: Pengurus[];

  // Setters/CRUD callbacks
  setArtikelList: React.Dispatch<React.SetStateAction<Artikel[]>>;
  setKegiatanList: React.Dispatch<React.SetStateAction<Kegiatan[]>>;
  setKajianList: React.Dispatch<React.SetStateAction<Kajian[]>>;
  setGaleriList: React.Dispatch<React.SetStateAction<Galeri[]>>;
  setCampaignList: React.Dispatch<React.SetStateAction<DonasiCampaign[]>>;
  setPengurusList: React.Dispatch<React.SetStateAction<Pengurus[]>>;

  // Close callback
  onClose: () => void;
}

export default function AdminDashboard({
  artikelList,
  kegiatanList,
  kajianList,
  galeriList,
  campaignList,
  pengurusList,
  setArtikelList,
  setKegiatanList,
  setKajianList,
  setGaleriList,
  setCampaignList,
  setPengurusList,
  onClose,
}: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessCode, setAccessCode] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<string>('artikel');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Form states for creating new elements
  const [newArtikel, setNewArtikel] = useState<Partial<Artikel>>({
    title: '',
    category: 'Fiqih',
    snippet: '',
    content: '',
    author: '',
    readTime: '5 Menit Baca',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400',
  });

  const [newKegiatan, setNewKegiatan] = useState<Partial<Kegiatan>>({
    title: '',
    category: 'Kajian Islam',
    description: '',
    date: '',
    time: '',
    location: '',
    status: 'Mendatang',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
  });

  const [newKajian, setNewKajian] = useState<Partial<Kajian>>({
    ustadz: '',
    theme: '',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-1',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300',
  });

  const [newGaleri, setNewGaleri] = useState<Partial<Galeri>>({
    title: '',
    category: 'Kajian Islam',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=400',
  });

  const [newPengurus, setNewPengurus] = useState<Partial<Pengurus>>({
    name: '',
    role: '',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
  });

  const [newCampaign, setNewCampaign] = useState<Partial<DonasiCampaign>>({
    title: '',
    description: '',
    raised: 0,
    target: 100000000,
    category: 'Pembangunan',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600',
  });

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock pass code
    if (accessCode.toLowerCase() === 'dkmmaar3' || accessCode.toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Kode akses salah! Gunakan "dkmmaar3" atau "admin" untuk demo.');
    }
  };

  // CRUD Handlers
  const deleteItem = (id: string, type: 'artikel' | 'kegiatan' | 'kajian' | 'galeri' | 'campaign' | 'pengurus') => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data ini?')) return;
    
    if (type === 'artikel') {
      setArtikelList(artikelList.filter((x) => x.id !== id));
    } else if (type === 'kegiatan') {
      setKegiatanList(kegiatanList.filter((x) => x.id !== id));
    } else if (type === 'kajian') {
      setKajianList(kajianList.filter((x) => x.id !== id));
    } else if (type === 'galeri') {
      setGaleriList(galeriList.filter((x) => x.id !== id));
    } else if (type === 'campaign') {
      setCampaignList(campaignList.filter((x) => x.id !== id));
    } else if (type === 'pengurus') {
      setPengurusList(pengurusList.filter((x) => x.id !== id));
    }
  };

  const handleAddArtikel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtikel.title || !newArtikel.content || !newArtikel.author) {
      alert('Mohon isi judul, penulis, dan isi materi kajian.');
      return;
    }
    const created: Artikel = {
      id: `art-${Date.now()}`,
      title: newArtikel.title,
      category: newArtikel.category as Artikel['category'],
      snippet: newArtikel.snippet || newArtikel.content.substring(0, 100) + '...',
      content: newArtikel.content,
      author: newArtikel.author,
      date: new Date().toISOString().split('T')[0],
      readTime: newArtikel.readTime || '5 Menit',
      image: newArtikel.image || 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400',
      likes: 0,
    };
    setArtikelList([created, ...artikelList]);
    setNewArtikel({
      title: '',
      category: 'Fiqih',
      snippet: '',
      content: '',
      author: '',
      readTime: '5 Menit Baca',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400',
    });
    alert('Artikel Berhasil Dipublish!');
  };

  const handleAddKegiatan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKegiatan.title || !newKegiatan.date || !newKegiatan.location) {
      alert('Mohon isi seluruh data bertanda bintang.');
      return;
    }
    const created: Kegiatan = {
      id: `keg-${Date.now()}`,
      title: newKegiatan.title,
      category: newKegiatan.category as Kegiatan['category'],
      description: newKegiatan.description || 'Agenda kemaslahatan warga komplek Orchid Green Park Depok.',
      date: newKegiatan.date,
      time: newKegiatan.time || '16:00 WIB',
      location: newKegiatan.location,
      status: newKegiatan.status as Kegiatan['status'],
      image: newKegiatan.image || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
    };
    setKegiatanList([created, ...kegiatanList]);
    setNewKegiatan({
      title: '',
      category: 'Kajian Islam',
      description: '',
      date: '',
      time: '',
      location: '',
      status: 'Mendatang',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
    });
    alert('Kegiatan Baru Ditambahkan!');
  };

  const handleAddKajian = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKajian.ustadz || !newKajian.theme) {
      alert('Mohon isi narasumber Ustadz dan tema kajian.');
      return;
    }
    const created: Kajian = {
      id: `kajian-${Date.now()}`,
      ustadz: newKajian.ustadz,
      theme: newKajian.theme,
      time: newKajian.time || 'Ba’da Subuh',
      location: newKajian.location || 'Masjid MAAR 3',
      day: newKajian.day || 'Pekan Ke-1',
      image: newKajian.image || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300',
    };
    setKajianList([...kajianList, created]);
    setNewKajian({
      ustadz: '',
      theme: '',
      time: 'Ba’da Subuh s/d Selesai',
      location: 'Masjid MAAR 3',
      day: 'Pekan Ke-1',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300',
    });
    alert('Jadwal Khutbah/Kajian Ditambahkan!');
  };

  const handleAddGaleri = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGaleri.title) {
      alert('Mohon isi judul dokumentasi.');
      return;
    }
    const created: Galeri = {
      id: `gal-${Date.now()}`,
      title: newGaleri.title,
      category: newGaleri.category as Galeri['category'],
      image: newGaleri.image || 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=400',
      date: new Date().toISOString().split('T')[0],
    };
    setGaleriList([created, ...galeriList]);
    setNewGaleri({
      title: '',
      category: 'Kajian Islam',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=400',
    });
    alert('Dokumentasi Foto Ditambahkan!');
  };

  const handleAddPengurus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPengurus.name || !newPengurus.role) {
      alert('Mohon isi nama lengkap dan jabatan.');
      return;
    }
    const created: Pengurus = {
      id: `peng-${Date.now()}`,
      name: newPengurus.name,
      role: newPengurus.role,
      image: newPengurus.image || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    };
    setPengurusList([...pengurusList, created]);
    setNewPengurus({
      name: '',
      role: '',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    });
    alert('Pengurus DKM Ditambahkan!');
  };

  const handleAddCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCampaign.title || !newCampaign.target) {
      alert('Mohon lengkapi data pembangunan.');
      return;
    }
    const created: DonasiCampaign = {
      id: `don-${Date.now()}`,
      title: newCampaign.title,
      description: newCampaign.description || 'Program kemaslahatan sarana fisik lingkungan masjid.',
      raised: 0,
      target: Number(newCampaign.target) || 50000000,
      donorsCount: 0,
      image: newCampaign.image || 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600',
      category: newCampaign.category as DonasiCampaign['category'],
    };
    setCampaignList([...campaignList, created]);
    setNewCampaign({
      title: '',
      description: '',
      raised: 0,
      target: 100000000,
      category: 'Pembangunan',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600',
    });
    alert('Program Donasi Baru Diluncurkan!');
  };

  const handleBypassLogin = () => {
    setAccessCode('dkmmaar3');
    setIsAuthenticated(true);
  };

  return (
    <div id="admin-dashboard-root" className="min-h-[85vh] py-16 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECURE MOCK LOGIN COMPONENT */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white dark:bg-slate-950 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-2xl relative overflow-hidden text-left">
            {/* Top graphic details */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 to-amber-400" />
            
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-amber-400/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-950 dark:text-white">
                DKM MAAR3 Admin Panel
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Gunakan sandi keamanan "dkmmaar3" atau klik tombol bypass untuk masuk.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-1">
                  Akses Kode Pengurus
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔑
                  </span>
                  <input
                    type="password"
                    required
                    placeholder="Sandi Admin"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs text-rose-500 bg-rose-50 dark:bg-rose-950/20 rounded-lg flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                id="submit-login-admin"
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Masuk Sistem
              </button>

              <button
                id="bypass-login"
                type="button"
                onClick={handleBypassLogin}
                className="w-full py-2.5 rounded-xl border border-dashed border-emerald-600/30 text-emerald-600 dark:text-amber-400 hover:bg-emerald-500/5 text-xs font-semibold"
              >
                Akses Langsung Demo (Bypass)
              </button>
            </form>
          </div>
        ) : (
          /* FULLY REGISTERED CRUD DASHBOARD PANEL */
          <div className="bg-white dark:bg-slate-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row min-h-[550px] text-left">
            
            {/* Left Sidebar Menu */}
            <div className="w-full md:w-64 bg-emerald-950 text-white p-5 border-r border-slate-800 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider bg-amber-400 text-emerald-950 px-2.5 py-1 rounded inline-block font-sans">
                    MAAR3 Workspace
                  </h3>
                  <p className="text-[10px] text-emerald-300 mt-1">Sistem Kelola Masjid v2.6</p>
                </div>

                <div className="space-y-1">
                  {[
                    { id: 'artikel', label: 'Artikel & Tulisan', icon: FileText },
                    { id: 'kegiatan', label: 'Kegiatan Masjid', icon: Calendar },
                    { id: 'kajian', label: 'Kajian Ustadz', icon: BookOpen },
                    { id: 'galeri', label: 'Galeri Foto', icon: Camera },
                    { id: 'donasi', label: 'Donasi Program', icon: Heart },
                    { id: 'pengurus', label: 'Pengurus DKM', icon: Users },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveSubTab(tab.id)}
                        className={`w-full flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                          activeSubTab === tab.id
                            ? 'bg-amber-400 text-emerald-950'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom sidebar actions */}
              <div className="pt-6 border-t border-emerald-800/50 flex justify-between items-center">
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase font-sans">Authorized</p>
                  <p className="text-xs font-semibold">Administrator</p>
                </div>
                
                <button
                  id="admin-logout-btn"
                  onClick={() => setIsAuthenticated(false)}
                  className="p-1.5 rounded-lg hover:bg-rose-600 hover:text-white text-gray-400 transition-colors"
                  title="Keluar"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Main Content Workspace */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[85vh]">
              
              {/* Header Title path */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] uppercase tracking-wide bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded text-gray-400 font-sans font-bold">
                    Super Admin Console / {activeSubTab.toUpperCase()}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-gray-950 dark:text-white mt-1">
                    Kelola {activeSubTab === 'artikel' ? 'Artikel Islami' : activeSubTab === 'kajian' ? 'Jadwal Kajian Ustadz' : activeSubTab === 'galeri' ? 'Dokumentasi Galeri' : activeSubTab === 'donasi' ? 'Target Donasi & Infaq' : activeSubTab === 'kegiatan' ? 'Kegiatan & Sosial' : 'Struktur Pengurus DKM'}
                  </h3>
                </div>

                <button
                  id="close-admin-panel"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-850 hover:bg-emerald-100 text-xs font-bold uppercase transition-colors"
                >
                  Tutup Admin Panel
                </button>
              </div>

              {/* DYNAMIC VIEW FOR SUBTABS ELEMENT BUILDERS */}
              
              {/* SUBTAB ARTIKEL */}
              {activeSubTab === 'artikel' && (
                <div className="space-y-6">
                  {/* Create New Form */}
                  <form onSubmit={handleAddArtikel} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Publish Artikel Baru</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Judul Artikel *</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Menjaga Integritas Tauhid..."
                          value={newArtikel.title}
                          onChange={(e) => setNewArtikel({ ...newArtikel, title: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Kategori *</label>
                        <select
                          value={newArtikel.category}
                          onChange={(e) => setNewArtikel({ ...newArtikel, category: e.target.value as any })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Aqidah">Aqidah</option>
                          <option value="Fiqih">Fiqih</option>
                          <option value="Akhlak">Akhlak</option>
                          <option value="Keluarga Islami">Keluarga Islami</option>
                          <option value="Dakwah">Dakwah</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Penulis / Ustadz *</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Ustadz Amir Hamzah Lc,MHI"
                          value={newArtikel.author}
                          onChange={(e) => setNewArtikel({ ...newArtikel, author: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Gambar URL (Unsplash/Default)</label>
                        <input
                          type="text"
                          placeholder="https://..."
                          value={newArtikel.image}
                          onChange={(e) => setNewArtikel({ ...newArtikel, image: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Durasi Baca</label>
                        <input
                          type="text"
                          value={newArtikel.readTime}
                          onChange={(e) => setNewArtikel({ ...newArtikel, readTime: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Isi Materi Kitab *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Ketik materi untaian naskah syiar secara lengkap..."
                        value={newArtikel.content}
                        onChange={(e) => setNewArtikel({ ...newArtikel, content: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white font-sans whitespace-pre-wrap"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Publish Artikel Live
                    </button>
                  </form>

                  {/* List Database */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400">Database Artikel ({artikelList.length})</h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                          <tr>
                            <th className="p-3">Judul</th>
                            <th className="p-3">Kategori</th>
                            <th className="p-3">Penulis</th>
                            <th className="p-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {artikelList.map((art) => (
                            <tr key={art.id} className="border-b border-gray-100 dark:border-slate-800/40 bg-white dark:bg-transparent">
                              <td className="p-3 font-semibold text-gray-900 dark:text-white line-clamp-1">{art.title}</td>
                              <td className="p-3">{art.category}</td>
                              <td className="p-3">{art.author}</td>
                              <td className="p-3">
                                <button
                                  id={`delete-btn-${art.id}`}
                                  onClick={() => deleteItem(art.id, 'artikel')}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-150 text-rose-500 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBTAB KEGIATAN */}
              {activeSubTab === 'kegiatan' && (
                <div className="space-y-6">
                  {/* Create New Form */}
                  <form onSubmit={handleAddKegiatan} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Registrasi Kegiatan Baru</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Judul Kegiatan *</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Kerja Bakti OGP Sya'ban..."
                          value={newKegiatan.title}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, title: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Kategori Agenda *</label>
                        <select
                          value={newKegiatan.category}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, category: e.target.value as any })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Kajian Islam">Kajian Islam</option>
                          <option value="Bank Sampah">Bank Sampah</option>
                          <option value="Posyandu">Posyandu</option>
                          <option value="SiJum">SiJum</option>
                          <option value="Ogp Farm">Ogp Farm</option>
                          <option value="Ogp Sport">Ogp Sport</option>
                          <option value="KBMA">KBMA</option>
                          <option value="Ramadhan">Ramadhan</option>
                          <option value="Idul Adha">Idul Adha</option>
                          <option value="Kerja Bakti">Kerja Bakti</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Tanggal Pelaksanaan *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ahad, 14 Juni 2026 atau 1 Muharram"
                          value={newKegiatan.date}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, date: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Waktu / Jam</label>
                        <input
                          type="text"
                          placeholder="08:00 - selesai WIB"
                          value={newKegiatan.time}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, time: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Lokasi / Tempat *</label>
                        <input
                          type="text"
                          required
                          placeholder="Masjid MAAR3 / Lapangan OGP"
                          value={newKegiatan.location}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, location: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Status Agenda</label>
                        <select
                          value={newKegiatan.status}
                          onChange={(e) => setNewKegiatan({ ...newKegiatan, status: e.target.value as any })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Mendatang">Mendatang</option>
                          <option value="Sedang Berjalan">Sedang Berjalan</option>
                          <option value="Selesai">Selesai</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Deskripsi Singkat</label>
                      <textarea
                        rows={2}
                        placeholder="Rincian pelaksanaan dkum dan info panitia..."
                        value={newKegiatan.description}
                        onChange={(e) => setNewKegiatan({ ...newKegiatan, description: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Daftarkan Kegiatan Live
                    </button>
                  </form>

                  {/* List Database */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400 font-sans">Database Kegiatan ({kegiatanList.length})</h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                          <tr>
                            <th className="p-3">Nama Agenda</th>
                            <th className="p-3">Kategori</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {kegiatanList.map((keg) => (
                            <tr key={keg.id} className="border-b border-gray-100 dark:border-slate-800/40 bg-white dark:bg-transparent">
                              <td className="p-3 font-semibold text-gray-900 dark:text-white">{keg.title}</td>
                              <td className="p-3">{keg.category}</td>
                              <td className="p-3">
                                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold">
                                  {keg.status}
                                </span>
                              </td>
                              <td className="p-3">
                                <button
                                  id={`delete-btn-keg-${keg.id}`}
                                  onClick={() => deleteItem(keg.id, 'kegiatan')}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-150 text-rose-500 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBTAB KAJIAN LIST */}
              {activeSubTab === 'kajian' && (
                <div className="space-y-6">
                  {/* Create New Form */}
                  <form onSubmit={handleAddKajian} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Amunisi Jadwal Kajian Rutin</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Nama Lengkap Ustadz *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ustadz Dr. Ronny Hidayat Lc, MA"
                          value={newKajian.ustadz}
                          onChange={(e) => setNewKajian({ ...newKajian, ustadz: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Materi Kitab / Tema *</label>
                        <input
                          type="text"
                          required
                          placeholder="Kitab Adabul Mufrod / Tafsir"
                          value={newKajian.theme}
                          onChange={(e) => setNewKajian({ ...newKajian, theme: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Siklus Pekanan (Day indicator) *</label>
                        <select
                          value={newKajian.day}
                          onChange={(e) => setNewKajian({ ...newKajian, day: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Pekan Ke-1">Pekan Ke-1</option>
                          <option value="Pekan Ke-2">Pekan Ke-2</option>
                          <option value="Pekan Ke-3">Pekan Ke-3</option>
                          <option value="Pekan Ke-4">Pekan Ke-4</option>
                          <option value="Pekan Ke-5">Pekan Ke-5</option>
                          <option value="Setiap Sabtu">Setiap Sabtu</option>
                          <option value="Setiap Ahad">Setiap Ahad</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Waktu Kajian</label>
                        <input
                          type="text"
                          value={newKajian.time}
                          onChange={(e) => setNewKajian({ ...newKajian, time: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Lokasi Majelis</label>
                        <input
                          type="text"
                          value={newKajian.location}
                          onChange={(e) => setNewKajian({ ...newKajian, location: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Daftarkan Jadwal Kajian
                    </button>
                  </form>

                  {/* List Database */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400">Database Jadwal Kajian ({kajianList.length})</h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                          <tr>
                            <th className="p-3">Ustadz</th>
                            <th className="p-3">Tema Kajian</th>
                            <th className="p-3">Hari & Siklus</th>
                            <th className="p-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {kajianList.map((kaj) => (
                            <tr key={kaj.id} className="border-b border-gray-100 dark:border-slate-800/40 bg-white dark:bg-transparent">
                              <td className="p-3 font-semibold text-gray-900 dark:text-white">{kaj.ustadz}</td>
                              <td className="p-3">{kaj.theme}</td>
                              <td className="p-3">{kaj.day} • {kaj.time}</td>
                              <td className="p-3">
                                <button
                                  id={`delete-btn-kaj-${kaj.id}`}
                                  onClick={() => deleteItem(kaj.id, 'kajian')}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-150 text-rose-500 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* OTHER TABS SIMULATED SIMILARLY */}
              {activeSubTab === 'galeri' && (
                <div className="space-y-6">
                  {/* Create New Form */}
                  <form onSubmit={handleAddGaleri} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Simpan Foto Dokumentasi</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Judul Dokumentasi (Caption) *</label>
                        <input
                          type="text"
                          required
                          placeholder="Foto Bersama Warga OGP..."
                          value={newGaleri.title}
                          onChange={(e) => setNewGaleri({ ...newGaleri, title: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Kategori Kegiatan *</label>
                        <select
                          value={newGaleri.category}
                          onChange={(e) => setNewGaleri({ ...newGaleri, category: e.target.value as any })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Kajian Islam">Kajian Islam</option>
                          <option value="Bank Sampah">Bank Sampah</option>
                          <option value="Posyandu">Posyandu</option>
                          <option value="SiJum">SiJum</option>
                          <option value="Ogp Farm">Ogp Farm</option>
                          <option value="Ogp Sport">Ogp Sport</option>
                          <option value="KBMA">KBMA</option>
                          <option value="Ramadhan">Ramadhan</option>
                          <option value="Idul Adha">Idul Adha</option>
                          <option value="Kerja Bakti">Kerja Bakti</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Foto URL (Unsplash/Direct link)</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={newGaleri.image}
                        onChange={(e) => setNewGaleri({ ...newGaleri, image: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Unggah Dokumentasi Live
                    </button>
                  </form>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400">Database Galeri ({galeriList.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {galeriList.map((ph) => (
                        <div key={ph.id} className="relative group rounded-xl overflow-hidden border border-gray-100 bg-slate-100">
                          <img src={ph.image} className="w-full h-32 object-cover" />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                            <button
                              id={`delete-btn-photo-${ph.id}`}
                              onClick={() => deleteItem(ph.id, 'galeri')}
                              className="p-1.5 bg-rose-600 text-white rounded-lg"
                              title="Hapus"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="p-2 bg-white dark:bg-slate-950 text-left text-[9px] line-clamp-1">
                            {ph.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* DONASI PROGRAMS CONTROL CAMPIGN UPDATE */}
              {activeSubTab === 'donasi' && (
                <div className="space-y-6">
                  {/* Create New Campaign Form */}
                  <form onSubmit={handleAddCampaign} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Luncurkan Kampanye Donasi Baru</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Nama Penyaluran / Pembangunan *</label>
                        <input
                          type="text"
                          required
                          placeholder="Pengadaan AC Baru Aula Utama..."
                          value={newCampaign.title}
                          onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Kategori Penyaluran *</label>
                        <select
                          value={newCampaign.category}
                          onChange={(e) => setNewCampaign({ ...newCampaign, category: e.target.value as any })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        >
                          <option value="Pembangunan">Pembangunan</option>
                          <option value="Operasional">Operasional</option>
                          <option value="Sedekah Jumat">Sedekah Jumat</option>
                          <option value="Program Sosial">Program Sosial</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 font-sans">Target Dana (Rupiah) *</label>
                        <input
                          type="number"
                          required
                          value={newCampaign.target}
                          onChange={(e) => setNewCampaign({ ...newCampaign, target: Number(e.target.value) })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white font-semibold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Banner Ilustrasi URL</label>
                        <input
                          type="text"
                          value={newCampaign.image}
                          onChange={(e) => setNewCampaign({ ...newCampaign, image: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Deskripsi Alokasi Penyaluran</label>
                      <textarea
                        rows={2}
                        placeholder="Uraikan peruntukan anggaran jariyah secar transparan..."
                        value={newCampaign.description}
                        onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Mulai Program Donasi Live
                    </button>
                  </form>

                  {/* List Database */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400">Database Program Donasi ({campaignList.length})</h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                          <tr>
                            <th className="p-3">Program</th>
                            <th className="p-3">Target</th>
                            <th className="p-3">Terkumpul</th>
                            <th className="p-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {campaignList.map((cp) => (
                            <tr key={cp.id} className="border-b border-gray-100 dark:border-slate-800/40 bg-white dark:bg-transparent animate-pulse-once">
                              <td className="p-3 font-semibold text-gray-900 dark:text-white">{cp.title}</td>
                              <td className="p-3 font-mono">Rp {cp.target.toLocaleString()}</td>
                              <td className="p-3 font-mono text-emerald-700 dark:text-emerald-400 font-bold">Rp {cp.raised.toLocaleString()}</td>
                              <td className="p-3">
                                <button
                                  id={`delete-btn-campaign-${cp.id}`}
                                  onClick={() => deleteItem(cp.id, 'campaign')}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-150 text-rose-500 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBTAB DKM PENGURUS MEMBERS */}
              {activeSubTab === 'pengurus' && (
                <div className="space-y-6">
                  {/* Create New Form */}
                  <form onSubmit={handleAddPengurus} className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-gray-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-amber-400">Registrasi Pengurus Baru</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400">Nama Lengkap Pengurus *</label>
                        <input
                          type="text"
                          required
                          placeholder="Bapak Heriadi Setiawan, S.T."
                          value={newPengurus.name}
                          onChange={(e) => setNewPengurus({ ...newPengurus, name: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400">Jabatan DKM *</label>
                        <input
                          type="text"
                          required
                          placeholder="Pembina Dakwah / Sie Perlengkapan"
                          value={newPengurus.role}
                          onChange={(e) => setNewPengurus({ ...newPengurus, role: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Avatar URL (Atau Initial default)</label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={newPengurus.image}
                        onChange={(e) => setNewPengurus({ ...newPengurus, image: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase hover:bg-emerald-500"
                    >
                      Daftarkan Pengurus DKM
                    </button>
                  </form>

                  {/* List Database */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-400">Database Pengurus ({pengurusList.length})</h4>
                    <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                          <tr>
                            <th className="p-3">Nama</th>
                            <th className="p-3">Jabatan</th>
                            <th className="p-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pengurusList.map((pg) => (
                            <tr key={pg.id} className="border-b border-gray-100 dark:border-slate-800/40 bg-white dark:bg-transparent">
                              <td className="p-3 font-semibold text-gray-900 dark:text-white">{pg.name}</td>
                              <td className="p-3 text-amber-600 dark:text-amber-400 font-bold">{pg.role}</td>
                              <td className="p-3">
                                <button
                                  id={`delete-btn-pengurus-${pg.id}`}
                                  onClick={() => deleteItem(pg.id, 'pengurus')}
                                  className="p-1.5 bg-rose-50 hover:bg-rose-150 text-rose-500 rounded-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
