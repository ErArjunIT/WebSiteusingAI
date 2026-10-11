import React, { useState } from 'react';
import { Product } from '../types.ts';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, flavor?: string, qty?: number) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product?.flavors?.[0] || product?.metaValue || ''
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative w-full max-w-2xl bg-[#1c0736] border-2 border-[#c3f400] rounded-2xl p-6 z-10 shadow-[8px_8px_0px_0px_#ffffff] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] flex items-center justify-center cursor-pointer z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Product Media */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-[#24113f] border border-white/10 flex items-center justify-center">
            {product.badge && (
              <span
                className={`absolute top-3 left-3 z-20 font-sticker-badge text-xs px-2.5 py-1 rounded uppercase font-bold shadow-md ${
                  product.badgeColor === 'secondary'
                    ? 'bg-[#ffb3af] text-[#68000d]'
                    : product.badgeColor === 'tertiary'
                    ? 'bg-[#7df4ff] text-[#00363a]'
                    : 'bg-[#c3f400] text-[#1c0736]'
                }`}
              >
                {product.badge}
              </span>
            )}
            <button
              onClick={() => onToggleWishlist(product.id)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#160231]/80 backdrop-blur flex items-center justify-center cursor-pointer transition-colors"
            >
              <span
                className={`material-symbols-outlined text-[18px] ${
                  isWishlisted ? 'text-[#ffb3af]' : 'text-[#eddcff]'
                }`}
                style={{
                  fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                favorite
              </span>
            </button>
            <img
              src={product.image}
              alt={product.altText}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-label-code">
              <span className="flex items-center text-[#c3f400]">
                <span className="material-symbols-outlined text-[16px]">star</span>
                <span className="font-bold ml-1">{product.rating}</span>
              </span>
              <span className="text-[#c4c9ac]">({product.reviewCount} reviews)</span>
              <span className="text-[#c4c9ac]">•</span>
              <span className="text-[#c4c9ac] uppercase">{product.formatText}</span>
            </div>

            <h3 className="font-headline-md text-2xl uppercase text-[#eddcff]">
              {product.name}
            </h3>

            <p className="font-body-sm text-sm text-[#c4c9ac]">
              {product.description}
            </p>

            {/* Macros Chips */}
            <div className="flex gap-2 flex-wrap">
              <span className="font-label-code text-xs bg-[#160231] px-2.5 py-1 rounded border border-[#c3f400]/30 text-[#c3f400] font-bold">
                {product.protein}
              </span>
              <span className="font-label-code text-xs bg-[#160231] px-2.5 py-1 rounded border border-white/10 text-[#eddcff]">
                {product.secondaryMacro}
              </span>
              <span className="font-label-code text-xs bg-[#160231] px-2.5 py-1 rounded border border-white/10 text-[#c4c9ac]">
                {product.calories}
              </span>
            </div>

            {/* Flavors Selector */}
            {product.flavors && product.flavors.length > 0 && (
              <div className="space-y-2">
                <span className="font-label-code text-xs text-[#c4c9ac] uppercase block">
                  SELECT FLAVOR PROFILE:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flv) => (
                    <button
                      key={flv}
                      onClick={() => setSelectedFlavor(flv)}
                      className={`px-3 py-1 rounded-full text-xs font-label-code transition-all cursor-pointer ${
                        selectedFlavor === flv
                          ? 'bg-[#c3f400] text-[#1c0736] font-bold shadow-[2px_2px_0px_0px_#ffffff]'
                          : 'bg-[#281543] text-[#eddcff] hover:bg-[#33204e]'
                      }`}
                    >
                      {flv}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price & Quantity & Add to Cart */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-headline-lg text-2xl text-[#eddcff] font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="font-label-code text-xs text-[#c4c9ac] block">
                    {product.unitPriceText}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#160231] rounded-full px-3 py-1 border border-white/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-sm font-bold text-[#eddcff] hover:text-[#c3f400] w-6 h-6 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-label-code text-xs font-bold text-[#eddcff]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-sm font-bold text-[#eddcff] hover:text-[#c3f400] w-6 h-6 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product, selectedFlavor, quantity);
                  onClose();
                }}
                className="w-full py-3 bg-[#c3f400] text-[#1c0736] rounded-full font-headline-sm uppercase text-sm font-bold shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                <span>ADD TO CART • ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
