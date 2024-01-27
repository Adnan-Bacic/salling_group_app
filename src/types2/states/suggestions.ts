import { FrequentlyBoughtTogehterResponseType, RelevantProductsResponseInterface, SimilarProductsResponseType } from '../responses';

export interface SuggestionsInterface {
  relevantProducts: RelevantProductsResponseInterface;
  similarProducts: SimilarProductsResponseType;
  frequentlyBoughtTogehter: FrequentlyBoughtTogehterResponseType;
}
