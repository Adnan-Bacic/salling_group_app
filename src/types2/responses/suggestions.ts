interface BaseProductSuggestion {
  id: string;
  prod_id: string;
  title: string;
  description: string;
  img: string;
  link: string;
  price: number;
}

export interface RelevantProductsResponseInterface {
  suggestions: BaseProductSuggestion[]
}

export type SimilarProductsResponseType = BaseProductSuggestion[];

export type FrequentlyBoughtTogehterResponseType = BaseProductSuggestion[];
