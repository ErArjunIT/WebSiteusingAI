import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { BundleCustomizerModal } from './components/BundleCustomizerModal.tsx';
import { ProductQuickViewModal } from './components/ProductQuickViewModal.tsx';
import { CertificateOfAnalysisModal } from './components/CertificateOfAnalysisModal.tsx';
import { DiscordModal, AccountModal, LegalModal } from './components/InfoModals.tsx';
import { DropsAndShopView } from './views/DropsAndShopView.tsx';
import { OurMissionView } from './views/OurMissionView.tsx';
import { FlavorsLabView } from './views/FlavorsLabView.tsx';
import { NutritionFactsView } from './views/NutritionFactsView.tsx';
import { CommunityView } from './views/CommunityView.tsx';
import { PRODUCTS } from './data/products.ts';
import { CartItem, Product } from './types.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('drops-and-shop');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Initial cart with 3 items matching user's header badge "3"
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      product: PRODUCTS[0], // Cosmic Crunch
      quantity: 1,
      selectedFlavor: 'Birthday Cake',
    },
    {
      id: 'cart-2',
      product: PRODUCTS[1], // Matcha Glitch
      quantity: 1,
      selectedFlavor: 'Ceremonial Uji',
    },
    {
      id: 'cart-3',
      product: PRODUCTS[2], // Cyber Berry
      quantity: 1,
      selectedFlavor: 'Electric Cyber Berry',
    },
  ]);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>(['cosmic-crunch']);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCOAOpen, setIsCOAOpen] = useState(false);
  const [isDiscordOpen, setIsDiscordOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({ isOpen: false, title: '', content: '' });

  // Floating Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, flavor?: string, qty: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedFlavor === (flavor || product.metaValue)
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          product,
          quantity: qty,
          selectedFlavor: flavor || product.metaValue,
        },
      ];
    });
    showToast(`ITEM STACKED TO CART! 100% Zero Chalk Lock-in`);
  };

  const handleAddBundleToCart = (products: Product[]) => {
    products.forEach((p) => {
      handleAddToCart(p);
    });
    showToast(`4-PACK BUNDLE STACKED TO CART WITH TIER SAVINGS!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('REMOVED FROM RADAR');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('SAVED TO YOUR FLAVOR RADAR');
        return [...prev, productId];
      }
    });
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#1c0736] text-[#eddcff] font-['Space_Grotesk',sans-serif] flex flex-col selection:bg-[#c3f400] selection:text-[#1c0736]">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBundle={() => setIsBundleModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#1c0736] flex-1">
        {currentTab === 'drops-and-shop' && (
          <DropsAndShopView
            searchQuery={searchQuery}
            onAddToCart={handleAddToCart}
            onOpenBundleModal={() => setIsBundleModalOpen(true)}
            onQuickView={(p) => setQuickViewProduct(p)}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onShowToast={showToast}
          />
        )}

        {currentTab === 'our-mission' && (
          <OurMissionView
            onGoToShop={() => {
              setCurrentTab('drops-and-shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCOA={() => setIsCOAOpen(true)}
            onOpenDiscordModal={() => setIsDiscordOpen(true)}
          />
        )}

        {currentTab === 'flavors-lab' && (
          <FlavorsLabView onShowToast={showToast} />
        )}

        {currentTab === 'nutrition-facts' && (
          <NutritionFactsView onOpenCOA={() => setIsCOAOpen(true)} />
        )}

        {currentTab === 'community' && (
          <CommunityView
            onOpenDiscordModal={() => setIsDiscordOpen(true)}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenCOA={() => setIsCOAOpen(true)}
        onOpenTerms={() =>
          setLegalModal({
            isOpen: true,
            title: 'TERMS OF SUPPLY & GUARANTEE',
            content: `1. THE ZERO CHALK GUARANTEE: If any Protein X product produces chalky sedimentation or unpleasant mouthfeel, customers are eligible for a 100% immediate refund without requirement to ship opened items back.\n\n2. BATCH PURITY: Every product is cold-processed and third-party certified to contain zero amino-acid spiking compounds.\n\n3. SHIPPING & RE-STOCKING: Limited drops ship via carbon-neutral expedited courier within 24 hours of batch vaulting.`,
          })
        }
        onOpenPrivacy={() =>
          setLegalModal({
            isOpen: true,
            title: 'PRIVACY PROTOCOL',
            content: `1. ZERO TELEMETRY TRACKING: We do not sell your biometric or nutritional data to ad conglomerates.\n\n2. VIP CARTEL RADAR: Email addresses submitted to the Drop Radar are solely utilized for priority drop alerts, formulation voting, and batch notifications.\n\n3. FULL DISK ENCRYPTION: Checkout data is tokenized end-to-end via PCI-DSS Level 1 compliant gateways.`,
          })
        }
      />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <BundleCustomizerModal
        isOpen={isBundleModalOpen}
        onClose={() => setIsBundleModalOpen(false)}
        onAddBundleToCart={handleAddBundleToCart}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
      />

      <CertificateOfAnalysisModal
        isOpen={isCOAOpen}
        onClose={() => setIsCOAOpen(false)}
      />

      <DiscordModal
        isOpen={isDiscordOpen}
        onClose={() => setIsDiscordOpen(false)}
        onShowToast={showToast}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={() => setLegalModal({ isOpen: false, title: '', content: '' })}
        title={legalModal.title}
        content={legalModal.content}
      />

      {/* Micro-Interaction Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#33204e] border-2 border-[#c3f400] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-0 opacity-100">
          <div className="w-8 h-8 rounded-full bg-[#c3f400] flex items-center justify-center text-[#1c0736] font-bold">
            <span className="material-symbols-outlined text-[18px]">check</span>
          </div>
          <div>
            <span className="font-headline-sm text-sm text-[#eddcff] block font-bold">
              {toastMessage}
            </span>
            <span className="font-label-code text-[11px] text-[#c3f400]">
              100% Zero Chalk Lock-in
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
