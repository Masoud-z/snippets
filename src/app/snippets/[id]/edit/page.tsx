import EditSnippetForm from "@/components/EditSnippetForm";
import SnippetGetter from "@/core/SnippetGetter";

interface Props {
  params: { id: string };
}

const EditSnippet = async ({ params: { id } }: Props) => {
  const snippet = await SnippetGetter(id);
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
