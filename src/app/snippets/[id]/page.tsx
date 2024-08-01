import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const SnippetShowPage = async ({ params: { id } }: Props) => {
  const numberId = parseInt(id);
  if (Number.isNaN(numberId)) return notFound();

  const data = await db.snippet.findFirst({ where: { id: numberId } });
  if (!data) return notFound();

  return <div>{data.title}</div>;
};

export default SnippetShowPage;
