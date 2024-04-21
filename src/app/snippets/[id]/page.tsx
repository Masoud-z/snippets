import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const SnippetDetailPage = async ({ params: { id } }: Props) => {
  await new Promise((r) => setTimeout(r, 1000));

  if (isNaN(+id)) return notFound();

  const snippet = await db.snippet.findFirst({
    where: { id: +id },
  });

  if (!snippet) return notFound();

  return <div>{snippet.title}</div>;
};

export default SnippetDetailPage;
