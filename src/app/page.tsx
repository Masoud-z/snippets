import { AppRouteKey } from "@/core/constants/routes";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const data = await db.snippet.findMany();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end items-center">
        <Link className="btn" href={AppRouteKey.snippets.addNewSnippet}>
          New Snippet
        </Link>
      </div>
      {data.map((snippet) => (
        <Link
          key={snippet.id}
          href={AppRouteKey.snippets.showSnippet(snippet.id)}
        >
          {snippet.title}
        </Link>
      ))}
    </div>
  );
}
