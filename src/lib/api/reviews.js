import { serverFetch } from "../actions/server"

export const getRecentReviews = async (recipeId) => {
    return await serverFetch(`/api/details/reviews?recipeId=${recipeId}`)
}