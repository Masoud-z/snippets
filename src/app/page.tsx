import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const data = await db.snippet.findMany();

  return (
    <div>
      {data.map((snippet) => (
        <Link key={snippet.id} href={`/${snippet.id}`}>
          {snippet.title}
        </Link>
      ))}
    </div>
  );
}
