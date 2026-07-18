import { serverFetch, serverMutation } from "./server"

export const postRecipe = (recipeData) => {
    return serverMutation("/api/recipe/add-new", recipeData)
}

export const deleteRecipe = async (recipeId) => {
    return serverMutation(`/api/recipes/manage/delete-recipe?recipeId=${recipeId}`, {}, "DELETE")
}