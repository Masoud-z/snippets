import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function SnippetGetter(id: string) {
  const numberId = parseInt(id);
  if (Number.isNaN(numberId)) return notFound();

  const data = await db.snippet.findFirst({ where: { id: numberId } });
  if (!data) return notFound();

  return data;
}
