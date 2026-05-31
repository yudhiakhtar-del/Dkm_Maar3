import { Artikel, Kegiatan, Kajian, Galeri, DonasiCampaign, Pengurus } from '../types';
// @ts-ignore
import fiqihSunnahFlyer from '../assets/images/fiqih_sunnah_flyer_1780238395487.png';
// @ts-ignore
import sirahNabawiyahFlyer from '../assets/images/sirah_nabawiyah_flyer_1780239260088.png';
// @ts-ignore
import bankSampahOrchidFlyer from '../assets/images/bank_sampah_orchid_flyer_1780239512122.png';

// Unsplash premium Islamic & related aesthetics images
export const IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1600', // Beautiful mosque lanterns senja ambience
  masjidFront: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800', // Elegant mosque arch dome
  masjidInterior: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=800', // Light filtering through Islamic design
  kajianIslam: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800', // Lecture atmosphere
  sedekahJumat: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=800', // Giving / Helping
  greenOrchid: bankSampahOrchidFlyer, // Beautiful generated Bank Sampah flyer
  communityClean: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800', // Cleaning/community work
  kidsQuran: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&q=80&w=800', // Kids learning
  sportOrchid: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800', // Sports/running
  posyandu: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800', // Health care checkup
  charityOrphan: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', // Warm social
  eidUmat: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800', // Eid prayer/celebration
};

export const INITIAL_KAJIAN: Kajian[] = [
  {
    id: 'kajian-1',
    ustadz: 'Ustadz Amir Hamzah Lc, MHI',
    theme: 'Fiqih Sunnah',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-1',
    image: fiqihSunnahFlyer
  },
  {
    id: 'kajian-2',
    ustadz: 'Ustadz Hariyanto Lc, MHI',
    theme: 'Shiroh Nabawiyah',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-2',
    image: sirahNabawiyahFlyer
  },
  {
    id: 'kajian-3',
    ustadz: 'Ustadz Idrus Abidin Lc, MA',
    theme: 'Tadabbur & Tafsir Al Quran',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-3',
    image: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'kajian-4',
    ustadz: 'Ustadz Zainal Abidin Lc',
    theme: 'Tazkiyatun Nafs',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-4',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'kajian-5',
    ustadz: 'Ustadz Dr. Ronny Hidayat Lc, MA',
    theme: 'Kitab Adabul Mufrod',
    time: 'Ba’da Subuh s/d Selesai',
    location: 'Masjid MAAR 3',
    day: 'Pekan Ke-5',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=300'
  }
];

export const INITIAL_KEGIATAN: Kegiatan[] = [
  {
    id: 'keg-1',
    title: 'Kajian Rutin Ba’da Subuh Akhir Pekan',
    category: 'Kajian Islam',
    description: 'Siri kajian kitab mendalam bersama asatidzah berkompeten bertempat di ruang utama Masjid MAAR 3.',
    date: 'Setiap Sabtu & Ahad',
    time: '04:45 - 06:15 WIB',
    location: 'Masjid MAAR 3, OGP',
    image: IMAGES.kajianIslam,
    status: 'Sedang Berjalan'
  },
  {
    id: 'keg-2',
    title: 'SiJum Berkah & Makan Bersama Selepas Jumat',
    category: 'SiJum',
    description: 'Pembagian hidangan makan siang selepas Sholat Jumat untuk jamaah dan dhuafa di sekitar Orchid Park.',
    date: 'Setiap Hari Jumat',
    time: '12:30 WIB - Selesai',
    location: 'Halaman Masjid MAAR 3',
    image: IMAGES.sedekahJumat,
    status: 'Sedang Berjalan'
  },
  {
    id: 'keg-3',
    title: 'Bank Sampah OGP: Pilah Sampah Peduli Bumi',
    category: 'Bank Sampah',
    description: 'Program pengumpulan dan pemilahan sampah anorganik warga untuk didaur ulang secara produktif dan berkah.',
    date: 'Setiap Pekan Ke-2 & Ke-4',
    time: '08:00 - 10:30 WIB',
    location: 'Samping Balai Warga OGP',
    image: IMAGES.greenOrchid,
    status: 'Mendatang'
  },
  {
    id: 'keg-4',
    title: 'Posyandu OGP: Pelayanan Kesehatan Tumbuh Kembang Lansia & Balita',
    category: 'Posyandu',
    description: 'Pemeriksaan kesehatan gratis, imunisasi balita, serta penyuluhan kesehatan lansia bekerjasama dengan Puskesmas Sawangan.',
    date: 'Setiap Kamis Pekan Ke-3',
    time: '09:00 - 12:00 WIB',
    location: 'Saung Serbaguna OGP',
    image: IMAGES.posyandu,
    status: 'Mendatang'
  },
  {
    id: 'keg-5',
    title: 'Ogp Sport: Archery & Badminton Club',
    category: 'Ogp Sport',
    description: 'Olahraga sunnah memanah dan latihan badminton bersama warga sebagai ajang silaturahim pemuda dan bapak-bapak.',
    date: 'Setiap Ahad Sore',
    time: '15:45 - 17:45 WIB',
    location: 'Lapangan OGP Sport Center',
    image: IMAGES.sportOrchid,
    status: 'Sedang Berjalan'
  },
  {
    id: 'keg-6',
    title: 'KBMA: Kelompok Belajar Mengajar Al Quran MAAR 3',
    category: 'KBMA',
    description: 'Pengajaran dasar tahsin, tajwid, dan hafalan juz amma bagi anak-anak usia TK hingga SMP di Perumahan Orchid Green Park.',
    date: 'Senin s/d Kamis',
    time: '16:00 - 17:30 WIB',
    location: 'Raudhah Masjid MAAR 3',
    image: IMAGES.kidsQuran,
    status: 'Sedang Berjalan'
  },
  {
    id: 'keg-7',
    title: 'Gema Takbir & Semarak Ramadhan Karim',
    category: 'Ramadhan',
    description: 'Rangkaian kegiatan buka puasa bersama, nuzulul quran, pesantren kilat, tarawih khusyuk, dan iktikaf sepuluh hari terakhir.',
    date: '1 Ramadhan s/d Syawal',
    time: '24 Jam Penuh Berkah',
    location: 'Masjid MAAR 3 & Kawasan OGP',
    image: IMAGES.eidUmat,
    status: 'Selesai'
  },
  {
    id: 'keg-8',
    title: 'Program Qurban Berkah & Tebar Manfaat Idul Adha',
    category: 'Idul Adha',
    description: 'Penerimaan, penyembelihan, dan penyaluran daging hewan qurban Masjid MAAR3 secara sehat dan bersih bagi warga Sawangan.',
    date: '10 Dzulhijjah 1447 H',
    time: '07:30 WIB - Selesai',
    location: 'Area Pemotongan Masjid MAAR 3',
    image: 'https://images.unsplash.com/photo-1511113508197-eaec157a9f73?auto=format&fit=crop&q=80&w=800',
    status: 'Mendatang'
  },
  {
    id: 'keg-9',
    title: 'Ogp Farm: Ketahanan Pangan Warga & Hidroponik Lestari',
    category: 'Ogp Farm',
    description: 'Pelatihan pembuatan sistem hidroponik, penyemaian benih sayuran, dan perawatan kebun tani bersama warga di lingkungan perumahan.',
    date: 'Setiap Sabtu Sore',
    time: '16:00 WIB - Selesai',
    location: 'Kebun Vertikal Hijau OGP',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800',
    status: 'Sedang Berjalan'
  },
  {
    id: 'keg-10',
    title: 'Kerja Bakti Akbar Kawasan Lingkungan Orchid Green Park',
    category: 'Kerja Bakti',
    description: 'Gotong royong membersihkan area dalam, kubah masjid, taman, serta selokan sekitar komplek demi kenyamanan dan kesehatan bersama.',
    date: 'Setiap Hari Libur Nasional / Kondisional',
    time: '07:00 WIB - Selesai',
    location: 'Seluruh Wilayah OGP & Masjid',
    image: IMAGES.communityClean,
    status: 'Selesai'
  }
];

export const INITIAL_ARTIKEL: Artikel[] = [
  {
    id: 'art-1',
    title: 'Mengokohkan Aqidah Islam di Era Digital yang Serba Cepat',
    category: 'Aqidah',
    snippet: 'Bagaimana menjaga integritas keimanan dan menjauhkan keraguan di tengah derasnya arus informasi media sosial modern.',
    content: `Kehidupan di era modern menyajikan tantangan yang unik bagi keimanan seorang Muslim. Informasi bergulir tanpa batas, membuka ruang bagi berbagai pemikiran yang sekilas logis namun bisa mengikis kemurnian tauhid jika tidak difilter dengan baik.

Rasulullah SAW bersabda, "Segeralah beramal sebelum datangnya fitnah-fitnah yang seperti potongan malam yang gelapgulita. Di pagi hari seseorang dalam keadaan mukmin dan di sore harinya menjadi kafir." (HR. Muslim).

Langkah kokoh membentengi Aqidah di era modern:
1. Menuntut Ilmu Syar'i yang Bersumber dari Kitabullah dan Sunnah Melalui Guru berkompeten.
2. Memperbanyak Doa Keteguhan Iman (Ya Muqollibal Qulub Tsabbit Qolbi 'Ala Dienik).
3. Memilih Komunitas Bergaul yang Saling Mengingatkan dalam Ibadah.
4. Membatasi Konsumsi Konten yang Menyebarkan Syubhat atau Keraguan Agama.

Mari luangkan waktu menghadiri rukun kajian di Masjid MAAR 3 bersama para asatidzah demi menyegarkan kembali sumpah iman kita setiap pekan.`,
    author: 'Ustadz Idrus Abidin Lc, MA',
    date: '2026-05-28',
    readTime: '5 Menit Baca',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=400',
    likes: 42
  },
  {
    id: 'art-2',
    title: 'Panduan Praktis Thaharah & Sifat Sholat Nabi Muhammad SAW',
    category: 'Fiqih',
    snippet: 'Mengulas hukum thaharah dan meluruskan gerakan-gerakan sholat agar selaras dengan tuntunan syari’at yang shahih.',
    content: `Sholat adalah tiang agama dan amalan yang pertama kali dihisab pada Hari Kiamat. Agar diterima di sisi Allah SWT, sholat wajib memenuhi dua syarat mutlak: ikhlas karena Allah dan mutaba'ah (mengikuti tuntunan) Rasulullah SAW.

Nabi SAW bersabda, "Sholatlah kalian sebagaimana kalian melihat aku sholat." (HR. Bukhari).

Beberapa poin penyempurna Sholat kita:
1. Thaharah Sempurna: Berwudhu dengan membasuh anggota wudhu secara merata tanpa tergesa-gesa.
2. Thuma'ninah di Setiap Posisi: Tidak terburu-buru ruku' dan sujud hingga tulang kembali lurus mapan.
3. Posisi Tangan Saat Sedekap: Meletakkan tangan kanan di atas punggung tangan kiri pada dada/perut bagian atas.
4. Pandangan Fokus ke Sajadah: Menundukkan pandangan dan menjaga ketundukan jiwa dari distrasi.

Melalui Kajian Pekan ke-1 bersama Ustadz Amir Hamzah Lc, MHI, pembahasan kitab Fiqih Sunnah dikupas mendalam guna membersihkan amalan ibadah kita dari kekeliruan.`,
    author: 'Ustadz Amir Hamzah Lc, MHI',
    date: '2026-05-24',
    readTime: '7 Menit Baca',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=400',
    likes: 56
  },
  {
    id: 'art-3',
    title: 'Adab Bertetangga dalam Islam: Menghidupkan Harmoni Kehidupan',
    category: 'Akhlak',
    snippet: 'Indahnya tuntunan Islam dalam membangun rukun warga yang damai, bersih, aman, dan saling menghormati.',
    content: `Masjid di tengah perumahan Orchid Green Park bukan sekadar tempat ibadah ritual, namun pusat rekayasa sosial islami yang menularkan harmoni tetangga.

Rasulullah SAW mengajarkan begitu tingginya nilai tetangga:
"Barangsiapa yang beriman kepada Allah dan Hari Akhir, maka hendaklah dia memuliakan tetangganya." (HR. Bukhari & Muslim).

Aplikasi Adab Bertetangga Modern:
1. Menjaga Kebersihan Bersama: Berpartisipasi aktif dalam memilah sampah di program Bank Sampah Orchid dan kerja bakti lingkungan.
2. Tidak Mengganggu Kenyamanan: Mengatur volume suara kendaraan, parkir mobil yang tertata rapi tanpa menutup akses jalan, dan bertegur sapa ramah.
3. Saling Berbagi: Melalui program Sedekah Jumat atau saling mengirim makanan ringan di akhir pekan.
4. Menjenguk yang Sakit: Memperhatikan tetangga yang sedang dirundung kesulitan atau sakit, serta mendoakan kebaikan.

Mari bersama tumbuhkan karakter mulia rukun warga di OGP, selaras dengan indahnya uswah khuluqiah Rasulullah SAW.`,
    author: 'Ustadz Zainal Abidin Lc',
    date: '2026-05-18',
    readTime: '4 Menit Baca',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=400',
    likes: 67
  },
  {
    id: 'art-4',
    title: 'Mendidik Generasi Qurani yang Cerdas dan Berakhlaq Mulia',
    category: 'Keluarga Islami',
    snippet: 'Langkah strategis keluarga muslim di Orchid Green Park dalam mengimbangi paparan gadget dengan bimbingan rohani anak.',
    content: `Anak adalah amanah agung yang kelak akan dimintai pertanggungjawaban oleh Allah SWT. Mengasuh mereka di era gempuran gawai membutuhkan sinergitas solid antara rumah (orang tua) dan masjid.

Rasulullah SAW bersabda: "Setiap kalian adalah pemimpin dan setiap kalian akan ditanya tentang kepemimpinannya..." (HR. Bukhari).

Bagaimana melahirkan anak bermental Quran?
- Alokasi Waktu Gadget-Free di rumah, terutama saat Maghrib s/d Isya.
- Dekatkan dengan Masjid: Daftarkan mereka ke TPQ DKM MAAR 3 agar mendapatkan lingkungan pergaulan yang shalih.
- Teladan dari Ayah & Ibu: Anak adalah peniru ulung, hadirkan rutinitas mengaji bapak-ibu agar ditiru alami.

Komitmen DKM MAAR3 untuk memfasilitasi program TPQ dan Kelompok Belajar Mengajar Al Quran didasari keinginan luhur melahirkan generasi shalih pilar bangsa.`,
    author: 'Ustadz Hariyanto Lc, MHI',
    date: '2026-05-12',
    readTime: '6 Menit Baca',
    image: 'https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&fit=crop&q=80&w=400',
    likes: 89
  }
];

export const INITIAL_DONASI: DonasiCampaign[] = [
  {
    id: 'don-1',
    title: 'Pembangunan Kubah & Renovasi Menara Masjid MAAR 3',
    description: 'Penyempurnaan infrastruktur kubah luar, struktur kedap bocor, dan menara adzan yang kokoh nan estetik demi keagungan syiar dawah.',
    raised: 285500000,
    target: 500000000,
    donorsCount: 342,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600',
    category: 'Pembangunan'
  },
  {
    id: 'don-2',
    title: 'Dana Operasional Bulanan & Sosial Keagamaan Masjid',
    description: 'Menopang pembiayaan listrik AC, honorarium asatidzah, kebersihan harian masjid, air wudhu, gas, dan penyediaan sajadah wangi.',
    raised: 32400000,
    target: 50000000,
    donorsCount: 154,
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=600',
    category: 'Operasional'
  },
  {
    id: 'don-3',
    title: 'Sedekah Jumat Berkah: Pembagian Makanan Saji',
    description: 'Donasi khusus pekanan untuk penyediaan ratusan bungkus nasi berkah bergizi sehat bagi jamaah usai Jumatan.',
    raised: 18700000,
    target: 20000000,
    donorsCount: 221,
    image: IMAGES.sedekahJumat,
    category: 'Sedekah Jumat'
  },
  {
    id: 'don-4',
    title: 'Program Santunan Dhuafa & Pendidikan Anak Yatim OGP',
    description: 'Biaya beasiswa sekolah berkala bagi adik-adik yatim di sekitar Sawangan Depok, serta bantuan pangan pokok lansia prasejahtera.',
    raised: 45000000,
    target: 60000000,
    donorsCount: 98,
    image: IMAGES.charityOrphan,
    category: 'Program Sosial'
  }
];

export const INITIAL_PENGURUS: Pengurus[] = [
  {
    id: 'peng-1',
    name: 'Bapak H. Yudhi Akhtar',
    role: 'Ketua Umum DKM MAAR3',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-2',
    name: 'Bapak Dr. Ir. Gunawan M.T.',
    role: 'Wakil Ketua DKM',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-3',
    name: 'Bapak Rudi Setiawan, S.E.',
    role: 'Sekretaris Jenderal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-4',
    name: 'Bapak Haji Ahmad Fauzi, Ak.',
    role: 'Bendahara Keuangan',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-5',
    name: 'Ustadz Amir Hamzah Lc, MHI',
    role: 'Bidang Pembinaan Dakwah & Kajian',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-6',
    name: 'Bapak Ir. Nanang Sunandar',
    role: 'Ketua Bidang Sosial & Pengabdian Masyarakat',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-7',
    name: 'Ibu Hajjah Siti Rahmah, S.Pd.I.',
    role: 'Koordinator TPQ & Pendidikan Anak',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-8',
    name: 'Bapak Hendra Wijaya, S.T.',
    role: 'Koordinator Bank Sampah & Lingkungan',
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-9',
    name: 'Bapak Dr. Dedi Kurniawan',
    role: 'Koordinator Kesehatan & Posyandu',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-10',
    name: 'Bapak Ahmad Syarifuddin',
    role: 'Koordinator Kebun Hidroponik OGP Farm',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-11',
    name: 'Bapak Rian Hidayat, S.Kom.',
    role: 'Koordinator Kepemudaan & OGP Sport',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'peng-12',
    name: 'Bapak Ir. Hermawan Syahputra',
    role: 'Koordinator Perlengkapan & Sarana Masjid',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=300'
  }
];

export const INITIAL_GALERI: Galeri[] = [
  { id: 'gal-1', title: 'Suasana Khidmat Sholat Tarawih Perdana', category: 'Kajian Islam', image: IMAGES.masjidInterior, date: '2026-03-10' },
  { id: 'gal-2', title: 'Keseruan Belajar Selesai di TPQ MAAR3', category: 'KBMA', image: IMAGES.kidsQuran, date: '2026-04-12' },
  { id: 'gal-3', title: 'Distribusi Paket Makanan SiJum Berkah', category: 'SiJum', image: IMAGES.sedekahJumat, date: '2026-05-15' },
  { id: 'gal-4', title: 'Panen Hidroponik Sayur Segar Warga OGP', category: 'Ogp Farm', image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800', date: '2026-05-20' },
  { id: 'gal-5', title: 'Gotong Royong Ibu-ibu Orchid Menimbang Sampah anorganik', category: 'Bank Sampah', image: IMAGES.greenOrchid, date: '2026-05-22' },
  { id: 'gal-6', title: 'Pemeriksaan Kesehatan Tensi Lansia Orchid', category: 'Posyandu', image: IMAGES.posyandu, date: '2026-05-24' },
  { id: 'gal-7', title: 'Turnamen Badminton Persahabatan Orchid Cup', category: 'Ogp Sport', image: IMAGES.sportOrchid, date: '2026-05-25' },
  { id: 'gal-8', title: 'Sujud Syukur & Takbir Semarak Ramadhan', category: 'Ramadhan', image: IMAGES.eidUmat, date: '2026-05-01' }
];
