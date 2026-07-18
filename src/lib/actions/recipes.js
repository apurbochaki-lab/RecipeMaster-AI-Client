import { serverFetch, serverMutation } from "./server"

export const postRecipe = (recipeData) => {
    return serverMutation("/api/recipe/add-new", recipeData)
}

// Get recipes with search, filter, sort
export const getRecipes = (page, search, category, sort) => {
    return serverFetch(`/api/all-recipes?page=${page}&search=${search}&category=${category}&sort=${sort}`)
}


// const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER}/api/all-recipes?page=${page}&search=${search}&category=${category}&sort=${sort}`,
//     {
//         cache: "no-store",
//     }
// );
// const data = await res.json();