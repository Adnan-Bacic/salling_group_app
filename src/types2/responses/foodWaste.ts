import { StoreResponseInterface } from './stores';

export interface FoodWasteResponseInterface {
  clearances: {
    offer: {
      currency: string;
      discount: number;
      ean: string;
      endTime: string;
      lastUpdate: string;
      newPrice: number;
      originalPrice: number;
      percentDiscount: number;
      startTime: string;
      stock: number;
      stockUnit: string
    };
    product: {
      categories: {
        da: string;
        en: string
      };
      description: string;
      ean: string;
      image: string;
    }
  }[];
  store: StoreResponseInterface
}

export type FoodWasteResponseType = FoodWasteResponseInterface[];
