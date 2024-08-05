import { deleteSnippet } from "@/core/actions";
import { AppRouteKeys } from "@/core/constants/routes";
import SnippetGetter from "@/core/reducer/SnippetGetterReducer";
import { db } from "@/db";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const SnippetShowPage = async ({ params: { id } }: Props) => {
  await new Promise((r) => setTimeout(r, 3000));
  const snippet = await SnippetGetter(id);

  const deleteAction = deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex flex-col gap-4 justify-start items-start p-4">
      <div className="flex justify-between items-center gap-3 w-full">
        <h1>{snippet.title}</h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            href={AppRouteKeys.snippets.editSnippet(snippet.id)}
            className="btn-success"
          >
            Edit
          </Link>
          <form action={deleteAction}>
            <button className="btn-error">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border border-solid rounded-lg bg-gray-300 shadow-md w-full">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({ id: snippet.id.toString() }));
}
