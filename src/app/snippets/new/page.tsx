"use client";
import { createSnippet } from "@/core/actions";
import { useFormState } from "react-dom";

const SnippetCreatePage = () => {
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
          <div className="border border-solid border-red-600 bg-red-400 text-white font-bold p-4 my-3">
            {formState.message}
          </div>
        )}
        <button type="submit" className="btn-success">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
