import { db } from "@/db";
import Link from "next/link";
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

  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h1>{snippet.title}</h1>
        <div className="flex justify-center items-center gap-3">
          <Link
            href={`/snippet/${snippet.id}/edit`}
            className="p-3 border rounded"
          >
            Edit
          </Link>
          <button className="p-3 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 mt-4 border rounded bg-gray-200 border-gray-300">
        {snippet.code}
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
