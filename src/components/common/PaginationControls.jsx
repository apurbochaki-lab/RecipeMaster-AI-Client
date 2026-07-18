"use client";

import { Pagination } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const PaginationControls = ({ currentPage, totalPages, }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page)

        router.push(`${pathname}?${params.toString()}`);
    };


    const getPageNumbers = () => {
        const pages = [];

        pages.push(1);

        if (currentPage > 3) {
            pages.push("ellipsis");
        }


        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);


        for (let i = start; i <= end; i++) {
            pages.push(i);
        }


        if (currentPage < totalPages - 2) {
            pages.push("ellipsis");
        }


        if (totalPages > 1) {
            pages.push(totalPages);
        }


        return pages;
    };


    return (
        <div className="
            w-full
            flex
            justify-center
            py-10
        ">
            <div className="
                rounded-2xl
                border
                border-[#E5E7EB]
                bg-white
                px-4
                py-3
                shadow-sm
            ">

                <Pagination>

                    <Pagination.Content>


                        {/* Previous Button */}
                        <Pagination.Item>

                            <Pagination.Previous
                                className="
                                    bg-[#FFF8F0]
                                    border
                                    border-[#E5E7EB]
                                    text-[#FF7A00]
                                    hover:bg-[#FF7A00]
                                    hover:text-white
                                    transition-all
                                    duration-300
                                    font-semibold
                                "
                                isDisabled={currentPage === 1}
                                onPress={() =>
                                    handlePageChange(
                                        currentPage - 1
                                    )
                                }
                            >

                                <Pagination.PreviousIcon />

                                <span className="
                                    hidden
                                    sm:inline
                                    font-semibold
                                ">
                                    Previous
                                </span>

                            </Pagination.Previous>

                        </Pagination.Item>



                        {/* Page Numbers */}
                        {
                            getPageNumbers().map((p, i) =>
                                p === "ellipsis" ? (

                                    <Pagination.Item
                                        key={`ellipsis-${i}`}
                                    >
                                        <Pagination.Ellipsis
                                            className="
                                                text-[#6B7280]
                                            "
                                        />
                                    </Pagination.Item>

                                ) : (

                                    <Pagination.Item key={p}>

                                        <Pagination.Link
                                            className={`
                                                font-semibold
                                                transition-all
                                                duration-300
                                                rounded-xl

                                                ${p === currentPage
                                                    ?
                                                    `
                                                    bg-[#FF7A00]
                                                    text-white
                                                    shadow-[0_4px_10px_rgba(255,122,0,0.3)]
                                                    `
                                                    :
                                                    `
                                                    text-[#6B7280]
                                                    hover:bg-[#FFF8F0]
                                                    hover:text-[#FF7A00]
                                                    `
                                                }
                                            `}
                                            isActive={
                                                p === currentPage
                                            }
                                            onPress={() =>
                                                handlePageChange(p)
                                            }
                                        >

                                            {p}

                                        </Pagination.Link>

                                    </Pagination.Item>

                                )
                            )
                        }



                        {/* Next Button */}
                        <Pagination.Item>

                            <Pagination.Next
                                className="
                                    bg-[#FFF8F0]
                                    border
                                    border-[#E5E7EB]
                                    text-[#FF7A00]
                                    hover:bg-[#FF7A00]
                                    hover:text-white
                                    transition-all
                                    duration-300
                                    font-semibold
                                "
                                isDisabled={
                                    currentPage === totalPages
                                }
                                onPress={() =>
                                    handlePageChange(
                                        currentPage + 1
                                    )
                                }
                            >

                                <span className="
                                    hidden
                                    sm:inline
                                    font-semibold
                                ">
                                    Next
                                </span>


                                <Pagination.NextIcon />

                            </Pagination.Next>

                        </Pagination.Item>

                    </Pagination.Content>

                </Pagination>

            </div>
        </div>
    );
};


export default PaginationControls;