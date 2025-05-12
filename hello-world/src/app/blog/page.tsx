import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Next.js App",
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Welcome to the Blog!</h1>;
}
