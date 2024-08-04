"use client";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";

interface Props {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: Props) => {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
      />
    </div>
  );
};

export default EditSnippetForm;
