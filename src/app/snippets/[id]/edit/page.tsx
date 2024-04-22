import EditSnippetForm from "@/components/EditSnippet/EditSnippetForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const SnippetEditPage = async ({ params }: Props) => {
  const id = +params.id;
  if (isNaN(id)) return notFound();
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
