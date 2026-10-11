import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews.ts';

export const CommunityView: React.FC<{
  onOpenDiscordModal: () => void;
  onShowToast: (msg: string) => void;
}> = ({ onOpenDiscordModal, onShowToast }) => {
  const [handle, setHandle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('Cosmic Crunch');
  const [reviewsList, setReviewsList] = useState(REVIEWS);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handle.trim() || !reviewText.trim()) return;
    const cleanHandle = handle.startsWith('@') ? handle : `@${handle}`;
    const newRev = {
      id: `rev-${Date.now()}`,
      handle: cleanHandle,
      verified: true,
      avatarLetter: cleanHandle.charAt(1).toUpperCase() || '@',
      avatarBg: 'bg-[#c3f400] text-[#1c0736]',
      stars: 5,
      comment: `“${reviewText}”`,
      flavor: selectedFlavor,
      tag: 'New Community Drop',
      tagColor: 'text-[#c3f400]',
    };
    setReviewsList([newRev, ...reviewsList]);
    setHandle('');
    setReviewText('');
    onShowToast('TESTIMONIAL VERIFIED & POSTED TO CARTEL WALL!');
  };

  return (
    <div className="flex flex-col w-full px-gutter py-space-xl max-w-7xl mx-auto space-y-space-xl">
      {/* Header */}
      <div className="space-y-space-xs">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-3 py-1 rounded uppercase font-bold text-xs rotate-[-2deg]">
            🌐 52,400+ ACTIVE MEMBERS
          </span>
          <span className="font-label-code text-xs text-[#c3f400] font-bold">
            NO CORPORATE AMBASSADORS
          </span>
        </div>
        <h1 className="font-display-hero uppercase text-[#eddcff]">
          THE VIP FLAVOR <span className="text-[#c3f400]">CARTEL</span>
        </h1>
        <p className="font-body-lg text-[#c4c9ac] max-w-2xl">
          We don&apos;t pay mega-influencers millions to pretend they drink chalk. Real skateboarders, competitive gamers, track sprinters, and midnight lifters. Unfiltered truth only.
        </p>
      </div>

      {/* Community Perks Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        <div className="bg-[#281543] p-6 rounded-2xl border border-white/5 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#c3f400] text-[#1c0736] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <h3 className="font-headline-sm uppercase text-[#eddcff] text-lg">
            24H FLASH DROP RADAR
          </h3>
          <p className="font-body-sm text-xs text-[#c4c9ac]">
            Secret password-protected vault links sent via Discord &amp; SMS 2 hours before general public release.
          </p>
        </div>

        <div className="bg-[#281543] p-6 rounded-2xl border border-white/5 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#ffb3af] text-[#68000d] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined">science</span>
          </div>
          <h3 className="font-headline-sm uppercase text-[#eddcff] text-lg">
            SECRET TEST BATCH MAILERS
          </h3>
          <p className="font-body-sm text-xs text-[#c4c9ac]">
            Top active members receive unlabelled 100g sample pouches directly from our Brooklyn culinary lab.
          </p>
        </div>

        <div className="bg-[#281543] p-6 rounded-2xl border border-white/5 space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#7df4ff] text-[#00363a] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined">volunteer_activism</span>
          </div>
          <h3 className="font-headline-sm uppercase text-[#eddcff] text-lg">
            2% YOUTH IMPACT REINVESTMENT
          </h3>
          <p className="font-body-sm text-xs text-[#c4c9ac]">
            Our community votes directly on which local skate parks and urban gyms receive our quarterly funding grants.
          </p>
        </div>
      </div>

      {/* Discord Banner CTA */}
      <div className="bg-gradient-to-r from-[#24113f] to-[#33204e] p-8 rounded-2xl border border-[#c3f400] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-3 py-1 rounded text-xs font-bold uppercase inline-block">
            OFFICIAL DISCORD GUILD
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] font-bold">
            CLAIM YOUR VIP VOICE PASS
          </h2>
          <p className="font-body-md text-sm text-[#c4c9ac] max-w-xl">
            Join the voice channels while lifting. Vote on batch formulations, chat with our food scientists, and get drop alerts.
          </p>
        </div>
        <button
          onClick={onOpenDiscordModal}
          className="px-8 py-3.5 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm text-sm uppercase font-extrabold shadow-[4px_4px_0px_0px_#ffffff] hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
        >
          JOIN THE GUILD NOW
        </button>
      </div>

      {/* Post a Review & UGC Feed Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Left: UGC Feed */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-headline-md text-xl uppercase text-[#eddcff]">
              UNFILTERED COMMUNITY WALL ({reviewsList.length})
            </h3>
            <span className="font-label-code text-xs text-[#c3f400]">#PROTEINXREVIEWS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#24113f] rounded-2xl p-4 border border-white/5 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${rev.avatarBg}`}
                      >
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <span className="font-body-sm text-xs font-bold text-[#eddcff] block">
                          {rev.handle}
                        </span>
                        <span className="font-label-code text-[10px] text-[#c3f400] flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[12px]">verified</span>{' '}
                          Verified Buyer
                        </span>
                      </div>
                    </div>
                    <div className="flex text-[#c3f400]">
                      {[...Array(rev.stars)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[14px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="font-body-sm text-xs text-[#eddcff] italic leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-label-code">
                  <span className="text-[#c4c9ac]">FLAVOR: {rev.flavor}</span>
                  <span className={rev.tagColor || 'text-[#ffb3af]'}>{rev.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Submit Review Form */}
        <div className="lg:col-span-4 bg-[#281543] rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="space-y-1">
            <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-2.5 py-0.5 rounded text-xs uppercase font-bold inline-block">
              UNFILTERED DROP
            </span>
            <h3 className="font-headline-md text-xl uppercase text-[#eddcff]">
              LEAVE YOUR REVIEW
            </h3>
            <p className="font-body-sm text-xs text-[#c4c9ac]">
              Be honest. Loved the crunch? Hated the sweetness? Tell the Cartel.
            </p>
          </div>

          <form onSubmit={handleSubmitReview} className="space-y-3">
            <div>
              <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                YOUR SOCIAL HANDLE
              </label>
              <input
                type="text"
                required
                placeholder="@yourhandle"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="w-full bg-[#160231] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#eddcff] outline-none focus:ring-1 focus:ring-[#c3f400]"
              />
            </div>

            <div>
              <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                FORMULA YOU TESTED
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full bg-[#160231] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#eddcff] outline-none cursor-pointer"
              >
                <option value="Cosmic Crunch">Cosmic Crunch Bar</option>
                <option value="Matcha Glitch">Matcha Glitch Bar</option>
                <option value="Cyber Berry">Cyber Berry Clear Whey</option>
                <option value="Nuclear Brownie">Nuclear Brownie Batter</option>
                <option value="Caramel Pretzel">Caramel Pretzel Super-Bar</option>
                <option value="Yuzu Lemonade">Yuzu Lemonade Fuel</option>
              </select>
            </div>

            <div>
              <label className="font-label-code text-[11px] text-[#c4c9ac] uppercase block mb-1">
                FEEDBACK
              </label>
              <textarea
                rows={3}
                required
                placeholder="Give us the brutal honest truth on texture, flavor, and macros..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full bg-[#160231] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#eddcff] outline-none focus:ring-1 focus:ring-[#c3f400] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs font-bold rounded-full shadow-[2px_2px_0px_0px_#ffffff] hover:scale-105 transition-all cursor-pointer"
            >
              POST TO CARTEL WALL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
