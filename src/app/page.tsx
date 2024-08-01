import { db } from "@/db";

export default async function Home() {
  const data = await db.snippet.findMany();
  return (
    <div className="">
      {data.map((snippet) => (
        <div key={snippet.title}> {snippet.title} </div>
      ))}
    </div>
  );
}
