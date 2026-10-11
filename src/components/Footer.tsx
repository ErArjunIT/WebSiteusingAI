import React, { useState } from 'react';

interface FooterProps {
  onOpenCOA: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCOA, onOpenTerms, onOpenPrivacy }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#160231] mt-space-xl border-t border-white/5">
      {/* Dynamic Animated Marquee Ribbon */}
      <div className="w-full overflow-hidden bg-[#c3f400] text-[#1c0736] py-2 font-headline-sm uppercase text-sm md:text-base font-extrabold select-none shadow-[0_4px_20px_rgba(195,244,0,0.2)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-space-lg">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">bolt</span>30G WHEY ISOLATE
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">verified</span>ZERO CHALK GUARANTEED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">science</span>THIRD-PARTY TESTED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">local_fire_department</span>5.5G BCAAS
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>NO SPAM JUST GAINS
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">bolt</span>30G WHEY ISOLATE
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">verified</span>ZERO CHALK GUARANTEED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">science</span>THIRD-PARTY TESTED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">local_fire_department</span>5.5G BCAAS
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>NO SPAM JUST GAINS
          </span>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="w-full px-gutter py-space-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-lg uppercase tracking-tight text-[#eddcff]">
                PROTEIN<span className="text-[#c3f400]">X</span>
              </span>
              <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-3 py-1 rounded rotate-[3deg] shadow-[2px_2px_0px_0px_#c3f400] uppercase font-bold">
                LAB TESTED AF
              </span>
            </div>
            <p className="font-body-lg text-[#c4c9ac] max-w-md">
              Re-engineering high-octane performance fuel for digital natives who reject chalky boomer shakes. Science-backed, chaos-fueled, taste-maxxed.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
              <a
                className="px-4 py-1.5 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] font-label-code uppercase transition-all flex items-center gap-1.5 hover:scale-105"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">tag</span>tiktok
              </a>
              <a
                className="px-4 py-1.5 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] font-label-code uppercase transition-all flex items-center gap-1.5 hover:scale-105"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>instagram
              </a>
              <a
                className="px-4 py-1.5 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] font-label-code uppercase transition-all flex items-center gap-1.5 hover:scale-105"
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">forum</span>discord
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-[#24113f] rounded-2xl p-space-lg shadow-[4px_4px_0px_0px_#3e2b5a] border border-white/5">
            <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-xs">
              <span className="font-headline-md text-[#eddcff]">
                JOIN THE VIP FLAVOR CARTEL
              </span>
              <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-3 py-1 rounded rotate-[-2deg] font-bold">
                DROP RADAR
              </span>
            </div>
            <p className="font-body-md text-[#c4c9ac] mb-space-md">
              No spam, just gains &amp; memes. Secret drops, priority restocks, and chaotic unhinged flavor tests straight to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-[#160231] border border-[#c3f400] text-[#c3f400] p-4 rounded-full flex items-center justify-center gap-2 font-headline-sm uppercase text-sm animate-pulse">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>YOU’RE ON THE RADAR. WATCH YOUR INBOX FOR DROP #043.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-space-sm">
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#160231] border border-white/10 rounded-full px-space-lg py-space-md font-body-sm text-[#eddcff] placeholder:text-[#c4c9ac]/50 focus:outline-none focus:ring-2 focus:ring-[#c3f400]"
                  placeholder="drop your burner or best email..."
                  type="email"
                />
                <button
                  className="bg-[#c3f400] text-[#1c0736] font-headline-sm text-sm uppercase px-space-lg py-space-md rounded-full shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap cursor-pointer font-bold"
                  type="submit"
                >
                  CLAIM ACCESS
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-space-xl mt-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md text-[#c4c9ac] font-label-code text-xs border-t border-white/5">
          <p>© 2025 PROTEIN X CORP. ALL RIGHTS RESERVED. ZERO CHALK. PURE DISRUPTION.</p>
          <div className="flex items-center gap-space-md">
            <button
              onClick={onOpenTerms}
              className="hover:text-[#eddcff] transition-colors cursor-pointer uppercase"
            >
              TERMS OF SUPPLY
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#eddcff] transition-colors cursor-pointer uppercase"
            >
              PRIVACY PROTOCOL
            </button>
            <button
              onClick={onOpenCOA}
              className="hover:text-[#c3f400] text-[#7df4ff] transition-colors cursor-pointer uppercase underline"
            >
              CERTIFICATE OF ANALYSIS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
