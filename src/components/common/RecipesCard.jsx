import Image from "next/image";
import Link from "next/link";

export default function RecipesCard({ recipe }) {
  return (
    <div className="bg-card-bg border border-border-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={recipe.image} 
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-text flex items-center gap-1 shadow-sm">
          <span className="text-yellow-500">★</span> {recipe.rating}
        </div>
        {recipe.isHealthy && (
          <div className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
            Healthy
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-secondary tracking-wider uppercase">{recipe.category}</span>
          <span className="text-xs text-secondary-text flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {recipe.time}
          </span>
        </div>
        <h3 className="text-lg font-bold text-primary-text mb-2 line-clamp-2 group-hover:text-primary transition-colors">{recipe.title}</h3>
        <p className="text-sm text-secondary-text mb-4 line-clamp-2 flex-grow">{recipe.description}</p>
        <div className="mt-auto pt-4 border-t border-border-light flex justify-between items-center">
          <span className="text-sm font-medium text-primary-text">{recipe.calories} kcal</span>
          <Link href={`/recipe/${recipe.id}`} className="text-primary font-medium text-sm hover:underline flex items-center gap-1">
            View Recipe
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
