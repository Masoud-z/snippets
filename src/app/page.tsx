import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const data = await db.snippet.findMany();

  return (
    <div className="flex flex-col gap-3">
      {data.map((snippet) => (
        <Link key={snippet.id} href={`/snippets/${snippet.id}`}>
          {snippet.title}
        </Link>
      ))}
    </div>
  );
}
