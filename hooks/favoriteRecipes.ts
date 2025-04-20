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
export const addFavoriteRecipe = async (
  userId: string,
  recipeId: string
): Promise<any> => {
  try {
    let body = {
      user_id: userId,
      recipe_id: recipeId,
    };
    const response = await api.post("/favorite-recipes/", body);
    return response.data;
  } catch (error: any) {
    throw { ...(error.response?.data || error.message) };
  }
};
export const deleteFavoriteRecipe = async (
  userId: string,
  recipeId: string
): Promise<void> => {
  try {
    let body = {
      user_id: userId,
      recipe_id: recipeId,
    };
    await api.delete("/favorite-recipes/", { data: body });
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

export const searchRecipes = async (
  ingredients: string[]
): Promise<RecipePreviewResponse[]> => {
  try {
    let body = {
      ingredients,
    };
    const response = await api.post("/recipes/search", body);
    return response.data;
  } catch (error: any) {
    throw { ...(error.response?.data || error.message) };
  }
};
