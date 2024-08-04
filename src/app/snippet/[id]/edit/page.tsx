import EditSnippetForm from "@/components/EditSnippetForm";
import getSnippet from "@/core/reducer/getSnippetReducer";

interface Props {
  params: { id: string };
}

const EditSnippetPage = async ({ params: { id } }: Props) => {
  const snippet = await getSnippet(id);

  return <EditSnippetForm snippet={snippet} />;
};

export default EditSnippetPage;
