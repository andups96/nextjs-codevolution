import { redirect } from "next/navigation";
// import { notFound } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  //   //throw new Error("Error in ProductReview");
  //   const random = getRandomInt(2);
  //   if (random === 1) {
  //     // Simulate an error
  //     throw new Error("Simulated error in ProductReview");
  //   }
  // Simulate fetching data based on productId and reviewsId
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 10) {
    // notFound();
    redirect("/products");
  }
  // You can use the productId and reviewsId to fetch data or render specific content
  // For example, you can fetch product review details from an API using the productId and reviewsId
  // const productReviewDetails = await fetchProductReviewDetails(productId, reviewsId);
  // return <ProductReviewDetails details={productReviewDetails} />;
  // For now, let's just return the productId and reviewsId
  return (
    <h1>
      Review ID: {reviewId} for Product ID: {productId}
    </h1>
  );
}
