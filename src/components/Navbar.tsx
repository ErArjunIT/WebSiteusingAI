import React from 'react';
import { BRAND_LOGO_URL } from '../data/products.ts';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBundle: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
  onOpenCart,
  onOpenBundle,
  searchQuery,
  onSearchChange,
  onOpenAccount,
}) => {
  const navItems = [
    { id: 'drops-and-shop', label: 'Drops & Shop' },
    { id: 'our-mission', label: 'Our Mission' },
    { id: 'flavors-lab', label: 'Flavors Lab' },
    { id: 'nutrition-facts', label: 'Nutrition Facts' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1c0736]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-20 w-full px-gutter flex items-center justify-between gap-space-md max-w-7xl mx-auto">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-space-lg flex-shrink-0">
          <button
            onClick={() => onSelectTab('drops-and-shop')}
            className="flex items-center gap-space-sm group text-left cursor-pointer"
          >
            <img
              alt="Protein X Brand Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105 group-hover:rotate-[-2deg]"
              src={BRAND_LOGO_URL}
            />
            <span className="font-headline-sm uppercase tracking-tight text-[#eddcff]">
              PROTEIN<span className="text-[#c3f400]">X</span>
            </span>
          </button>

          {/* Desktop Nav Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#24113f]/80 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#c3f400] text-[#1c0736] font-bold shadow-[2px_2px_0px_0px_#ffffff]'
                      : 'text-[#c4c9ac] hover:text-[#eddcff] hover:bg-[#33204e]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          {/* Search Input */}
          <div className="hidden md:flex items-center bg-[#160231] border border-white/10 rounded-full px-4 py-1.5 w-48 lg:w-64 focus-within:ring-2 focus-within:ring-[#c3f400] transition-all">
            <span className="material-symbols-outlined text-[#c4c9ac] text-[18px] mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none outline-none font-body-sm text-sm text-[#eddcff] placeholder:text-[#c4c9ac]/60 w-full"
              placeholder="Search flavors, drops..."
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentTab !== 'drops-and-shop') {
                  onSelectTab('drops-and-shop');
                }
              }}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-[#c4c9ac] hover:text-[#eddcff] text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

          {/* Bundle & Save Button */}
          <button
            onClick={onOpenBundle}
            className="hidden sm:inline-flex items-center gap-2 bg-[#c3f400] text-[#1c0736] font-headline-sm text-sm uppercase px-4 py-2 rounded-full shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-[1px_1px_0px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
            <span>Bundle &amp; Save</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Open Cart"
            className="relative p-2.5 rounded-full bg-[#33204e] hover:bg-[#3e2b5a] text-[#eddcff] transition-all flex items-center justify-center cursor-pointer active:scale-95 border border-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-[#ffb3af] text-[#68000d] font-label-code text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-[1px_1px_0px_0px_#1c0736]">
              {cartCount}
            </span>
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenAccount}
            aria-label="User Account"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#c3f400] transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer text-[#1c0736]"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Scroller */}
      <div className="xl:hidden flex items-center gap-2 px-4 py-2 bg-[#160231]/95 overflow-x-auto border-t border-white/5 no-scrollbar">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap font-medium transition-all ${
                isActive
                  ? 'bg-[#c3f400] text-[#1c0736] font-bold'
                  : 'text-[#c4c9ac] hover:text-[#eddcff] bg-[#281543]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
