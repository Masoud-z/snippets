import SnippetGetter from "@/core/SnippetGetter";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const SnippetShowPage = async ({ params: { id } }: Props) => {
  await new Promise((r) => setTimeout(r, 3000));
  const snippet = await SnippetGetter(id);

  return (
    <div className="flex flex-col gap-4 justify-start items-start p-4">
      <div className="flex justify-between items-center gap-3 w-full">
        <h1>{snippet.title}</h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            href={`/${snippet.id}/edit`}
            className="p-3 border border-solid rounded-lg no-underline text-black"
          >
            Edit
          </Link>
          <button className="p-3 border border-solid rounded-lg">Delete</button>
        </div>
      </div>
      <pre className="p-3 border border-solid rounded-lg bg-gray-300 shadow-md w-full">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
