import { serverMutation } from "./server"

export const postRecipe = (recipeData) => {
    return serverMutation("/api/recipe/add-new", recipeData)
}