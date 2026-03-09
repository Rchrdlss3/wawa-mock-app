import React, { ReactNode } from 'react';
import { Truck, MapPin, History, PhoneCall, ClipboardList, Gift, QrCode, Fuel, Coffee, icons } from 'lucide-react';

export interface ActionItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: ReactNode;
  variant?: 'primary' | 'secondary';
  action: string;
}

export const DELIVERY_ACTIONS: ActionItem[] = [
  { id: '1', title: 'New Order', subtitle: 'Fresh to your door', variant: 'primary', action: 'New Order',  icon: React.createElement(Truck),},
  { id: '2', title: 'Live Tracking', subtitle: 'Watch your hoagie', icon: React.createElement(MapPin), action: 'Tracking' },
  { id: '3', title: 'My Orders', icon: React.createElement(History), action: 'Orders' },
  { id: '4', title: 'Support', icon: React.createElement(PhoneCall), action: 'Support' },
  { id: '5', title: 'Recent Receipts', icon: React.createElement(ClipboardList), action: 'Receipts' },
  { id: '6', title: 'Rewards', icon: React.createElement(Gift), action: 'Rewards' },
];

export const IN_STORE_ACTIONS: ActionItem[] = [
  { id: 'is1', title: 'Scan & Pay', subtitle: 'Skip the line', icon: React.createElement(QrCode), variant: 'primary', action: 'Scan' },
  { id: 'is2', title: 'Find Item', icon: React.createElement(ClipboardList), action: 'Find' },
  { id: 'is3', title: 'Store Support', icon: React.createElement(PhoneCall), action: 'Support' },
];