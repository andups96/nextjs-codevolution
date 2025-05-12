export default async function Reviews({ params }: { params: Promise<{ productId: string }> }) {
    // Simulate a delay to mimic data fetching
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { productId } = await params;
    // You can use the productId to fetch data or render specific content
    // For example, you can fetch product reviews from an API using the productId
    // const productReviews = await fetchProductReviews(productId);
    // return <ProductReviews reviews={productReviews} />;
    // For now, let's just return the productId
    // and a message indicating that this is the reviews page
    // You can also use the productId to fetch reviews from an API
    // and render them here
    return (
        <div>
            <h1>Product Reviews for product : {productId}</h1>
            <p>Here are some reviews for the product.</p>
        </div>
    );
}