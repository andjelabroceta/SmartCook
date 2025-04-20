import { RecipePreviewTime } from "./RecipePreviewTime";

export interface RecipeDetailResponse {
  id: string;
  url: string;
  image: string;
  name: string;
  description: string;
  author: string;
  ratings: number;
  ingredients: string[];
  steps: string[];
  nutrients: { [key: string]: string };
  times: RecipePreviewTime;
  serves: number;
  difficult: string;
  vote_count: number;
  subcategory: string;
  dish_type: string;
  maincategory: string;
  ingredients_ner: string[];
  is_favorite: boolean;
}
