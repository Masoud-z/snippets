import { deleteSnippet } from "@/actions";
import { AppRouteKeys } from "@/core/routes";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const SnippetDetailPage = async ({ params }: Props) => {
  await new Promise((r) => setTimeout(r, 1000));
  const id = +params.id;
  if (isNaN(id)) return notFound();

  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  const handleDeleteSnippet = deleteSnippet.bind(null, snippet.id);
  return (
    <div className="my-5">
      <div className="flex justify-between items-center">
        <h1>{snippet.title}</h1>
        <div className="flex justify-center items-center gap-3">
          <Link
            href={AppRouteKeys.snippets.edit(snippet.id)}
            className="p-3 border rounded"
          >
            Edit
          </Link>
          <form action={handleDeleteSnippet}>
            <button type="submit" className="p-3 border rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 mt-4 border rounded bg-gray-200 border-gray-300">
        {snippet.code}
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
