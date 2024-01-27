export interface StoreResponseInterface {
  address: {
    city: string;
    country: string;
    extra: null;
    street: string;
    zip: string
  };
  brand: string;
  coordinates: string[];
  created: string;
  distance_km: null;
  hours: {
    date: string;
    type: string;
    open: string;
    close: string;
    closed: boolean;
    customerFlow: number[];
  }[];
  modified: string;
  name: string;
  phoneNumber: string;
  sapSiteId: string;
  type: string;
  vikingStoreId: string;
  attributes: {
    babyChanging: boolean;
    bakery: boolean;
    carlsJunior: boolean;
    clickAndCollect: boolean;
    enablingFacilities: boolean;
    flowers: boolean;
    foodClickAndCollect: boolean;
    garden: boolean;
    holidayOpen: boolean;
    nonFood: boolean;
    open247: boolean;
    parking: boolean;
    parkingRestrictions: boolean;
    petFood: boolean;
    pharmacy: boolean;
    scanAndGo: boolean;
    smileyscheme: string;
    spotFood: boolean;
    spotNonfood: boolean;
    starbucks: boolean;
    swipBox: boolean;
    wc: boolean;
    wifi: boolean;
  };
  id: string;
}

export type StoresResponseType = StoreResponseInterface[];
