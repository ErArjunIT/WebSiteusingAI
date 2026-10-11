import React, { useState } from 'react';
import { PRODUCTS } from '../data/products.ts';

export const NutritionFactsView: React.FC<{ onOpenCOA: () => void }> = ({ onOpenCOA }) => {
  const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  return (
    <div className="flex flex-col w-full px-gutter py-space-xl max-w-7xl mx-auto space-y-space-xl">
      {/* Header */}
      <div className="space-y-space-xs">
        <div className="flex items-center gap-space-sm flex-wrap">
          <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-3 py-1 rounded uppercase font-bold text-xs rotate-[-1deg]">
            🔬 100% TRANSPARENCY PROTOCOL
          </span>
          <span className="font-label-code text-xs text-[#7df4ff] font-bold">
            ZERO PROPRIETARY BLENDS
          </span>
        </div>
        <h1 className="font-display-hero uppercase text-[#eddcff]">
          NUTRITION FACTS <span className="text-[#c3f400]">&amp; CLINICAL LEDGER</span>
        </h1>
        <p className="font-body-lg text-[#c4c9ac] max-w-2xl">
          We don&apos;t hide cheap fillers behind trademarked blends. Every single gram of isolate, enzyme, and amino acid is explicitly enumerated down to the milligram.
        </p>
      </div>

      {/* Product Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {PRODUCTS.map((p) => {
          const isActive = p.id === selectedProductId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProductId(p.id)}
              className={`px-4 py-2 rounded-full font-headline-sm text-xs uppercase transition-all whitespace-nowrap cursor-pointer font-bold ${
                isActive
                  ? 'bg-[#c3f400] text-[#1c0736] shadow-md shadow-[#c3f400]/20'
                  : 'bg-[#33204e] text-[#eddcff] hover:bg-[#3e2b5a]'
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Main Spec Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Left: Traditional Neo-Brutalist Nutrition Panel */}
        <div className="lg:col-span-5 bg-[#160231] rounded-2xl p-6 border-2 border-[#c3f400] shadow-[6px_6px_0px_0px_#ffffff] text-[#eddcff]">
          <div className="border-b-8 border-[#c3f400] pb-2 mb-2">
            <h2 className="font-display-hero text-3xl font-extrabold uppercase leading-none">
              Nutrition Facts
            </h2>
            <div className="flex justify-between font-label-code text-xs text-[#c4c9ac] mt-1">
              <span>Serving Size</span>
              <span className="font-bold text-[#eddcff]">{product.formatText}</span>
            </div>
          </div>

          <div className="border-b-4 border-white/20 py-1">
            <div className="font-label-code text-xs text-[#c4c9ac]">Amount Per Serving</div>
            <div className="flex justify-between items-baseline font-headline-lg text-4xl font-bold">
              <span>Calories</span>
              <span className="text-[#c3f400]">{product.calories.replace(' KCAL', '')}</span>
            </div>
          </div>

          <div className="text-right text-[10px] font-label-code text-[#c4c9ac] py-1 border-b border-white/10">
            % Daily Value*
          </div>

          <div className="divide-y divide-white/10 font-label-code text-xs">
            <div className="flex justify-between py-1.5">
              <span>
                <strong>Total Fat</strong> 2.5g
              </span>
              <span className="font-bold">3%</span>
            </div>
            <div className="flex justify-between py-1.5 pl-4 text-[#c4c9ac]">
              <span>Saturated Fat 0.5g</span>
              <span>2%</span>
            </div>
            <div className="flex justify-between py-1.5 pl-4 text-[#c4c9ac]">
              <span>Trans Fat 0g</span>
              <span>-</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span>
                <strong>Cholesterol</strong> 5mg
              </span>
              <span className="font-bold">2%</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span>
                <strong>Sodium</strong> 140mg
              </span>
              <span className="font-bold">6%</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span>
                <strong>Total Carbohydrate</strong> 3g
              </span>
              <span className="font-bold">1%</span>
            </div>
            <div className="flex justify-between py-1.5 pl-4 text-[#c4c9ac]">
              <span>Dietary Fiber 2g</span>
              <span>7%</span>
            </div>
            <div className="flex justify-between py-1.5 pl-4 text-[#c4c9ac]">
              <span>Total Sugars 0g</span>
              <span>-</span>
            </div>
            <div className="flex justify-between py-1.5 pl-8 text-[#c3f400] font-bold">
              <span>Includes 0g Added Sugars</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between py-2 border-t-8 border-white/30 text-sm">
              <span className="font-headline-sm uppercase text-[#c3f400] font-extrabold">
                Protein {product.protein.replace(' PROTEIN', '').replace(' CRISP ISOLATE', '')}
              </span>
              <span className="font-bold text-[#c3f400]">50%</span>
            </div>
          </div>

          <div className="border-t-4 border-white/20 pt-2 text-[10px] font-label-code text-[#c4c9ac] leading-tight">
            * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </div>
        </div>

        {/* Right: Amino Acid Profile & Enzyme Complex */}
        <div className="lg:col-span-7 space-y-6">
          {/* Amino Acid Breakdown */}
          <div className="bg-[#24113f] rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-headline-md text-xl uppercase text-[#eddcff]">
                  AMINO ACID SPECTROGRAPH
                </h3>
                <p className="font-label-code text-xs text-[#c4c9ac]">
                  NATURALLY OCCURRING BCAAS &amp; ESSENTIAL AMINOS PER SERVING
                </p>
              </div>
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-2.5 py-0.5 rounded text-xs uppercase font-bold">
                0% AMINO SPIKING
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-label-code text-xs">
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-LEUCINE (BCAA)</span>
                <span className="text-[#c3f400] font-bold text-sm">2,850 mg</span>
              </div>
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-ISOLEUCINE</span>
                <span className="text-[#eddcff] font-bold text-sm">1,520 mg</span>
              </div>
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-VALINE</span>
                <span className="text-[#eddcff] font-bold text-sm">1,410 mg</span>
              </div>
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-GLUTAMIC ACID</span>
                <span className="text-[#7df4ff] font-bold text-sm">4,280 mg</span>
              </div>
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-ARGININE</span>
                <span className="text-[#eddcff] font-bold text-sm">620 mg</span>
              </div>
              <div className="bg-[#160231] p-3 rounded-lg border border-white/5">
                <span className="text-[#c4c9ac] block">L-LYSINE</span>
                <span className="text-[#eddcff] font-bold text-sm">2,340 mg</span>
              </div>
            </div>
          </div>

          {/* DigeZyme Complex */}
          <div className="bg-[#33204e] rounded-2xl p-6 border border-white/10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c3f400]">favorite</span>
              <h3 className="font-headline-md text-xl uppercase text-[#eddcff]">
                DIGEZYME® 5-ENZYME BIO-SHIELD
              </h3>
            </div>
            <p className="font-body-sm text-xs text-[#c4c9ac] leading-relaxed">
              Why do ordinary shakes cause stomach agony? High lactose and unhydrolyzed proteins. We infuse patented DigeZyme® multi-enzyme complex (Amylase, Protease, Lactase, Lipase, Cellulase) so your body digests pure amino acids with zero gas or bloating.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-label-code text-xs bg-[#160231] px-3 py-1 rounded text-[#c3f400]">
                ✓ 100% LACTOSE NEUTRALIZED
              </span>
              <span className="font-label-code text-xs bg-[#160231] px-3 py-1 rounded text-[#7df4ff]">
                ✓ INSTANT GASTRIC COMFORT
              </span>
              <span className="font-label-code text-xs bg-[#160231] px-3 py-1 rounded text-[#ffb3af]">
                ✓ ZERO GUM THICKENERS
              </span>
            </div>
          </div>

          {/* Action CTA to View Lot Verification */}
          <div className="p-4 bg-[#281543] rounded-2xl border border-[#c3f400]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-headline-sm uppercase text-[#eddcff] block">
                VERIFY THIS BATCH LAB REPORT
              </span>
              <span className="font-label-code text-xs text-[#c4c9ac]">
                View independent third-party HPLC chromatography and heavy metal assays.
              </span>
            </div>
            <button
              onClick={onOpenCOA}
              className="px-6 py-2.5 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-xs font-bold shadow-[2px_2px_0px_0px_#ffffff] hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            >
              INSPECT COA REPORT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
