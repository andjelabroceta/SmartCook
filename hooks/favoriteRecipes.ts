import { RecipePreviewResponse } from "@/model/RecipePreviewResponse";
import api from "./interceptor";
import { RecipeDetailResponse } from "@/model/RecipeDetailResponse";

export const findFavoriteRecipes = async (
  userId: string
): Promise<RecipePreviewResponse[]> => {
  try {
    const response = await api.get<RecipePreviewResponse[]>(
      `/favorite-recipes/${userId}`
    );
    return response.data;
  } catch (error: any) {
    throw { ...(error.response?.data || error.message) };
  }
};

export const fetchRecipe = async (
  id: string
): Promise<RecipeDetailResponse> => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error: any) {
    throw { ...(error.response?.data || error.message) };
  }
};
