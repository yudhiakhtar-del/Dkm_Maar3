export interface Artikel {
  id: string;
  title: string;
  category: 'Aqidah' | 'Fiqih' | 'Akhlak' | 'Keluarga Islami' | 'Dakwah';
  snippet: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  likes: number;
}

export interface Kegiatan {
  id: string;
  title: string;
  category:
    | 'Kajian Islam'
    | 'Bank Sampah'
    | 'Posyandu'
    | 'SiJum'
    | 'Ogp Farm'
    | 'Ogp Sport'
    | 'KBMA'
    | 'Ramadhan'
    | 'Idul Adha'
    | 'Kerja Bakti';
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  status: 'Mendatang' | 'Sedang Berjalan' | 'Selesai';
}

export interface Kajian {
  id: string;
  ustadz: string;
  theme: string;
  time: string;
  location: string;
  day: string;
  image: string;
}

export interface Galeri {
  id: string;
  title: string;
  category: Kegiatan['category'];
  image: string;
  date: string;
}

export interface DonasiCampaign {
  id: string;
  title: string;
  description: string;
  raised: number;
  target: number;
  donorsCount: number;
  image: string;
  category: 'Pembangunan' | 'Operasional' | 'Sedekah Jumat' | 'Program Sosial';
}

export interface Donor {
  id: string;
  campaignId: string;
  name: string;
  amount: number;
  date: string;
  message?: string;
}

export interface Pengurus {
  id: string;
  name: string;
  role: string;
  image: string;
  phone?: string;
}

export interface SholatTime {
  name: string;
  time: string;
  countdown?: string;
  passed?: boolean;
}
