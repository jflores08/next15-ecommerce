"use server";

import { cookies } from "next/headers";

export default async function storeRefreshToken(token: string) {
  // store cookies to varialbe
  const cookieStore = await cookies();

  // set the cookie store to a refreshed token
  return cookieStore.set("refresh_token", token);
}
