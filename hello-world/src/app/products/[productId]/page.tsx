import { Metadata } from 'next';

type props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
    const productId = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${productId}`);
        }, 10)
    });
    return {
        title: `Product ${title}`,
        description: `Details about product ${productId}`
    };
};


export default async function ProductId({ params }: { params: Promise<{ productId: string }> }) {
    // The params are a promise, so we need to await it
    const productId = (await params).productId;
    // You can use the productId to fetch data or render specific content
    // For example, you can fetch product details from an API using the productId
    // const productDetails = await fetchProductDetails(productId);
    // return <ProductDetails details={productDetails} />;
    // For now, let's just return the productId
    return <h1>Product ID : {productId}</h1>;
}