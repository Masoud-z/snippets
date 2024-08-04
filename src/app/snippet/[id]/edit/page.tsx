import getSnippet from "@/core/reducer/getSnippetReducer";

interface Props {
  params: { id: string };
}

const EditSnippetPage = ({ params: { id } }: Props) => {
  const snippet = getSnippet(id);

  return <div>EditSnippetPage</div>;
};

export default EditSnippetPage;
