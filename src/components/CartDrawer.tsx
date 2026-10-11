import React, { useState } from 'react';
import { CartItem } from '../types.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = rawSubtotal * (discountPercent / 100);
  const discountedSubtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 50.0;
  const shipping = rawSubtotal >= freeShippingThreshold || rawSubtotal === 0 ? 0 : 5.99;
  const finalTotal = discountedSubtotal + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'ZEROCHALK' || clean === 'VIP20') {
      setDiscountPercent(20);
      setPromoMessage('⚡ VIP CODE APPLIED: 20% OFF CARTE BLANCHE!');
    } else if (clean === 'TIKTOK' || clean === 'MAINCHARACTER') {
      setDiscountPercent(15);
      setPromoMessage('⚡ 15% HYPE DISCOUNT ACTIVATED!');
    } else {
      setPromoMessage('❌ INVALID CODE. TRY "ZEROCHALK" OR "VIP20"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#1c0736] border-l border-white/10 h-full flex flex-col z-10 shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#24113f] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c3f400]">shopping_bag</span>
            <span className="font-headline-sm uppercase text-lg text-[#eddcff]">
              YOUR CARTEL STASH ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="p-3 bg-[#160231] border-b border-white/5">
          <div className="flex justify-between items-center text-xs font-label-code mb-1">
            <span className="text-[#c4c9ac]">
              {rawSubtotal >= freeShippingThreshold
                ? '⚡ FREE PRIORITY CARBON-NEUTRAL SHIPPING UNLOCKED'
                : `Add $${(freeShippingThreshold - rawSubtotal).toFixed(2)} for FREE Shipping`}
            </span>
            <span className="text-[#c3f400] font-bold">
              {Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full h-2 bg-[#281543] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#c3f400] transition-all duration-300 rounded-full"
              style={{
                width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {checkoutSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c3f400] text-[#1c0736] mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_#ffffff]">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h3 className="font-headline-md text-2xl uppercase text-[#eddcff]">
                ORDER #PX-8841 LOCKED IN!
              </h3>
              <p className="font-body-md text-sm text-[#c4c9ac] max-w-xs mx-auto">
                Batch dispatched from our cold-storage facility. Track your shipment live or inspect batch purity reports.
              </p>
              <div className="p-3 bg-[#281543] rounded-xl text-left font-label-code text-xs text-[#eddcff] space-y-1">
                <div>GUARANTEE: 100% Zero-Chalk Protected</div>
                <div>ESTIMATED DELIVERY: 2 Business Days</div>
                <div>DISPATCH CODE: LOT_#8841_US_EAST</div>
              </div>
              <button
                onClick={() => {
                  setCheckoutSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-sm font-bold shadow-[2px_2px_0px_0px_#ffffff]"
              >
                Back To Drops
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <span className="material-symbols-outlined text-5xl text-[#c4c9ac]/40">
                production_quantity_limits
              </span>
              <p className="font-headline-sm uppercase text-lg text-[#eddcff]">
                YOUR STASH IS EMPTY
              </p>
              <p className="font-body-sm text-sm text-[#c4c9ac]">
                Macro tanks running dry? Claim a limited drop or build your custom 4-pack bundle.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-sm font-bold shadow-[3px_3px_0px_0px_#ffffff]"
              >
                Explore Drops
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#281543] rounded-xl p-3 border border-white/5 flex gap-3 relative group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#160231] flex-shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-1">
                    <div>
                      <h4 className="font-headline-sm text-sm text-[#eddcff] leading-tight">
                        {item.product.name}
                      </h4>
                      <div className="font-label-code text-[11px] text-[#c3f400] mt-0.5">
                        {item.selectedFlavor || item.product.metaValue}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#c4c9ac] hover:text-[#ffb3af] transition-colors p-1"
                      title="Remove"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                    </button>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-[#160231] rounded-full px-2 py-0.5 border border-white/5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-xs text-[#eddcff] hover:text-[#c3f400] w-5 h-5 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-label-code text-xs text-[#eddcff]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-xs text-[#eddcff] hover:text-[#c3f400] w-5 h-5 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-headline-sm text-sm text-[#eddcff]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Actions */}
        {!checkoutSuccess && items.length > 0 && (
          <div className="p-4 bg-[#24113f] border-t border-white/10 space-y-3">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="PROMO: ZEROCHALK"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#160231] border border-white/10 rounded-full px-3 py-1.5 text-xs text-[#eddcff] uppercase font-label-code placeholder:text-[#c4c9ac]/50 focus:ring-1 focus:ring-[#c3f400] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] rounded-full text-xs font-label-code uppercase transition-colors"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <p className="text-[11px] font-label-code text-[#c3f400]">{promoMessage}</p>
            )}

            {/* Calculations */}
            <div className="space-y-1 text-xs font-label-code text-[#c4c9ac] border-t border-white/5 pt-2">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="text-[#eddcff]">${rawSubtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-[#c3f400]">
                  <span>VIP DISCOUNT (-{discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>CARBON-NEUTRAL SHIPPING</span>
                <span className="text-[#eddcff]">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-headline-sm text-[#eddcff] pt-1 border-t border-white/5">
                <span>TOTAL</span>
                <span className="text-[#c3f400] text-lg font-bold">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              disabled={isCheckingOut}
              onClick={handleCheckout}
              className="w-full py-3 bg-[#c3f400] text-[#1c0736] rounded-full font-headline-sm uppercase text-sm font-extrabold shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isCheckingOut ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-[#1c0736] border-t-transparent rounded-full animate-spin" />
                  <span>SECURING BATCH ALLOCATION...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  <span>LOCK IN MY BATCH (${finalTotal.toFixed(2)})</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
