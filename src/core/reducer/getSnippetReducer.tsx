import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function getSnippet(id: string) {
  const snippetId = parseInt(id);
  if (Number.isNaN(snippetId)) notFound();

  const snippet = await db.snippet.findFirst({ where: { id: snippetId } });
  if (!snippet) notFound();

  return snippet;
}
