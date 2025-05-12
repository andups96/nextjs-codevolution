import Link from "next/link";

export default async function NewArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ language: "en" | "fr" | "es" }>;
}) {
  const { articleId } = await params;
  const { language = "en" } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in language {language}</p>

      <div className="flex flex-col gap-4">
        <Link href={`/articles/${articleId}?language=en`}>English</Link>
        <Link href={`/articles/${articleId}?language=fr`}>French</Link>
        <Link href={`/articles/${articleId}?language=es`}>Spanish</Link>
      </div>
    </div>
  );
}
