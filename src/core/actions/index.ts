"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { AppRouteKeys } from "../constants/routes";
import { revalidatePath } from "next/cache";

export async function updateSnippet(id: number, code: string) {
  await db.snippet.update({ where: { id }, data: { code } });
  revalidatePath(AppRouteKeys.snippets.showSnippet(id));
  redirect(AppRouteKeys.snippets.showSnippet(id));
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
    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title should be longer!" };
    }
    if (typeof code !== "string" || code.length < 10) {
      return { message: "Code should be longer!" };
    }

    const snippet = await db.snippet.create({
      data: { title, code },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong!" };
    }
  }
  revalidatePath(AppRouteKeys.home);
  redirect("/");
}
