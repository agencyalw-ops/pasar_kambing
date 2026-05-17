import { content, EXTERNAL_LINK } from "@/content";
import { Facebook, Twitter, Mail, MessageCircle, Smartphone } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#2D5A27] text-white h-9 flex items-center justify-between px-8 text-xs">
      {/* Left: Phone */}
      <div className="flex items-center gap-2">
        <Smartphone size={14} />
        <span>{content.announcement.phone}</span>
      </div>

      {/* Center: Sign up message */}
      <div className="flex items-center gap-2">
        <span>{content.announcement.signupText}</span>
        <a
          href={EXTERNAL_LINK}
          className="underline hover:text-[#C8D48A] transition-colors"
        >
          {content.announcement.signupLink}
        </a>
      </div>

      {/* Right: Social icons */}
      <div className="flex items-center gap-2.5">
        <a href={EXTERNAL_LINK} className="hover:opacity-80 transition-opacity">
          <Facebook size={16} />
        </a>
        <a href={EXTERNAL_LINK} className="hover:opacity-80 transition-opacity">
          <Twitter size={16} />
        </a>
        <a href={EXTERNAL_LINK} className="hover:opacity-80 transition-opacity">
          <MessageCircle size={16} />
        </a>
        <a href={EXTERNAL_LINK} className="hover:opacity-80 transition-opacity">
          <MessageCircle size={16} />
        </a>
        <a href={EXTERNAL_LINK} className="hover:opacity-80 transition-opacity">
          <Mail size={16} />
        </a>
      </div>
    </div>
  );
}
