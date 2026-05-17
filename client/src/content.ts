/**
 * Centralized Content Configuration
 * All copy (H1, Subtitles, Button Text) and URLs are managed here
 * All external links and CTA buttons point to https://alwgen.com
 */

export const EXTERNAL_LINK = "https://alwgen.com";

export const content = {
  // Navigation
  nav: {
    logo: "Pasar Kambing Hidup",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Katalog", href: "/katalog" },
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Hubungi", href: "/hubungi" },
    ],
  },

  // Top Announcement Bar
  announcement: {
    phone: "+62 274-123-456",
    signupText: "Daftar dan dapatkan diskon 20% untuk pembelian pertama Anda.",
    signupLink: "Daftar sekarang",
  },

  // Hero Section
  hero: {
    title: "Pasar Kambing Hidup Wonosobo",
    subtitle: "Kambing berkualitas premium dari pegunungan Wonosobo, Indonesia",
    cta: "Pesan Sekarang",
    ctaLink: EXTERNAL_LINK,
  },

  // Product Categories Section
  categories: {
    title: "Jenis-Jenis Kambing",
    subtitle: "Pilihan kambing berkualitas tinggi untuk kebutuhan Anda",
    items: [
      {
        name: "Kambing Etawa",
        description: "Kambing perah berkualitas tinggi dengan produktivitas susu maksimal",
        image: "/manus-storage/goat-etawa_196dfb3b.png",
        href: "/katalog?type=etawa",
      },
      {
        name: "Kambing Jawa",
        description: "Kambing daging dengan pertumbuhan cepat dan daging berkualitas",
        image: "/manus-storage/goat-jawa_92340cce.png",
        href: "/katalog?type=jawa",
      },
      {
        name: "Kambing Kacang",
        description: "Kambing lokal yang tahan terhadap iklim tropis Indonesia",
        image: "/manus-storage/goat-kacang_1e254f2e.png",
        href: "/katalog?type=kacang",
      },
    ],
  },

  // Product Catalog
  products: [
    {
      id: 1,
      name: "Kambing Etawa Premium",
      type: "etawa",
      category: "Perah",
      price: 5000000,
      originalPrice: 6000000,
      rating: 4.8,
      reviews: 245,
      image: "/manus-storage/goat-etawa_196dfb3b.png",
      badge: "50% off",
      inStock: true,
      description:
        "Kambing Etawa berkualitas premium dengan produktivitas susu tinggi. Dipilih khusus dari peternakan terbaik di Wonosobo dengan kesehatan terjamin.",
      features: [
        "Kesehatan terjamin dengan sertifikat veteriner",
        "Produktivitas susu hingga 3 liter per hari",
        "Umur 2-3 tahun, siap berproduksi",
        "Pengiriman aman ke seluruh Indonesia",
      ],
    },
    {
      id: 2,
      name: "Kambing Etawa Standar",
      type: "etawa",
      category: "Perah",
      price: 4000000,
      originalPrice: 5000000,
      rating: 4.6,
      reviews: 189,
      image: "/manus-storage/goat-etawa_196dfb3b.png",
      badge: "20% off",
      inStock: true,
      description: "Kambing Etawa dengan kualitas standar, cocok untuk pemula.",
      features: [
        "Kesehatan terjamin",
        "Produktivitas susu 2-2.5 liter per hari",
        "Umur 1.5-2 tahun",
        "Harga terjangkau",
      ],
    },
    {
      id: 3,
      name: "Kambing Jawa Daging",
      type: "jawa",
      category: "Daging",
      price: 3500000,
      originalPrice: 4500000,
      rating: 4.7,
      reviews: 156,
      image: "/manus-storage/goat-jawa_92340cce.png",
      badge: "22% off",
      inStock: true,
      description: "Kambing Jawa berkualitas untuk produksi daging optimal.",
      features: [
        "Pertumbuhan cepat",
        "Daging berkualitas premium",
        "Umur 1-2 tahun",
        "Ideal untuk penggemukan",
      ],
    },
    {
      id: 4,
      name: "Kambing Jawa Breeding",
      type: "jawa",
      category: "Daging",
      price: 4500000,
      originalPrice: 5500000,
      rating: 4.9,
      reviews: 203,
      image: "/manus-storage/goat-jawa_92340cce.png",
      badge: "18% off",
      inStock: true,
      description: "Kambing Jawa untuk breeding dengan genetik unggul.",
      features: [
        "Genetik unggul",
        "Cocok untuk breeding",
        "Umur 2-3 tahun",
        "Produktif dan sehat",
      ],
    },
    {
      id: 5,
      name: "Kambing Kacang Lokal",
      type: "kacang",
      category: "Lokal",
      price: 2500000,
      originalPrice: 3000000,
      rating: 4.5,
      reviews: 124,
      image: "/manus-storage/goat-kacang_1e254f2e.png",
      badge: "17% off",
      inStock: true,
      description: "Kambing Kacang lokal yang tahan iklim tropis.",
      features: [
        "Tahan iklim tropis",
        "Mudah dirawat",
        "Umur 1-2 tahun",
        "Harga ekonomis",
      ],
    },
    {
      id: 6,
      name: "Kambing Kacang Premium",
      type: "kacang",
      category: "Lokal",
      price: 3200000,
      originalPrice: 4000000,
      rating: 4.6,
      reviews: 98,
      image: "/manus-storage/goat-kacang_1e254f2e.png",
      badge: "20% off",
      inStock: true,
      description: "Kambing Kacang pilihan dengan kualitas terbaik.",
      features: [
        "Pilihan premium",
        "Kesehatan terjamin",
        "Umur 2-3 tahun",
        "Produktif",
      ],
    },
    {
      id: 7,
      name: "Kambing Etawa Breeding",
      type: "etawa",
      category: "Perah",
      price: 6000000,
      originalPrice: 7500000,
      rating: 4.9,
      reviews: 267,
      image: "/manus-storage/goat-etawa_196dfb3b.png",
      badge: "20% off",
      inStock: true,
      description: "Kambing Etawa khusus untuk breeding dengan performa terbaik.",
      features: [
        "Genetik terbaik",
        "Performa reproduksi optimal",
        "Umur 2-4 tahun",
        "Sangat produktif",
      ],
    },
    {
      id: 8,
      name: "Kambing Jawa Muda",
      type: "jawa",
      category: "Daging",
      price: 2800000,
      originalPrice: 3500000,
      rating: 4.4,
      reviews: 87,
      image: "/manus-storage/goat-jawa_92340cce.png",
      badge: "20% off",
      inStock: true,
      description: "Kambing Jawa muda untuk penggemukan cepat.",
      features: [
        "Usia muda",
        "Pertumbuhan cepat",
        "Umur 6-12 bulan",
        "Potensial tinggi",
      ],
    },
    {
      id: 9,
      name: "Kambing Kacang Breeding",
      type: "kacang",
      category: "Lokal",
      price: 3800000,
      originalPrice: 4800000,
      rating: 4.7,
      reviews: 142,
      image: "/manus-storage/goat-kacang_1e254f2e.png",
      badge: "21% off",
      inStock: true,
      description: "Kambing Kacang untuk breeding dengan kualitas unggul.",
      features: [
        "Breeding quality",
        "Genetik unggul",
        "Umur 2-3 tahun",
        "Sangat produktif",
      ],
    },
  ],

  // About Section
  about: {
    title: "Tentang Kami",
    description:
      "Pasar Kambing Hidup adalah penyedia kambing berkualitas premium dari Wonosobo, Indonesia. Kami berkomitmen untuk memberikan kambing sehat dan produktif dengan layanan terbaik.",
    features: [
      "Kambing pilihan berkualitas premium",
      "Kesehatan dan kesejahteraan hewan terjamin",
      "Pengiriman aman ke seluruh Indonesia",
      "Konsultasi gratis untuk pemeliharaan",
    ],
  },

  // Trust Badges
  trustBadges: [
    {
      title: "Pengiriman Gratis",
      description: "Pengiriman gratis untuk pembelian di atas Rp 5.000.000",
      icon: "box",
    },
    {
      title: "Pembayaran Fleksibel",
      description: "Berbagai opsi pembayaran aman dan terpercaya",
      icon: "credit-card",
    },
    {
      title: "Dukungan 24/7",
      description: "Tim support siap membantu Anda setiap hari",
      icon: "headset",
    },
  ],

  // Footer
  footer: {
    company: "Pasar Kambing Hidup",
    address: "Wonosobo, Jawa Tengah, Indonesia",
    phone: "+62 274-123-456",
    email: "info@pasarkambinghidup.com",
    socialLinks: {
      facebook: EXTERNAL_LINK,
      twitter: EXTERNAL_LINK,
      instagram: EXTERNAL_LINK,
      whatsapp: EXTERNAL_LINK,
    },
  },

  // Social Icons
  socialIcons: [
    { name: "Facebook", icon: "facebook" },
    { name: "Twitter", icon: "twitter" },
    { name: "Instagram", icon: "instagram" },
    { name: "WhatsApp", icon: "message-circle" },
  ],
};
