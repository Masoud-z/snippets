import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditSnippet = async ({ params: { id } }: Props) => {
  const snippetId = parseInt(id);
  if (Number.isNaN(snippetId)) notFound();

  const snippet = await db.snippet.findFirst({ where: { id: snippetId } });
  if (!snippet) notFound();

  return <h1>{snippet.title}</h1>;
};

export default EditSnippet;
