export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  timestamp: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Jar' | 'Bottle' | 'Pack';
  unit: string;
  avgRating?: number;
  totalReviews?: number;
}

export interface SubscriptionOptions {
  days: string[];
  frequency: string;
}

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  subscription?: SubscriptionOptions;
  isSavedForLater?: boolean;
}

export interface TrackingInfo {
  deliveryPartner: string;
  partnerPhone: string;
  estimatedDelivery: string;
  currentLocation: {
    lat: number;
    lng: number;
    name: string;
  };
  steps: {
    status: string;
    time: string;
    completed: boolean;
    isCurrent?: boolean;
  }[];
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Out for Delivery' | 'Delivered';
  timestamp: string;
  tracking?: TrackingInfo;
}
