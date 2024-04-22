"use server";

import { AppRouteKeys } from "@/core/routes";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function handleEditChange(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({ where: { id }, data: { code } });
  redirect(AppRouteKeys.snippets.snippet(id));
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  redirect(AppRouteKeys.home);
}
