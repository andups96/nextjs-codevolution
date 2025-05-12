function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //throw new Error("Error in ProductReview");
  const random = getRandomInt(2);
  if (random === 1) {
    // Simulate an error
    throw new Error("Simulated error in Product Layout");
  }
  return (
    <div>
      <h1>Product Detail Layout</h1>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
}
