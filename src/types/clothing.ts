import { Item } from "./items";
import WawaGreenShirtImage from '../utils/images/wawa_green_shirt.png';
import WawaRedShirtImage from '../utils/images/wawa_red_shirt.png';
import WawaHoodieImage from '../utils/images/wawahoodie.png';

export interface ClothingItem extends Item {
  price: number
}

export const WawaGreenShirt:ClothingItem = {
    productId: '012010101',
    name: 'Wawa Green',
    image: WawaGreenShirtImage,
    description: '',
    price: 20
}

export const WawaRedShirt:ClothingItem = {
    productId: '323131',
    name: 'Wawa Green',
    image: WawaRedShirtImage,
    description: '',
    price: 20 
}

export const WawaHoodie:ClothingItem = {
    productId: '323131',
    name: 'Wawa Green',
    image: WawaHoodieImage,
    description: '',
    price: 35 
};

export const WawaClothingItems = [WawaGreenShirt,WawaRedShirt,WawaHoodie];