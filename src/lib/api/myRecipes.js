import { serverFetch } from "../actions/server"

export const myRecipes = (userId) => {
    return serverFetch(`/api/recipes/my-recipes?userId=${userId}`)
}