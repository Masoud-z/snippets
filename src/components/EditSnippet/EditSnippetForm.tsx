"use client";
import { handleEditChange } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";
interface Props {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: Props) => {
  const [code, setCode] = useState(snippet.code);
  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  const handleSubmitChange = handleEditChange.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        language="typescript"
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={handleSubmitChange}>
        <button type="submit" className="p-3 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
