"use client";

import { useState } from "react";
import {
    Button,
    Card,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";

import {
    ArrowUpFromLine,
    ChefHat,
    Image as ImageIcon,
    X,
    FileText,
    Plus,
    Trash2,
} from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { imageUpload } from "@/lib/core/imageUpload";
import { postRecipe } from "@/lib/actions/recipes";

const categoryOptions = [
    "Bengali Food",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Fast Food",
    "Healthy",
    "Snacks",
    "Appetizer",
    "Beverages",
    "Vegan",
    "Seafood",
];

export default function AddRecipeForm({ user }) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [steps, setSteps] = useState([""]);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const removeSelectedImage = () => {
        setSelectedFile(null);
        setImagePreview(null);
    };

    const handleStepChange = (index, value) => {
        const updated = [...steps];
        updated[index] = value;
        setSteps(updated);
    };

    const addStep = () => {
        setSteps([...steps, ""]);
    };

    const removeStep = (index) => {
        if (steps.length === 1) return;
        setSteps(steps.filter((_, i) => i !== index));
    };

    const handleAddRecipe = async (e) => {
        e.preventDefault();
        const form = e.target;
        toast.success("Wait publishing...");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        let imgUrl =
            "https://images.unsplash.com/photo-1677442136019-21780ecad995";

        if (selectedFile) {
            const uploadedImg = await imageUpload(selectedFile);

            if (uploadedImg?.url) {
                imgUrl = uploadedImg.url;
            }
        }

        const allData = {
            title: data.title,
            shortDescription: data.shortDescription,
            description: data.description,
            image: imgUrl,
            category: data.category,
            ingredients: data.ingredients,
            steps: steps.filter((step) => step.trim() !== ""),
            cookingTime: Number(data.cookingTime),
            servings: Number(data.servings),
            nutrition: {
                calories: Number(data.calories),
                protein: Number(data.protein),
                fat: Number(data.fat),
                carbs: Number(data.carbs),
            },
        };

        const newData = {
            ...allData,
            // Default properties
            rating: 0,
            ratingSum: 0,
            reviewCount: 0,
            isFeatured: false,

            // Author info
            author: {
                userId: user?.id || null,
                name: user?.name || null,
                image: user?.image || null
            }
        }
        // console.log(newData);

        // POST API
        const res = await postRecipe(newData);

        if (res?.insertedId) {
            toast.success("Recipe Posted")

            // Clear form
            form.reset();
            setImagePreview(null);
            setSelectedFile(null);
            setSteps([""])
        }
        else {
            toast.error("Something went wrong")
        }
    };

    return (
        <Card className="bg-white border border-[#E5E7EB] rounded-3xl shadow-xl p-6 sm:p-8 mb-20">
            <Card.Header className="flex items-center gap-4 border-b border-[#E5E7EB] pb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8F0] flex items-center justify-center border border-[#FF7A00]/20">
                    <ChefHat size={24} className="text-[#FF7A00]" />
                </div>

                <div>
                    <Card.Title className="text-2xl font-bold text-[#2D2D2D] text-center">
                        Add New Recipe
                    </Card.Title>
                    <Card.Description className="text-[#6B7280] text-sm mt-0.5">
                        Share your recipe with the RecipeMaster community.
                    </Card.Description>
                </div>
            </Card.Header>

            <Card.Content className="pt-8">
                <form onSubmit={handleAddRecipe} className="space-y-6">
                    <TextField name="title" className="w-full" isRequired={true}>
                        <Label className="text-sm font-semibold text-[#2D2D2D] mb-2 block">
                            Recipe Title
                        </Label>
                        <Input
                            placeholder="Grilled Salmon with Avocado Salsa"
                            className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all h-12 px-4 outline-none font-medium"
                        />
                    </TextField>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="shortDescription" className="text-sm font-semibold text-[#2D2D2D]">
                            Short Description
                        </Label>
                        <TextArea
                            required
                            id="shortDescription"
                            name="shortDescription"
                            rows={2}
                            placeholder="A one or two line summary of your recipe..."
                            className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all p-4 outline-none font-medium"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="description" className="text-sm font-semibold text-[#2D2D2D]">
                            Full Description
                        </Label>
                        <TextArea
                            required
                            id="description"
                            name="description"
                            rows={5}
                            placeholder="Describe your recipe in detail..."
                            className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all p-4 outline-none font-medium"
                        />
                    </div>

                    {/* Category */}
                    <Select
                        name="category"
                        className="w-full"
                        placeholder="Select category"
                        isRequired={true}
                    >
                        <Label className="text-sm font-semibold text-[#2D2D2D] mb-2 block">Category</Label>
                        <Select.Trigger className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] rounded-xl h-12 px-4 flex items-center justify-between focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all outline-none font-medium">
                            <Select.Value />
                            <Select.Indicator className="text-[#6B7280]" />
                        </Select.Trigger>
                        <Select.Popover className="bg-white border border-[#E5E7EB] rounded-xl shadow-xl mt-1">
                            <ListBox className="p-1">
                                {categoryOptions.map((item) => (
                                    <ListBox.Item
                                        key={item}
                                        id={item}
                                        textValue={item}
                                        className="text-[#2D2D2D] hover:bg-[#FF7A00] hover:text-white px-3 py-2 rounded-lg cursor-pointer transition-colors font-medium"
                                    >
                                        {item}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="ingredients" className="text-sm font-semibold text-[#2D2D2D]">
                            Ingredients
                        </Label>
                        <TextArea
                            required
                            id="ingredients"
                            name="ingredients"
                            rows={3}
                            placeholder="Salmon, Avocado, Lime, Cilantro, Red Onion, Olive Oil, Salt, Pepper"
                            className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all p-4 outline-none font-medium"
                        />
                        <p className="text-xs text-[#6B7280]">
                            Separate each ingredient with a comma.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-semibold text-[#2D2D2D]">
                                Cooking Steps
                            </Label>
                            <button
                                type="button"
                                onClick={addStep}
                                className="flex items-center gap-1.5 text-sm text-[#FF7A00] hover:text-[#FF7A00]/80 font-bold transition-colors"
                            >
                                <Plus size={16} />
                                Add Step
                            </button>
                        </div>

                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-8 h-12 rounded-xl bg-[#FFF8F0] border border-[#E5E7EB] flex items-center justify-center text-sm font-bold text-[#FF7A00] shrink-0">
                                    {index + 1}
                                </div>
                                <TextArea
                                    value={step}
                                    onChange={(e) => handleStepChange(index, e.target.value)}
                                    rows={2}
                                    placeholder={`Describe step ${index + 1}...`}
                                    className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all p-3 outline-none font-medium"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeStep(index)}
                                    disabled={steps.length === 1}
                                    className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0 mt-1"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <TextField name="cookingTime" className="w-full" isRequired={true}>
                            <Label className="text-sm font-semibold text-[#2D2D2D] mb-2 block">
                                Cooking Time (minutes)
                            </Label>
                            <Input
                                type="number"
                                min={1}
                                placeholder="30"
                                className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all h-12 px-4 outline-none font-medium"
                            />
                        </TextField>

                        <TextField name="servings" className="w-full" isRequired={true}>
                            <Label className="text-sm font-semibold text-[#2D2D2D] mb-2 block">
                                Servings
                            </Label>
                            <Input
                                type="number"
                                min={1}
                                placeholder="4"
                                className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all h-12 px-4 outline-none font-medium"
                            />
                        </TextField>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Label className="text-sm font-bold text-[#4CAF50] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
                            Nutrition (per serving)
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            <TextField name="calories" className="w-full" isRequired={true}>
                                <Label className="text-xs font-semibold text-[#6B7280] mb-2 block">
                                    Calories
                                </Label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="350"
                                    className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all h-12 px-4 outline-none font-medium"
                                />
                            </TextField>

                            <TextField name="protein" className="w-full" isRequired={true}>
                                <Label className="text-xs font-semibold text-[#6B7280] mb-2 block">
                                    Protein (g)
                                </Label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="34"
                                    className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all h-12 px-4 outline-none font-medium"
                                />
                            </TextField>

                            <TextField name="fat" className="w-full" isRequired={true}>
                                <Label className="text-xs font-semibold text-[#6B7280] mb-2 block">
                                    Fat (g)
                                </Label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="20"
                                    className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all h-12 px-4 outline-none font-medium"
                                />
                            </TextField>

                            <TextField name="carbs" className="w-full" isRequired={true}>
                                <Label className="text-xs font-semibold text-[#6B7280] mb-2 block">
                                    Carbs (g)
                                </Label>
                                <Input
                                    type="number"
                                    min={0}
                                    placeholder="5"
                                    className="w-full bg-[#FFF8F0] border border-[#E5E7EB] text-[#2D2D2D] placeholder-[#6B7280] rounded-xl focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all h-12 px-4 outline-none font-medium"
                                />
                            </TextField>
                        </div>
                    </div>

                    <div className="space-y-3 relative">
                        <Label htmlFor="image" className="text-sm font-semibold text-[#2D2D2D]">
                            Recipe Image
                        </Label>

                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute w-0 h-0 opacity-0 pointer-events-none"
                        />

                        {!imagePreview ? (
                            <label
                                htmlFor="image"
                                className="border-2 border-dashed border-[#E5E7EB] hover:border-[#FF7A00] rounded-2xl bg-[#FFF8F0] transition-all duration-300 cursor-pointer p-8 flex flex-col items-center justify-center gap-3"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#E5E7EB]">
                                    <ImageIcon size={22} className="text-[#FF7A00]" />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-base font-bold text-[#2D2D2D] flex items-center justify-center gap-2">
                                        <ArrowUpFromLine size={16} className="text-[#FF7A00]" />
                                        Upload Recipe Photo
                                    </h3>
                                    <p className="text-xs text-[#6B7280] mt-1">
                                        PNG, JPG, JPEG supported
                                    </p>
                                </div>
                            </label>
                        ) : (
                            <div className="border border-[#E5E7EB] bg-[#FFF8F0] rounded-2xl p-4 space-y-4 relative">
                                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#E5E7EB]">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <FileText size={20} className="text-[#4CAF50] shrink-0" />
                                        <span className="text-sm text-[#2D2D2D] font-semibold truncate">
                                            {selectedFile?.name}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeSelectedImage}
                                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-[#E5E7EB] max-h-[350px] bg-white flex justify-center items-center">
                                    <Image
                                        src={imagePreview}
                                        width={500}
                                        height={500}
                                        alt="Recipe Preview"
                                        className="object-contain w-full h-full max-h-[350px]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white text-base font-bold rounded-xl shadow-md shadow-[#FF7A00]/10 transition-all active:scale-[0.99] border-0 outline-none cursor-pointer"
                    >
                        Publish Recipe
                    </Button>
                </form>
            </Card.Content>
        </Card>
    );
}