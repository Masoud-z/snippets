import { AppRouteKey } from "@/core/constants/routes";
import getSnippet from "@/core/reducer/getSnippetReducer";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const SnippetShowPage = async ({ params: { id } }: Props) => {
  const delay = await new Promise((res) => {
    setTimeout(res, 1000);
  });

  const snippet = await getSnippet(id);

  return (
    <div className="flex flex-col gap-4 justify-start items-start p-5">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold">{snippet.title}</h1>
        <div className="flex justify-center items-center gap-3">
          <Link
            href={AppRouteKey.snippets.editSnippet(snippet.id)}
            className="btn"
          >
            Edit
          </Link>
          <button className="btn">Delete</button>
        </div>
      </div>
      <pre className="w-full border border-solid rounded-xl bg-slate-300 shadow p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
