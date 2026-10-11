import React, { useState } from 'react';
import { PRODUCTS } from '../data/products.ts';
import { Product } from '../types.ts';

interface BundleCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBundleToCart: (products: Product[]) => void;
}

export const BundleCustomizerModal: React.FC<BundleCustomizerModalProps> = ({
  isOpen,
  onClose,
  onAddBundleToCart,
}) => {
  // Slots: up to 4 items
  const [selectedSlotIds, setSelectedSlotIds] = useState<(string | null)[]>([
    'cosmic-crunch',
    'matcha-glitch',
    'cyber-berry',
    null,
  ]);
  const [activeSlotToSelect, setActiveSlotToSelect] = useState<number | null>(null);

  if (!isOpen) return null;

  const activeCount = selectedSlotIds.filter(Boolean).length;
  let discountTier = 0;
  let tierLabel = 'NO TIER';

  if (activeCount === 2) {
    discountTier = 15;
    tierLabel = '15% OFF LEVEL';
  } else if (activeCount === 3) {
    discountTier = 20;
    tierLabel = '20% OFF LEVEL';
  } else if (activeCount >= 4) {
    discountTier = 25;
    tierLabel = '25% MAX SAVINGS UNLOCKED';
  }

  const selectedProducts = selectedSlotIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const discountedTotal = rawTotal * (1 - discountTier / 100);

  const handleSelectProductForSlot = (productId: string) => {
    if (activeSlotToSelect !== null) {
      const next = [...selectedSlotIds];
      next[activeSlotToSelect] = productId;
      setSelectedSlotIds(next);
      setActiveSlotToSelect(null);
    }
  };

  const handleRemoveSlot = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = [...selectedSlotIds];
    next[index] = null;
    setSelectedSlotIds(next);
  };

  const handleLockInBundle = () => {
    if (selectedProducts.length > 0) {
      onAddBundleToCart(selectedProducts);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative w-full max-w-3xl bg-[#1c0736] border-2 border-[#c3f400] rounded-2xl p-6 z-10 shadow-[8px_8px_0px_0px_#ffffff] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-3 py-0.5 rounded uppercase font-bold text-xs">
                📦 CUSTOM BUNDLE ENGINE
              </span>
              <span className="font-label-code text-xs text-[#ffb3af]">
                TIER DISCOUNT UNLOCKED
              </span>
            </div>
            <h3 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] mt-1">
              BUILD-A-BOX 4-PACK CUSTOMIZER
            </h3>
            <p className="font-body-md text-sm text-[#c4c9ac]">
              Mix and match any four full boxes or isolate tubs. Stack discounts automatically as your bundle grows.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Dynamic Discount Tiers Progress Tracker */}
        <div className="p-4 bg-[#24113f] rounded-xl flex flex-col gap-2 mb-6 border border-white/5">
          <div className="flex justify-between items-center text-xs font-label-code">
            <span className="text-[#eddcff]">YOUR BUNDLE SAVINGS:</span>
            <span className="text-[#c3f400] font-bold text-base">{tierLabel}</span>
          </div>

          <div className="w-full h-3 bg-[#160231] rounded-full overflow-hidden flex">
            <div
              className="h-full bg-[#c3f400] transition-all duration-500 rounded-full"
              style={{
                width: `${activeCount === 1 ? '25%' : activeCount === 2 ? '50%' : activeCount === 3 ? '75%' : activeCount >= 4 ? '100%' : '10%'}`,
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            <div
              className={`p-2 rounded text-xs transition-colors ${
                activeCount === 2
                  ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                  : 'bg-[#160231] text-[#c4c9ac]'
              }`}
            >
              <span className="block font-label-code">2 ITEMS</span>
              <span className="font-headline-sm text-sm">-15%</span>
            </div>
            <div
              className={`p-2 rounded text-xs transition-colors ${
                activeCount === 3
                  ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                  : 'bg-[#160231] text-[#c4c9ac]'
              }`}
            >
              <span className="block font-label-code">3 ITEMS</span>
              <span className="font-headline-sm text-sm">-20% ACTIVE</span>
            </div>
            <div
              className={`p-2 rounded text-xs transition-colors ${
                activeCount >= 4
                  ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                  : 'bg-[#160231] text-[#c4c9ac]'
              }`}
            >
              <span className="block font-label-code">4+ ITEMS</span>
              <span className="font-headline-sm text-sm">-25% MAX</span>
            </div>
          </div>
        </div>

        {/* 4 Box Slots */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {selectedSlotIds.map((slotId, idx) => {
            const product = PRODUCTS.find((p) => p.id === slotId);
            return (
              <div
                key={idx}
                onClick={() => setActiveSlotToSelect(idx)}
                className={`p-3 rounded-xl flex flex-col items-center text-center gap-2 relative cursor-pointer transition-all border ${
                  product
                    ? 'bg-[#160231] border-white/10 hover:border-[#c3f400]'
                    : 'bg-[#281543] border-dashed border-2 border-[#c3f400]/40 hover:bg-[#33204e]'
                }`}
              >
                {product ? (
                  <>
                    <button
                      onClick={(e) => handleRemoveSlot(idx, e)}
                      title="Clear slot"
                      className="absolute top-1.5 right-1.5 text-xs text-[#c4c9ac] hover:text-[#ffb3af] bg-[#24113f] rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      ✕
                    </button>
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#24113f] mb-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-label-code text-xs text-[#eddcff] truncate w-full font-bold">
                      {product.name}
                    </span>
                    <span className="font-label-code text-[11px] text-[#c3f400]">
                      Slot {idx + 1}: Locked
                    </span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[#c3f400] text-[28px]">
                      add_circle
                    </span>
                    <span className="font-label-code text-xs text-[#eddcff] uppercase font-bold">
                      Add {idx === 3 ? '4th Item' : `Slot ${idx + 1}`}
                    </span>
                    <span className="font-label-code text-[10px] text-[#ffb3af] font-bold">
                      {idx === 3 ? 'Unlocks -25%' : 'Click to pick'}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Product Picker Drawer if slot clicked */}
        {activeSlotToSelect !== null && (
          <div className="bg-[#24113f] p-4 rounded-xl border border-[#c3f400] mb-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-headline-sm text-sm uppercase text-[#eddcff]">
                Choose Flavor for Slot {activeSlotToSelect + 1}:
              </span>
              <button
                onClick={() => setActiveSlotToSelect(null)}
                className="text-xs text-[#c4c9ac] hover:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProductForSlot(prod.id)}
                  className="p-2 bg-[#160231] hover:bg-[#33204e] rounded-lg border border-white/5 flex items-center gap-2 text-left cursor-pointer transition-all hover:border-[#c3f400]"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-10 h-10 rounded object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#eddcff] truncate">{prod.name}</p>
                    <p className="text-[10px] text-[#c3f400] font-label-code">${prod.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Total & Lock-in */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <span className="font-label-code text-xs text-[#c4c9ac] block">
              ESTIMATED BUNDLE TOTAL:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-3xl text-[#c3f400] font-bold">
                ${discountedTotal.toFixed(2)}
              </span>
              {discountTier > 0 && (
                <span className="font-body-md text-sm text-[#c4c9ac] line-through">
                  ${rawTotal.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleLockInBundle}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[3px_3px_0px_0px_#ffffff] cursor-pointer"
          >
            Lock In My Bundle
          </button>
        </div>
      </div>
    </div>
  );
};
