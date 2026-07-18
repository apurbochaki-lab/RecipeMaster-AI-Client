import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#E5E7EB] overflow-hidden flex flex-col h-full group">
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#FF7A00] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {recipe.nutrition?.calories || 0} kcal
                </div>
                <div className="absolute top-3 left-3 bg-[#4CAF50] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {recipe.category}
                </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#2D2D2D] line-clamp-1 flex-1 pr-2">
                        {recipe.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[#FF7A00] bg-[#FFF8F0] px-2 py-1 rounded-md border border-[#FF7A00]/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-bold">{recipe.rating || "0.0"}</span>
                    </div>
                </div>
                
                <p className="text-[#6B7280] text-sm mb-5 line-clamp-2 flex-grow">
                    {recipe.shortDescription}
                </p>
                
                <Link 
                    href={`/recipes/details/${recipe._id}`}
                    className="mt-auto block w-full text-center bg-[#FFF8F0] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white border border-[#FF7A00] font-semibold py-2.5 rounded-xl transition-all duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
