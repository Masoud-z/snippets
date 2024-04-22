import { AppRouteKeys } from "@/core/routes";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const RenderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={AppRouteKeys.snippets.snippet(snippet.id)}
      className="flex w-full p-3 justify-between items-center border rounded"
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));
  return (
    <div className="flex flex-col gap-6 mt-2">
      <div className="flex justify-between items-center">
        <h1>Snippets</h1>
        <Link
          href={AppRouteKeys.snippets.newSnippet}
          className="p-3 rounded border"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-4">{RenderedSnippets}</div>
    </div>
  );
}
