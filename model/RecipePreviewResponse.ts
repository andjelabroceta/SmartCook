import { RecipePreviewTime } from "./RecipePreviewTime";

export interface RecipePreviewResponse {
  id: string;
  name: string;
  image: string;
  times: RecipePreviewTime;
  rattings: number;
}
