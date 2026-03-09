import { Item } from './items';
import caramelImage from '../utils/images/2210_ProductSpotlight_CaramelLatte.jpeg';
import chickenImage from '../utils/images/DM_2510_DS_Teriyaki_Crispy_Chicken_Sandwich_197.avif';
import paniniImage from '../utils/images/2210_ProductSpotlight_ItalianPanini.jpeg';
import burritoImage from '../utils/images/_WO_2402_DS_Burrito_Salad_Combo.avif';

export type Category = 'HOAGIES' | 'BEVERAGES' | 'SIZZLIS' | 'SNACKS' | 'SIDES';
export type FulfillmentMethod = 'DELIVERY' | 'IN_STORE_PICKUP' | 'AT_PUMP';
export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED';


export interface FoodItem extends Item {};

export const ChickenSandwichItem:FoodItem = {
  productId: '123',
  name: 'Chicken Sandwich',
  image: chickenImage,
  description: 'Your favorite, classic, tasy chicken sandwich served the Wawa way!'
}

export const CaramelLatteItem:FoodItem = {
  productId: '2324',
  name: 'Caramel Latte',
  image: caramelImage,
  description: 'Savor rich, flavorful espresso poured over steamed milk and topped with whipped cream.'
}

export const ItalianPaniniItem:FoodItem = {
  productId: '5324',
  name: 'Italian Panini',
  image: paniniImage,
  description: 'Provolone cheese, tomato, spinach, spicy cherry pepper relish, garlic aioli, and Italian meats on panini bread.'
}

export const BurritoItem:FoodItem = {
  productId: '42354',
  name: 'Burrito Bowl Salad',
  image: burritoImage,
  description: 'Delight protein bowl filled flavor in the form of salad for your health needs'
}

export const WawaOrderItems = [CaramelLatteItem,ItalianPaniniItem,BurritoItem,ChickenSandwichItem];