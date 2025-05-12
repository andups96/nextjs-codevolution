"use client";

import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return (
        <div>
            <h1>404 - Review {reviewId} Page Not Found for Product {productId}</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}