"use client";

import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

interface Props {}

const SnippetCreatePage = (props: Props) => {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Crete Snippet </h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            className="border rounded w-full p-2"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code:
          </label>
          <textarea
            className="border rounded w-full p-2"
            name="code"
            id="code"
          />
        </div>
        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}
        <button type="submit" className="rounded bg-blue-300 p-2">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
