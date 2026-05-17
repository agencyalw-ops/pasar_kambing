import { content, EXTERNAL_LINK } from "@/content";
import { Facebook, Twitter, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-inter font-bold text-lg mb-4">
              {content.footer.company}
            </h3>
            <p className="font-inter text-sm text-gray-400 mb-4">
              Penyedia kambing berkualitas premium dari Wonosobo, Indonesia.
            </p>
            <div className="flex gap-3">
              <a href={EXTERNAL_LINK} className="p-2 bg-[#2D5A27] rounded-lg hover:bg-[#C8821A] transition-colors">
                <Facebook size={18} />
              </a>
              <a href={EXTERNAL_LINK} className="p-2 bg-[#2D5A27] rounded-lg hover:bg-[#C8821A] transition-colors">
                <Twitter size={18} />
              </a>
              <a href={EXTERNAL_LINK} className="p-2 bg-[#2D5A27] rounded-lg hover:bg-[#C8821A] transition-colors">
                <Instagram size={18} />
              </a>
              <a href={EXTERNAL_LINK} className="p-2 bg-[#2D5A27] rounded-lg hover:bg-[#C8821A] transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href={EXTERNAL_LINK} className="hover:text-white transition-colors">Produk</a></li>
              <li><a href={EXTERNAL_LINK} className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href={EXTERNAL_LINK} className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C8821A]" />
                {content.footer.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#C8821A]" />
                {content.footer.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C8821A]" />
                {content.footer.email}
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Newsletter</h4>
            <p className="font-inter text-sm text-gray-400 mb-4">
              Dapatkan update terbaru tentang produk kami.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm rounded-l-lg focus:outline-none"
              />
              <button className="px-4 py-2 bg-[#C8821A] hover:bg-[#A66E16] transition-colors rounded-r-lg">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Pasar Kambing Hidup. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href={EXTERNAL_LINK} className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href={EXTERNAL_LINK} className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
