"use client";
import { updateSnippet } from "@/core/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";

interface Props {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: Props) => {
  const [code, setCode] = useState(snippet.code);
  const saveSnippet = updateSnippet.bind(null, snippet.id, code);

  return (
    <form action={saveSnippet}>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={(value: string = "") => setCode(value)}
      />
      <button type="submit" className="btn-success">
        Save
      </button>
    </form>
  );
};

export default EditSnippetForm;
