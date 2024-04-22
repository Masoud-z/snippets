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
