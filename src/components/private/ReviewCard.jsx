"use client";

import { Star } from "@gravity-ui/icons";
import Image from "next/image";

export default function ReviewCard({ review }) {
    const formattedDate = new Date(review.createdAt).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FF7A00] bg-[#FFF8F0]">
                        <Image
                            className="rounded-full object-cover"
                            src={review.userInfo.userImage || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
                            alt="User Profile"
                            fill
                        />
                    </div>

                    <div>
                        <h4 className="font-bold text-[#2D2D2D]">
                            {review.userInfo.userName}
                        </h4>
                        <p className="text-xs text-[#6B7280]">
                            {formattedDate}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 bg-[#FFF8F0] px-2 py-1 rounded-md border border-[#FF7A00]/20">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={16}
                            className={
                                star <= review.rating
                                    ? "fill-[#FF7A00] text-[#FF7A00]"
                                    : "text-[#E5E7EB]"
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Comment */}
            <p className="mt-4 leading-relaxed text-[#2D2D2D] text-sm">
                {review.comment}
            </p>
        </div>
    );
}