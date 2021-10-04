export enum StoreAttributesNormal {
  babyChanging = 'Baby changing',
  bakery = 'Bakery',
  carlsJunior = 'Carl\'s Junior',
  enablingFacilities = 'Enabling facilities',
  flowers = 'Flowers',
  garden = 'Garden',
  holidayOpen = 'Holiday open',
  nonFood = 'Non-food',
  open247 = 'Open 24/7',
  parking = 'Parking',
  parkingRestrictions = 'No parking restrictions',
  petFood = 'Pet food',
  pharmacy = 'Pharmacy',
  scanAndGo = 'Scan And Go',
  smileyscheme = 'Smiley scheme',
  starbucks = 'Starbucks',
  swipBox = 'SwipBox',
  wc = 'WC',
  wifi = 'Wi-Fi',
}

enum StoreAttributes {
  babyChanging = 'babyChanging',
  bakery = 'bakery',
  carlsJunior = 'carlsJunior',
  enablingFacilities = 'enablingFacilities',
  flowers = 'flowers',
  garden = 'garden',
  holidayOpen = 'holidayOpen',
  nonFood = 'nonFood',
  open247 = 'open247',
  parking = 'parking',
  parkingRestrictions = 'parkingRestrictions',
  petFood = 'petFood',
  pharmacy = 'pharmacy',
  scanAndGo = 'scanAndGo',
  smileyscheme = 'smileyscheme',
  starbucks = 'starbucks',
  swipBox = 'swipBox',
  wc = 'wc',
  wifi = 'wifi',
}
export const StoreAttributesToNormal = (attribute: StoreAttributes): string => {
  let res;

  switch (attribute) {
    case StoreAttributes.babyChanging:
      res = StoreAttributesNormal.babyChanging;
      break;

    case StoreAttributes.bakery:
      res = StoreAttributesNormal.bakery;
      break;

    case StoreAttributes.carlsJunior:
      res = StoreAttributesNormal.carlsJunior;
      break;

    case StoreAttributes.enablingFacilities:
      res = StoreAttributesNormal.enablingFacilities;
      break;

    case StoreAttributes.flowers:
      res = StoreAttributesNormal.flowers;
      break;

    case StoreAttributes.garden:
      res = StoreAttributesNormal.garden;
      break;

    case StoreAttributes.holidayOpen:
      res = StoreAttributesNormal.holidayOpen;
      break;

    case StoreAttributes.nonFood:
      res = StoreAttributesNormal.nonFood;
      break;

    case StoreAttributes.open247:
      res = StoreAttributesNormal.open247;
      break;

    case StoreAttributes.parking:
      res = StoreAttributesNormal.parking;
      break;

    case StoreAttributes.parkingRestrictions:
      res = StoreAttributesNormal.parkingRestrictions;
      break;

    case StoreAttributes.petFood:
      res = StoreAttributesNormal.petFood;
      break;

    case StoreAttributes.pharmacy:
      res = StoreAttributesNormal.pharmacy;
      break;

    case StoreAttributes.scanAndGo:
      res = StoreAttributesNormal.scanAndGo;
      break;

    case StoreAttributes.smileyscheme:
      res = StoreAttributesNormal.smileyscheme;
      break;

    case StoreAttributes.starbucks:
      res = StoreAttributesNormal.starbucks;
      break;

    case StoreAttributes.swipBox:
      res = StoreAttributesNormal.swipBox;
      break;

    case StoreAttributes.wc:
      res = StoreAttributesNormal.wc;
      break;

    case StoreAttributes.wifi:
      res = StoreAttributesNormal.wifi;
      break;

    default:
      res = '';
      break;
  }

  return res;
};
