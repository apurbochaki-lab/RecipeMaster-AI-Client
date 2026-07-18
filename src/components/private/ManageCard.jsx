"use client";

import { useState } from "react";
import { Card, Chip, Button, AlertDialog } from "@heroui/react";
import { Eye, Trash2, CalendarDays, Utensils } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { deleteRecipe } from "@/lib/actions/recipes";
import { refreshPath } from "@/lib/core/refreshPath";



const ManageCard = ({ myRecipesData }) => {
    const [items, setItems] = useState(myRecipesData);

    const handleDelete = async (recipeId) => {
        console.log(recipeId)

        try {
            // TODO: delete API route here
            const res = await deleteRecipe(recipeId)

            if (res?.deletedCount > 0) {
                refreshPath("/recipes/manage")
                toast.success("Deleted successfully")
            } else {
                toast.error("Something went wrong!")
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Internal error 500")
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {myRecipesData.map((item) => {
                const formattedDate = new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });

                return (
                    <Card
                        key={item._id}
                        className="border border-[#E5E7EB] bg-white hover:shadow-lg transition-all duration-300 rounded-2xl shadow-sm flex flex-col overflow-hidden group w-full h-full justify-between"
                    >
                        {/* Perfect Image section directly using stable dynamic layout wrapper */}
                        <div className="relative w-full h-48 overflow-hidden bg-[#FFF8F0] border-b border-[#E5E7EB]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
                                className="w-full h-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Trading Type Pill */}
                            <div className="absolute top-3 left-3 z-10">
                                <Chip
                                    className="bg-white/90 backdrop-blur-md text-[#2D2D2D] font-bold border border-[#E5E7EB] shadow-sm text-xs px-2 py-0.5"
                                    size="sm"
                                >
                                    ⭐ {item.rating}
                                </Chip>
                            </div>
                        </div>

                        {/* Text Content area - Spacing problem perfectly solved */}
                        <div className="p-5 flex-grow flex flex-col items-start justify-start space-y-2">
                            <div className="flex items-center gap-1.5 text-xs text-[#FF7A00] font-bold tracking-wider uppercase">
                                <Utensils size={14} />
                                {item.category}
                            </div>

                            <h3 className="text-lg font-bold text-[#2D2D2D] leading-snug line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-[#6B7280] text-sm line-clamp-2 leading-relaxed">
                                {item.shortDescription}
                            </p>
                        </div>

                        {/* Action buttons footer with minimal uniform spacing gaps */}
                        <div className="p-5 pt-0 flex flex-col space-y-4 mt-auto">
                            <div className="flex items-center gap-1.5 text-xs text-[#6B7280] font-medium w-full pl-0.5 border-t border-[#E5E7EB] pt-4">
                                <CalendarDays size={14} className="text-[#4CAF50]" />
                                <span>Published: {formattedDate}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3 w-full">
                                <Link href={`/recipes/details/${item._id}`} className="w-full">
                                    <Button
                                        className="w-full bg-[#FFF8F0] hover:bg-[#FF7A00] text-[#FF7A00] hover:text-white border border-[#FF7A00]/50 font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all py-2"
                                    >
                                        <Eye size={16} />
                                        View
                                    </Button>
                                </Link>

                                <AlertDialog>
                                    <Button
                                        className="w-full bg-[#FFF8F0] hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all py-2"
                                    >
                                        <Trash2 size={16} />
                                        Delete
                                    </Button>

                                    <AlertDialog.Backdrop>
                                        <AlertDialog.Container>
                                            <AlertDialog.Dialog className="sm:max-w-[400px] bg-white rounded-2xl shadow-xl">
                                                <AlertDialog.CloseTrigger className="text-gray-400 hover:text-gray-600" />
                                                <AlertDialog.Header>
                                                    <AlertDialog.Icon status="danger" className="text-red-500" />
                                                    <AlertDialog.Heading className="text-[#2D2D2D] font-bold">
                                                        Delete this recipe permanently?
                                                    </AlertDialog.Heading>
                                                </AlertDialog.Header>
                                                <AlertDialog.Body>
                                                    <p className="text-[#6B7280]">
                                                        This will permanently delete <strong>your posted recipe</strong> and all of its
                                                        data. This action cannot be undone.
                                                    </p>
                                                </AlertDialog.Body>
                                                <AlertDialog.Footer>
                                                    <Button slot="close" variant="tertiary" className="text-[#6B7280] hover:bg-gray-100 font-medium">
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleDelete(item._id)}
                                                        slot="close"
                                                        variant="danger"
                                                        className="bg-red-500 text-white hover:bg-red-600 font-bold">
                                                        Delete Recipe
                                                    </Button>
                                                </AlertDialog.Footer>
                                            </AlertDialog.Dialog>
                                        </AlertDialog.Container>
                                    </AlertDialog.Backdrop>
                                </AlertDialog>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};

export default ManageCard;