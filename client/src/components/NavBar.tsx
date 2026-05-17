import { content } from "@/content";
import { Search, Heart, ShoppingCart, User, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-16 bg-white border-b border-[#E8E4DF] flex items-center justify-between px-8 transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Leaf size={24} className="text-[#2D5A27]" />
        <span className="font-inter font-bold text-lg text-[#1A1A1A]">
          {content.nav.logo}
        </span>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden lg:flex gap-7">
        {content.nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-inter font-normal text-sm text-[#1A1A1A] hover:text-[#2D5A27] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Search size={20} className="text-[#1A1A1A]" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Heart size={20} className="text-[#1A1A1A]" />
        </button>
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCart size={20} className="text-[#1A1A1A]" />
          </button>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-[#2D5A27] text-white text-xs rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <User size={20} className="text-[#1A1A1A]" />
        </button>
      </div>
    </nav>
  );
}
