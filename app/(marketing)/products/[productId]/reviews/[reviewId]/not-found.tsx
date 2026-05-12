"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h1>Oops something went wrong!</h1>
            <h2>
                Review {reviewId} for Product {productId} not found
            </h2>
        </div>
    )
}