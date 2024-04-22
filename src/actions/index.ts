"use server";

import { AppRouteKeys } from "@/core/routes";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleEditChange(id: number, code: string) {
  await db.snippet.update({ where: { id }, data: { code } });
  revalidatePath(AppRouteKeys.snippets.snippet(id));
  redirect(AppRouteKeys.snippets.snippet(id));
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  revalidatePath(AppRouteKeys.home);
  redirect(AppRouteKeys.home);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3)
      return { message: "Title must be longer!" };

    if (typeof code !== "string" || code.length < 10)
      return { message: "Code must be longer!" };

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong!" };
    }
  }
  revalidatePath(AppRouteKeys.home);
  redirect(AppRouteKeys.home);
}
