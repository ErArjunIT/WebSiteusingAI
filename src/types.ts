export interface Product {
  id: string;
  name: string;
  badge?: string;
  badgeRotate?: string;
  badgeColor?: 'primary' | 'secondary' | 'tertiary';
  category: 'bars' | 'shakes' | 'clear' | 'collabs' | 'bundles';
  diet: ('whey' | 'vegan' | 'keto' | 'gluten-free' | 'nut-free')[];
  hype: number;
  price: number;
  unitPriceText: string;
  rating: number;
  reviewCount: string;
  formatText: string;
  description: string;
  image: string;
  altText: string;
  protein: string;
  secondaryMacro: string;
  calories: string;
  metaLabel: string;
  metaValue: string;
  metaType?: 'ceremonial' | 'crunch' | 'powder' | 'bloat' | 'mineral' | 'flavor';
  flavors?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedFlavor?: string;
}

export interface Testimonial {
  id: string;
  handle: string;
  verified: boolean;
  avatarLetter: string;
  avatarBg: string;
  stars: number;
  comment: string;
  flavor: string;
  tag: string;
  tagColor?: string;
}

export interface LabFlavorVote {
  id: string;
  name: string;
  creator: string;
  description: string;
  macroGoal: string;
  votes: number;
  status: 'In Testing' | 'Voting Live' | 'Vaulted' | 'Approved';
  tag: string;
}
