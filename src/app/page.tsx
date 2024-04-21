import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const RenderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>{snippet.title}</div>
  ));
  return <div>{RenderedSnippets}</div>;
}
