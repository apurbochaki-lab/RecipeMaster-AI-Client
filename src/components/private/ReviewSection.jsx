"use client";

import { useState } from "react";
import { CircleCheckFill, Star } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { refreshPath } from "@/lib/core/refreshPath";
import { serverMutation } from "@/lib/actions/server";
import ReviewCard from "./ReviewCard";

export default function ReviewSection({ recipe, user, recentReviews: reviews }) {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [submitted, setSubmitted] = useState(recipe?.isReviewed || false)


    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            rating,
            comment,
        }

        const reviewData = {
            ...data,
            title: recipe?.title,
            shortDescription: recipe?.shortDescription,
            recipeId: recipe?._id,

            // user who review
            userInfo: {
                userName: user?.name,
                userImage: user?.image,
                userId: user?.id
            }
        }

        // API call later
        const res = await serverMutation("/api/details/recipe-review", reviewData)

        if (!res.isExist) {
            refreshPath(`/recipes/details/${recipe?._id}`)
            setSubmitted(true)
            toast.success("Review Submitted")
        }
        else {
            toast.error("You already reviewed!")
        }

        setRating(0);
        setComment("");
    };

    return (
        <section className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-[#E5E7EB]">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">
                    Community Reviews
                </h2>

                <p className="mt-2 text-[#6B7280]">
                    Share your cooking experience and read feedback from other foodies.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                {/* Left Side */}
                <div className="lg:col-span-5">
                    <div className="sticky top-24 rounded-2xl border border-[#FF7A00]/20 bg-[#FFF8F0] p-6 shadow-sm">
                        <h3 className="text-xl font-semibold text-[#2D2D2D] flex items-center gap-2">
                            <Star className="text-[#FF7A00]" size={20} />
                            Submit a Review
                        </h3>

                        <div>
                            {
                                submitted ?
                                    <div className="py-8">
                                        <div className="inline-flex w-full items-start gap-4 rounded-xl border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-5 py-5">
                                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4CAF50]/20">
                                                <CircleCheckFill className="text-[#4CAF50]" size={20} />
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold text-[#2D2D2D]">
                                                    Review Already Submitted
                                                </h3>
                                                <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                                                    Thanks for sharing your feedback! You&apos;ve already submitted a review
                                                    for this recipe, so additional reviews aren&apos;t allowed.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    : (<form
                                        onSubmit={handleSubmit}
                                        className="mt-6 space-y-6"
                                    >
                                        <div>
                                            <label className="mb-3 block text-sm font-semibold text-[#2D2D2D]">
                                                Rate this Recipe
                                            </label>

                                            <div className="flex items-center gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        type="button"
                                                        key={star}
                                                        onClick={() =>
                                                            handleStarClick(star)
                                                        }
                                                        className="transition-transform hover:scale-110"
                                                    >
                                                        <Star
                                                            size={32}
                                                            className={
                                                                star <= rating
                                                                    ? "fill-[#FF7A00] text-[#FF7A00]"
                                                                    : "text-[#E5E7EB]"
                                                            }
                                                        />
                                                    </button>
                                                ))}
                                            </div>

                                            {rating > 0 && (
                                                <p className="mt-2 text-sm text-[#FF7A00] font-medium">
                                                    Selected Rating: {rating}/5
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="mb-3 block text-sm font-semibold text-[#2D2D2D]">
                                                Your Comment
                                            </label>

                                            <textarea
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                                rows={5}
                                                placeholder="Did you like the taste? Any tweaks you made? Share your thoughts..."
                                                className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4 text-[#2D2D2D] outline-none transition focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full rounded-xl bg-[#FF7A00] px-5 py-3.5 font-bold text-white transition-all hover:bg-[#e06c00] hover:shadow-md"
                                        >
                                            Submit Review
                                        </Button>
                                    </form>)
                            }
                        </div>

                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:col-span-7">
                    <div className="mb-6 flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                        <h3 className="text-xl font-bold text-[#2D2D2D]">
                            Recent Reviews
                        </h3>

                        <span className="text-sm font-semibold bg-[#FFF8F0] text-[#FF7A00] px-3 py-1 rounded-full border border-[#FF7A00]/20">
                            {reviews.length} Reviews
                        </span>
                    </div>

                    <div className="space-y-4">
                        {reviews.length > 0 ? reviews.map((review) => (
                            <ReviewCard
                                key={review._id}
                                review={review}
                            />
                        )) : (
                            <div className="text-center py-10">
                                <p className="text-[#6B7280]">No reviews yet. Be the first to review this recipe!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}