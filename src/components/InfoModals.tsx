import React from 'react';

interface DiscordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const DiscordModal: React.FC<DiscordModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-md bg-[#1c0736] border-2 border-[#7df4ff] rounded-2xl p-6 z-10 shadow-[8px_8px_0px_0px_#ffffff] text-center space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        <div className="w-16 h-16 rounded-full bg-[#7df4ff]/20 text-[#7df4ff] flex items-center justify-center mx-auto border border-[#7df4ff]">
          <span className="material-symbols-outlined text-3xl">forum</span>
        </div>

        <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-3 py-0.5 rounded text-xs font-bold uppercase inline-block">
          VIP ACCESS KEY
        </span>

        <h3 className="font-headline-md text-2xl uppercase text-[#eddcff]">
          PROTEIN X CARTEL DISCORD
        </h3>

        <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
          You are connecting to the high-security Discord server. Over 52,400 active lifters, gamers, and athletes discussing batch recipes and early drop codes.
        </p>

        <div className="p-3 bg-[#160231] rounded-xl border border-white/5 font-label-code text-xs text-[#c3f400]">
          ONE-TIME INVITE CODE: PX-DROP-42-VIP
        </div>

        <button
          onClick={() => {
            onShowToast('DISCORD INVITE COPIED TO CLIPBOARD! REDIRECTING...');
            onClose();
          }}
          className="w-full py-3 bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs font-bold rounded-full shadow-[3px_3px_0px_0px_#ffffff] hover:scale-105 transition-all cursor-pointer"
        >
          ENTER DISCORD GUILD
        </button>
      </div>
    </div>
  );
};

export const AccountModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-md bg-[#1c0736] border-2 border-[#c3f400] rounded-2xl p-6 z-10 shadow-[8px_8px_0px_0px_#ffffff] space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#c3f400] text-[#1c0736] flex items-center justify-center font-bold text-lg">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <span className="font-label-code text-xs text-[#c3f400] font-bold block">
              STATUS: FOUNDING CARTEL
            </span>
            <h3 className="font-headline-sm text-lg text-[#eddcff] uppercase">
              ARJUN PRASAD
            </h3>
            <span className="font-label-code text-[11px] text-[#c4c9ac]">
              arjun.prasad008@gmail.com
            </span>
          </div>
        </div>

        <div className="bg-[#24113f] p-4 rounded-xl border border-white/5 space-y-2 font-label-code text-xs">
          <div className="flex justify-between">
            <span className="text-[#c4c9ac]">MEMBER SINCE:</span>
            <span className="text-[#eddcff]">OCTOBER 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#c4c9ac]">VAULT RESTOCK PASS:</span>
            <span className="text-[#c3f400] font-bold">ACTIVE (LEVEL 3)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#c4c9ac]">TIER SAVINGS MULTIPLIER:</span>
            <span className="text-[#ffb3af] font-bold">20% STACKED</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-label-code text-xs text-[#c4c9ac] uppercase">RECENT DROPS CLAIMED</div>
          <div className="p-3 bg-[#160231] rounded-lg text-xs font-label-code flex justify-between items-center text-[#eddcff]">
            <span>1x Cosmic Crunch Box (12ct)</span>
            <span className="text-[#c3f400]">DELIVERED</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] font-headline-sm uppercase text-xs rounded-full cursor-pointer"
        >
          Close Account Profile
        </button>
      </div>
    </div>
  );
};

export const LegalModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />
      <div className="relative w-full max-w-lg bg-[#1c0736] border border-white/20 rounded-2xl p-6 z-10 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <h3 className="font-headline-md text-xl uppercase text-[#eddcff]">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed whitespace-pre-line">
          {content}
        </div>
        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs font-bold rounded-full"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};
