import React, { useState } from 'react';

interface CertificateOfAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLot?: string;
}

export const CertificateOfAnalysisModal: React.FC<CertificateOfAnalysisModalProps> = ({
  isOpen,
  onClose,
  defaultLot = '#PX-8841',
}) => {
  const [lotCode, setLotCode] = useState(defaultLot);
  const [searchLot, setSearchLot] = useState(defaultLot);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="relative w-full max-w-2xl bg-[#1c0736] border-2 border-[#c3f400] rounded-2xl p-6 z-10 shadow-[8px_8px_0px_0px_#ffffff] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-2 py-0.5 rounded text-xs font-bold uppercase">
                HPLC AUDIT
              </span>
              <span className="font-label-code text-xs text-[#7df4ff]">THIRD-PARTY VERIFIED</span>
            </div>
            <h3 className="font-headline-lg text-2xl uppercase text-[#eddcff] mt-1">
              CERTIFICATE OF ANALYSIS
            </h3>
            <p className="font-label-code text-xs text-[#c4c9ac]">
              ISO/IEC 17025 ACCREDITED INDEPENDENT LABORATORY LEDGER
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Lot Search */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={searchLot}
            onChange={(e) => setSearchLot(e.target.value)}
            placeholder="Enter Batch/Lot # (e.g. #PX-8841)"
            className="flex-1 bg-[#160231] border border-white/20 rounded-full px-4 py-2 font-label-code text-xs text-[#eddcff] outline-none focus:ring-2 focus:ring-[#c3f400]"
          />
          <button
            onClick={() => setLotCode(searchLot)}
            className="px-5 py-2 bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs rounded-full font-bold shadow-[2px_2px_0px_0px_#ffffff]"
          >
            VERIFY LOT
          </button>
        </div>

        {/* Batch Spec Sheet */}
        <div className="bg-[#24113f] rounded-xl p-4 border border-white/5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-label-code border-b border-white/10 pb-3">
            <div>
              <span className="text-[#c4c9ac] block">BATCH CODE:</span>
              <span className="text-[#c3f400] font-bold">{lotCode}</span>
            </div>
            <div>
              <span className="text-[#c4c9ac] block">MANUFACTURE DATE:</span>
              <span className="text-[#eddcff]">OCTOBER 2026</span>
            </div>
            <div>
              <span className="text-[#c4c9ac] block">FACILITY:</span>
              <span className="text-[#eddcff]">cGMP / NSF CERTIFIED</span>
            </div>
            <div>
              <span className="text-[#c4c9ac] block">STATUS:</span>
              <span className="text-[#c3f400] font-bold">100% CLEARED</span>
            </div>
          </div>

          {/* Test Parameters */}
          <div className="space-y-2">
            <h4 className="font-headline-sm text-sm uppercase text-[#eddcff]">
              1. Macro &amp; Purity Assays
            </h4>
            <div className="space-y-1.5 font-label-code text-xs">
              <div className="flex justify-between p-2 bg-[#160231] rounded">
                <span className="text-[#eddcff]">Protein Content by Nitrogen Dumas (w/w)</span>
                <span className="text-[#c3f400] font-bold">Claim: 25.0g | Found: 25.4g (101.6%)</span>
              </div>
              <div className="flex justify-between p-2 bg-[#160231] rounded">
                <span className="text-[#eddcff]">Amino Acid Spiking Screen (Glycine, Taurine)</span>
                <span className="text-[#c3f400] font-bold">0.00% DETECTED (PASS)</span>
              </div>
              <div className="flex justify-between p-2 bg-[#160231] rounded">
                <span className="text-[#eddcff]">Free Sugar &amp; Lactose Profile</span>
                <span className="text-[#c3f400] font-bold">&lt; 0.1g / serving (PASS)</span>
              </div>
            </div>
          </div>

          {/* Heavy Metals */}
          <div className="space-y-2">
            <h4 className="font-headline-sm text-sm uppercase text-[#eddcff]">
              2. Inductively Coupled Plasma Mass Spectrometry (ICP-MS)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-label-code text-xs text-center">
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">LEAD (Pb)</div>
                <div className="text-[#c3f400] font-bold">&lt; 0.01 ppm (ND)</div>
              </div>
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">ARSENIC (As)</div>
                <div className="text-[#c3f400] font-bold">&lt; 0.01 ppm (ND)</div>
              </div>
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">CADMIUM (Cd)</div>
                <div className="text-[#c3f400] font-bold">&lt; 0.005 ppm (ND)</div>
              </div>
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">MERCURY (Hg)</div>
                <div className="text-[#c3f400] font-bold">&lt; 0.001 ppm (ND)</div>
              </div>
            </div>
          </div>

          {/* Microbiology */}
          <div className="space-y-2">
            <h4 className="font-headline-sm text-sm uppercase text-[#eddcff]">
              3. Microbial Screening
            </h4>
            <div className="grid grid-cols-3 gap-2 font-label-code text-xs text-center">
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">E. COLI</div>
                <div className="text-[#c3f400] font-bold">ABSENT / 10g</div>
              </div>
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">SALMONELLA</div>
                <div className="text-[#c3f400] font-bold">ABSENT / 25g</div>
              </div>
              <div className="p-2 bg-[#160231] rounded">
                <div className="text-[#c4c9ac]">YEAST &amp; MOLD</div>
                <div className="text-[#c3f400] font-bold">&lt; 10 CFU/g</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-label-code text-[#c4c9ac] gap-2">
          <span>SIGNATURE: Dr. Vivienne Vance, Lead Biochemist</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] rounded-full uppercase"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
