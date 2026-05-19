export interface Feature {
  emoji: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: 'green' | 'gold' | 'terra';
  cardVariant: 'default' | 'gold' | 'terra';
}

export interface Product {
  tag: string;
  tagVariant: 'mobile' | 'backend' | 'dashboard';
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ImpactCard {
  num: string;
  unit?: string;
  label: string;
  barColor: string;
}

export interface ImpactFeature {
  icon: string;
  title: string;
  description: string;
}
