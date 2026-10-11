import React, { useState, useEffect } from 'react';
import { PRODUCTS, HERO_TUB_URL } from '../data/products.ts';
import { REVIEWS } from '../data/reviews.ts';
import { Product } from '../types.ts';

interface DropsAndShopViewProps {
  searchQuery: string;
  onAddToCart: (product: Product, flavor?: string) => void;
  onOpenBundleModal: () => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onShowToast: (msg: string) => void;
}

export const DropsAndShopView: React.FC<DropsAndShopViewProps> = ({
  searchQuery,
  onAddToCart,
  onOpenBundleModal,
  onQuickView,
  wishlist,
  onToggleWishlist,
  onShowToast,
}) => {
  // Category & Diet filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('hype');

  // Live countdown timer state (vault closing)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 22, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 22, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  // Filter products
  let filteredProducts = PRODUCTS.filter((p) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchFlavor = p.flavors?.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchFlavor) return false;
    }

    // Category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'bars' && p.category !== 'bars') return false;
      if (selectedCategory === 'shakes' && p.category !== 'shakes') return false;
      if (selectedCategory === 'clear' && p.category !== 'clear') return false;
      if (selectedCategory === 'collabs' && p.category !== 'collabs') return false;
      if (selectedCategory === 'bundles' && p.category !== 'bundles') return false;
    }

    // Diet
    if (selectedDiet) {
      if (!p.diet.includes(selectedDiet as any)) return false;
    }

    return true;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'hype') return b.hype - a.hype;
    if (sortBy === 'protein-value') {
      const pA = parseInt(a.protein) || 20;
      const pB = parseInt(b.protein) || 20;
      return pB / b.price - pA / a.price;
    }
    return 0;
  });

  // Build-a-box slots for inline interactive bento
  const [bundleSlots, setBundleSlots] = useState<(string | null)[]>([
    'cosmic-crunch',
    'matcha-glitch',
    'cyber-berry',
    null,
  ]);

  const activeBundleCount = bundleSlots.filter(Boolean).length;
  const bundleDiscount =
    activeBundleCount === 2 ? 0.15 : activeBundleCount === 3 ? 0.2 : activeBundleCount >= 4 ? 0.25 : 0;
  const bundleProducts = bundleSlots
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];
  const bundleRaw = bundleProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleTotal = bundleRaw * (1 - bundleDiscount);

  const handleInlineLockBundle = () => {
    bundleProducts.forEach((prod) => onAddToCart(prod));
    onShowToast(`STACKED 4-PACK BUNDLE TO CART (${bundleDiscount * 100}% SAVINGS)!`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden px-gutter py-space-xl bg-[#1c0736]">
        {/* Ambient Neon Blobs */}
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#c3f400]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#970017]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
          {/* Top Live Drop HUD Banner */}
          <div className="flex flex-wrap items-center justify-between gap-space-md p-space-sm bg-[#24113f] rounded-xl border border-white/5">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-[#c3f400] animate-ping" />
              <span className="font-label-code text-xs text-[#c3f400] tracking-wider uppercase font-bold">
                LIMITED DROP #042 LIVE NOW
              </span>
              <span className="hidden md:inline text-[#c4c9ac] font-label-code text-xs">
                // BATCH 94.6% CLAIMED
              </span>
            </div>
            <div className="flex items-center gap-space-sm bg-[#160231] px-space-md py-space-xs rounded-full border border-white/5">
              <span className="material-symbols-outlined text-[#ffb3af] text-[18px]">timer</span>
              <span className="font-label-code text-xs text-[#eddcff]">VAULT CLOSES IN:</span>
              <span className="font-label-code text-xs text-[#ffb3af] font-bold">
                {pad(timeLeft.hours)}h : {pad(timeLeft.minutes)}m : {pad(timeLeft.seconds)}s
              </span>
            </div>
          </div>

          {/* Main Headline + Kinetic Collage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded-full uppercase -rotate-2 shadow-sm font-bold">
                  ⚡ 0G ADDED BULLSH*T
                </span>
                <span className="font-sticker-badge bg-[#7df4ff] text-[#00363a] px-space-md py-space-xs rounded-full uppercase rotate-3 shadow-sm font-bold">
                  TASTES LIKE CEREAL MILK
                </span>
                <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-md py-space-xs rounded-full uppercase -rotate-1 shadow-sm font-bold">
                  100% PLANT &amp; WHEY HYBRID
                </span>
              </div>
              <h1 className="font-display-hero uppercase text-[#eddcff]">
                FUEL FOR THE <br />
                <span className="text-[#c3f400] underline decoration-[#ffb3af] decoration-wavy decoration-4">
                  MAIN CHARACTER
                </span>
              </h1>
              <p className="font-body-lg text-[#c4c9ac] max-w-2xl">
                Bioavailable macro bombs formulated without the chalky sadness. Ultra-filtered isolates, crispy puffed crunch cores, and dessert flavors so unhinged you’ll check the label twice.
              </p>

              {/* Quick Stats Row */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <div className="bg-[#33204e] px-space-md py-space-sm rounded-xl border border-white/5 shadow-md">
                  <span className="font-label-code text-xs text-[#c4c9ac] block uppercase">
                    PROTEIN DENSITY
                  </span>
                  <span className="font-headline-md text-xl text-[#c3f400] font-bold">Up to 26g</span>
                </div>
                <div className="bg-[#33204e] px-space-md py-space-sm rounded-xl border border-white/5 shadow-md">
                  <span className="font-label-code text-xs text-[#c4c9ac] block uppercase">
                    SUGAR HIT
                  </span>
                  <span className="font-headline-md text-xl text-[#ffb3af] font-bold">≤ 1g Sugar</span>
                </div>
                <div className="bg-[#33204e] px-space-md py-space-sm rounded-xl border border-white/5 shadow-md">
                  <span className="font-label-code text-xs text-[#c4c9ac] block uppercase">
                    TEXTURE GUARANTEE
                  </span>
                  <span className="font-headline-md text-xl text-[#7df4ff] font-bold">Zero Chalk</span>
                </div>
              </div>
            </div>

            {/* Hero Pack Aesthetic Visual Showcase */}
            <div className="lg:col-span-4 relative flex justify-center">
              <div
                onClick={() => {
                  const holopack = PRODUCTS.find((p) => p.id === 'cyber-berry') || PRODUCTS[2];
                  onQuickView(holopack);
                }}
                className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-[#33204e] p-space-md flex flex-col justify-between shadow-2xl border border-white/10 group cursor-pointer"
              >
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#c3f400]/20 rounded-full blur-2xl pointer-events-none" />
                <img
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90 transition-transform duration-500 group-hover:scale-105"
                  alt="Futuristic cyber-themed protein shake tub with neon lime accents"
                  src={HERO_TUB_URL}
                />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-label-code text-xs bg-[#160231]/80 text-[#c3f400] px-space-sm py-space-xs rounded-full backdrop-blur-md border border-white/10 font-bold">
                    BATCH CODE #PX-2025
                  </span>
                  <span className="material-symbols-outlined text-[#c3f400] text-[28px]">
                    verified
                  </span>
                </div>
                <div className="relative z-10 bg-[#160231]/85 backdrop-blur-md p-space-sm rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-headline-sm text-base text-[#eddcff]">HOLOPACK V2</div>
                      <div className="font-label-code text-xs text-[#c4c9ac]">
                        Cold Filtered Clear Whey
                      </div>
                    </div>
                    <span className="font-headline-md text-xl text-[#c3f400] font-bold">$39.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Pills Bar */}
          <div className="pt-space-md flex items-center gap-space-xs overflow-x-auto pb-space-xs no-scrollbar">
            {[
              { id: 'all', label: '⚡ All Drops (6)' },
              { id: 'bars', label: '🍫 Crunchy Bars' },
              { id: 'shakes', label: '🥤 Spark Shakes' },
              { id: 'clear', label: '🧊 Clear Whey Fizz' },
              { id: 'collabs', label: '👾 Collab Vault' },
              { id: 'bundles', label: '📦 Starter Bundles' },
            ].map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (cat.id === 'bundles') {
                      onOpenBundleModal();
                    } else {
                      setSelectedCategory(cat.id);
                    }
                  }}
                  className={`px-space-lg py-space-sm rounded-full font-headline-sm text-sm uppercase transition-all whitespace-nowrap cursor-pointer font-bold ${
                    isActive
                      ? 'bg-[#c3f400] text-[#1c0736] shadow-md shadow-[#c3f400]/20'
                      : 'bg-[#33204e] text-[#eddcff] hover:bg-[#3e2b5a]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE FILTER & SORT UTILITY RAIL (Sticky) */}
      <section className="w-full px-gutter py-space-md bg-[#24113f] sticky top-20 z-40 shadow-md backdrop-blur-md border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
          {/* Dietary Toggle Pills */}
          <div className="flex items-center gap-space-xs flex-wrap w-full md:w-auto">
            <span className="font-label-code text-xs text-[#c4c9ac] uppercase flex items-center gap-1 mr-2 font-bold">
              <span className="material-symbols-outlined text-[16px]">tune</span> DIET:
            </span>
            {[
              { id: 'whey', label: 'Whey Isolate' },
              { id: 'vegan', label: '100% Vegan' },
              { id: 'keto', label: 'Keto Friendly' },
              { id: 'gluten-free', label: 'Gluten-Free' },
              { id: 'nut-free', label: 'Nut-Free' },
            ].map((diet) => {
              const isActive = selectedDiet === diet.id;
              return (
                <button
                  key={diet.id}
                  onClick={() => setSelectedDiet(isActive ? null : diet.id)}
                  className={`px-3 py-1 rounded-lg font-label-code text-xs transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#c3f400] text-[#1c0736] font-bold'
                      : 'bg-[#33204e] text-[#eddcff] hover:bg-[#3e2b5a]'
                  }`}
                >
                  {diet.label}
                </button>
              );
            })}
            {selectedDiet && (
              <button
                onClick={() => setSelectedDiet(null)}
                className="text-xs text-[#c4c9ac] hover:text-[#ffb3af] ml-1 underline cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sorting + View Details */}
          <div className="flex items-center gap-space-md w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="font-label-code text-xs text-[#c4c9ac] uppercase font-bold">
                SORT:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#160231] text-[#eddcff] font-body-sm text-xs px-4 py-1.5 rounded-full outline-none cursor-pointer border border-white/10"
              >
                <option value="hype">🔥 Hype Level (Viral)</option>
                <option value="protein-value">💪 Protein Per Dollar</option>
                <option value="price-asc">💵 Price: Low to High</option>
              </select>
            </div>
            <div className="font-label-code text-xs text-[#c3f400] bg-[#160231] px-3 py-1 rounded-full border border-white/5">
              SHOWING <span className="font-bold">{filteredProducts.length}</span> FORMULAS
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE GRID */}
      <section className="w-full px-gutter py-space-xl bg-[#1c0736]">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-[#c4c9ac]/40">
                search_off
              </span>
              <h3 className="font-headline-md text-2xl uppercase text-[#eddcff]">
                NO FORMULAS FOUND
              </h3>
              <p className="font-body-md text-[#c4c9ac]">
                Try adjusting your search query or dietary filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDiet(null);
                }}
                className="px-6 py-2.5 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm uppercase text-sm font-bold shadow-[2px_2px_0px_0px_#ffffff]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {filteredProducts.map((product) => {
                const isLiked = wishlist.includes(product.id);
                return (
                  <article
                    key={product.id}
                    className="group relative bg-[#281543] rounded-2xl overflow-hidden p-space-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg border border-white/5 hover:border-[#c3f400]/40"
                  >
                    {/* Floating Sticker Badges */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                        <span
                          className={`font-sticker-badge text-xs px-2.5 py-0.5 rounded shadow-md uppercase font-extrabold ${product.badgeRotate} ${
                            product.badgeColor === 'secondary'
                              ? 'bg-[#ffb3af] text-[#68000d]'
                              : product.badgeColor === 'tertiary'
                              ? 'bg-[#7df4ff] text-[#00363a]'
                              : 'bg-[#c3f400] text-[#1c0736]'
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <div className="absolute top-4 right-4 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product.id);
                        }}
                        aria-label="Save to cart wishlist"
                        className="w-8 h-8 rounded-full bg-[#160231]/80 backdrop-blur text-[#eddcff] flex items-center justify-center hover:text-[#ffb3af] transition-colors cursor-pointer border border-white/5"
                      >
                        <span
                          className={`material-symbols-outlined text-[18px] ${
                            isLiked ? 'text-[#ffb3af]' : 'text-[#eddcff]'
                          }`}
                          style={{
                            fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          favorite
                        </span>
                      </button>
                    </div>

                    {/* Product Image Showcase */}
                    <div
                      onClick={() => onQuickView(product)}
                      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#24113f] mb-space-md flex items-center justify-center cursor-pointer"
                    >
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={product.altText}
                        src={product.image}
                      />
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <span className="font-label-code text-[11px] bg-[#160231]/90 px-2 py-0.5 rounded text-[#c3f400] font-bold">
                          {product.protein}
                        </span>
                        <span className="font-label-code text-[11px] bg-[#160231]/90 px-2 py-0.5 rounded text-[#eddcff]">
                          {product.secondaryMacro}
                        </span>
                        <span className="font-label-code text-[11px] bg-[#160231]/90 px-2 py-0.5 rounded text-[#c4c9ac]">
                          {product.calories}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col gap-space-sm flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#c3f400]">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span className="font-label-code text-xs text-[#eddcff] font-bold">
                            {product.rating}
                          </span>
                          <span className="font-label-code text-xs text-[#c4c9ac]">
                            ({product.reviewCount} reviews)
                          </span>
                        </div>
                        <span className="font-label-code text-[11px] text-[#c4c9ac] uppercase">
                          {product.formatText}
                        </span>
                      </div>

                      <h3
                        onClick={() => onQuickView(product)}
                        className="font-headline-md text-xl text-[#eddcff] group-hover:text-[#c3f400] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>

                      <p className="font-body-sm text-sm text-[#c4c9ac] line-clamp-2">
                        {product.description}
                      </p>

                      {/* Flavor or Spec Indicator */}
                      <div className="flex items-center gap-2 my-1 text-xs">
                        <span className="font-label-code text-[#c4c9ac]">{product.metaLabel}</span>
                        {product.metaType === 'flavor' && (
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-4 h-4 rounded-full bg-[#ffb3af] ring-2 ring-[#c3f400]"
                              title="Birthday Cake"
                            />
                            <span
                              className="w-4 h-4 rounded-full bg-[#c3f400]/80"
                              title="Glazed Donut"
                            />
                            <span
                              className="w-4 h-4 rounded-full bg-[#3e2b5a]"
                              title="Midnight Fudge"
                            />
                          </div>
                        )}
                        {product.metaType === 'ceremonial' && (
                          <span className="font-label-code text-[11px] bg-[#160231] px-2 py-0.5 rounded text-[#7df4ff] font-bold">
                            CEREMONIAL GRADE
                          </span>
                        )}
                        {product.metaType === 'powder' && (
                          <span className="font-label-code text-[11px] bg-[#160231] px-2 py-0.5 rounded text-[#ffb3af] font-bold">
                            HYPER-DISSOLVE MICRO POWDER
                          </span>
                        )}
                        {product.metaType === 'bloat' && (
                          <span className="font-label-code text-[11px] bg-[#160231] px-2 py-0.5 rounded text-[#c3f400] font-bold">
                            0% BLOAT FORMULA
                          </span>
                        )}
                        {product.metaType === 'crunch' && (
                          <div className="flex gap-0.5 text-[#c3f400]">
                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                            <span className="material-symbols-outlined text-[14px]">bolt</span>
                            <span className="material-symbols-outlined text-[14px] text-[#3e2b5a]">
                              bolt
                            </span>
                          </div>
                        )}
                        {product.metaType === 'mineral' && (
                          <span className="font-label-code text-[11px] bg-[#160231] px-2 py-0.5 rounded text-[#c3f400] font-bold">
                            6-MINERAL MATRIX
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-space-md flex items-center justify-between mt-auto border-t border-white/5">
                      <div>
                        <span className="font-headline-lg text-2xl text-[#eddcff] font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="font-label-code text-[11px] text-[#c4c9ac] block">
                          {product.unitPriceText}
                        </span>
                      </div>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm text-xs uppercase font-extrabold transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-md shadow-[#c3f400]/20 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          add_shopping_cart
                        </span>
                        <span>QUICK ADD</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE BUILD-A-BOX 4-PACK & TASTE TEST GUARANTEE BENTO */}
      <section className="w-full px-gutter py-space-xl bg-[#160231] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            {/* Left: Build-a-Box Interactive Teaser */}
            <div className="lg:col-span-8 bg-[#281543] rounded-2xl p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/5">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c3f400]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between flex-wrap gap-space-sm">
                  <span className="font-sticker-badge bg-[#c3f400] text-[#1c0736] px-space-md py-space-xs rounded-full uppercase font-bold text-xs">
                    📦 CUSTOM BUNDLE ENGINE
                  </span>
                  <span className="font-label-code text-xs text-[#ffb3af] font-bold">
                    TIER DISCOUNT UNLOCKED
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff]">
                  BUILD-A-BOX 4-PACK CUSTOMIZER
                </h2>
                <p className="font-body-md text-sm text-[#c4c9ac] max-w-xl">
                  Mix and match any four full boxes or isolate tubs. Stack discounts automatically as your bundle grows.
                </p>

                {/* Dynamic Discount Tiers Progress Tracker */}
                <div className="mt-space-md p-space-md bg-[#24113f] rounded-xl flex flex-col gap-space-sm border border-white/5">
                  <div className="flex justify-between items-center text-xs font-label-code">
                    <span className="text-[#eddcff]">YOUR BUNDLE SAVINGS:</span>
                    <span className="text-[#c3f400] font-bold text-base">
                      {bundleDiscount > 0 ? `${bundleDiscount * 100}% OFF LEVEL` : 'PICK 2+ ITEMS'}
                    </span>
                  </div>
                  {/* Segmented Progress Bar */}
                  <div className="w-full h-3 bg-[#160231] rounded-full overflow-hidden flex">
                    <div
                      className="h-full bg-[#c3f400] transition-all duration-500 rounded-full"
                      style={{
                        width: `${
                          activeBundleCount === 1
                            ? '25%'
                            : activeBundleCount === 2
                            ? '50%'
                            : activeBundleCount === 3
                            ? '75%'
                            : activeBundleCount >= 4
                            ? '100%'
                            : '0%'
                        }`,
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-space-xs text-center pt-space-xs">
                    <div
                      className={`p-2 rounded text-xs transition-colors ${
                        activeBundleCount === 2
                          ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                          : 'bg-[#160231] text-[#c4c9ac]'
                      }`}
                    >
                      <span className="font-label-code text-[11px] block">2 ITEMS</span>
                      <span className="font-headline-sm text-sm">-15%</span>
                    </div>
                    <div
                      className={`p-2 rounded text-xs transition-colors ${
                        activeBundleCount === 3
                          ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                          : 'bg-[#160231] text-[#c4c9ac]'
                      }`}
                    >
                      <span className="font-label-code text-[11px] block">3 ITEMS</span>
                      <span className="font-headline-sm text-sm font-bold">
                        -20% {activeBundleCount === 3 && 'ACTIVE'}
                      </span>
                    </div>
                    <div
                      className={`p-2 rounded text-xs transition-colors ${
                        activeBundleCount >= 4
                          ? 'bg-[#c3f400]/20 border border-[#c3f400] text-[#c3f400] font-bold'
                          : 'bg-[#160231] text-[#c4c9ac]'
                      }`}
                    >
                      <span className="font-label-code text-[11px] block">4+ ITEMS</span>
                      <span className="font-headline-sm text-sm">-25% MAX</span>
                    </div>
                  </div>
                </div>

                {/* Mini Box Selector Slot Previews */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md">
                  {bundleSlots.map((slotId, index) => {
                    const prod = PRODUCTS.find((p) => p.id === slotId);
                    return prod ? (
                      <div
                        key={index}
                        onClick={onOpenBundleModal}
                        className="p-3 bg-[#160231] rounded-xl flex flex-col items-center text-center gap-1 relative group border border-white/5 cursor-pointer hover:border-[#c3f400]"
                      >
                        <span className="absolute top-1.5 right-1.5 material-symbols-outlined text-[#c3f400] text-[16px]">
                          check_circle
                        </span>
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#24113f] mb-1">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-label-code text-xs text-[#eddcff] truncate w-full font-bold">
                          {prod.name}
                        </span>
                        <span className="font-label-code text-[11px] text-[#c3f400]">
                          Slot {index + 1}: Full
                        </span>
                      </div>
                    ) : (
                      <div
                        key={index}
                        onClick={onOpenBundleModal}
                        className="p-3 bg-[#33204e] border-dashed border-2 border-[#c3f400]/40 rounded-xl flex flex-col items-center justify-center text-center gap-1 cursor-pointer hover:bg-[#3e2b5a] transition-colors"
                      >
                        <span className="material-symbols-outlined text-[#c3f400] text-[28px]">
                          add_circle
                        </span>
                        <span className="font-label-code text-xs text-[#eddcff] uppercase font-bold">
                          Add 4th Item
                        </span>
                        <span className="font-label-code text-[11px] text-[#ffb3af] font-bold">
                          Unlocks -25%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action */}
              <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-white/5 mt-4">
                <div>
                  <span className="font-label-code text-xs text-[#c4c9ac] block">
                    ESTIMATED BUNDLE TOTAL:
                  </span>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="font-headline-lg text-3xl text-[#c3f400] font-bold">
                      ${bundleTotal.toFixed(2)}
                    </span>
                    <span className="font-body-md text-sm text-[#c4c9ac] line-through">
                      ${bundleRaw.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleInlineLockBundle}
                  className="w-full sm:w-auto px-space-xl py-space-md rounded-full bg-[#c3f400] text-[#1c0736] font-headline-sm text-sm uppercase font-bold hover:bg-white hover:scale-105 transition-all shadow-md shadow-[#c3f400]/20 cursor-pointer"
                >
                  Lock In My Bundle
                </button>
              </div>
            </div>

            {/* Right: Taste Test Guarantee */}
            <div className="lg:col-span-4 bg-[#33204e] rounded-2xl p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden border border-white/5">
              <div className="flex flex-col gap-space-md">
                <div className="w-16 h-16 rounded-full bg-[#970017] flex items-center justify-center text-[#ffb3af] mb-space-xs shadow-md">
                  <span className="material-symbols-outlined text-[36px]">verified_user</span>
                </div>
                <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-sm py-0.5 rounded uppercase self-start -rotate-2 font-bold text-xs">
                  100% UNHINGED REFUND POLICY
                </span>
                <h3 className="font-headline-lg text-2xl uppercase text-[#eddcff]">
                  THE ZERO CHALK GUARANTEE
                </h3>
                <p className="font-body-md text-sm text-[#c4c9ac]">
                  If our bars taste like cardboard or our shakes feel like sandbox water, we will instantly refund your entire order without asking you to ship open packages back. Keep the bars, feed your gym nemesis.
                </p>
                <div className="p-space-md bg-[#160231] rounded-xl flex items-center gap-space-sm border border-white/5">
                  <span className="material-symbols-outlined text-[#c3f400] text-[24px]">
                    psychology
                  </span>
                  <div className="font-label-code text-xs text-[#eddcff]">
                    <strong className="text-[#c3f400] block">NO AWKWARD EMAIL EXCHANGES.</strong>
                    Scan package QR, tap &quot;Nah&quot;, and get refunded.
                  </div>
                </div>
              </div>
              <div className="pt-space-md border-t border-white/5 mt-4">
                <span className="font-label-code text-xs text-[#c4c9ac] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c3f400] text-[16px]">check</span>
                  Backed by 14,000+ zero-risk orders this month
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHENTIC GEN Z CUSTOMER REVIEWS TIKTOK MARQUEE */}
      <section className="w-full py-space-xl bg-[#1c0736] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-gutter mb-space-lg flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs">
              <span className="font-sticker-badge bg-[#ffb3af] text-[#68000d] px-space-sm py-0.5 rounded rotate-2 uppercase font-bold text-xs">
                UNFILTERED FEEDBACK
              </span>
              <span className="font-label-code text-xs text-[#c3f400] font-bold">
                #PROTEINXREVIEWS
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-[#eddcff] mt-space-xs">
              WHAT THE CARTEL IS SAYING
            </h2>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-xs text-[#c4c9ac]">AVERAGE SCORE:</span>
            <div className="flex items-center gap-1 bg-[#33204e] px-space-md py-space-xs rounded-full border border-white/5">
              <span
                className="material-symbols-outlined text-[#c3f400] text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-headline-sm text-sm text-[#eddcff] font-bold">4.92 / 5.0</span>
            </div>
          </div>
        </div>

        {/* Scrolling Cards Container */}
        <div className="w-full overflow-x-auto pb-space-md px-gutter no-scrollbar flex gap-space-lg">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="min-w-[320px] max-w-[340px] bg-[#281543] rounded-2xl p-space-md flex flex-col justify-between shadow-md flex-shrink-0 border border-white/5"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rev.avatarBg}`}
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
                        className="material-symbols-outlined text-[16px]"
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
              <div className="mt-space-md pt-space-xs border-t border-[#33204e] flex items-center justify-between text-xs font-label-code">
                <span className="text-[#c4c9ac]">FLAVOR: {rev.flavor}</span>
                <span className={rev.tagColor || 'text-[#ffb3af]'}>{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
