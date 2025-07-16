"use server";

import { cookies } from "next/headers";

export default async function retrieveRefreshToken() {
  // store cookies to varialbe
  const cookieStore = await cookies();

  // get cookie values and return their values
  return cookieStore.get("refresh_token")?.value;
}
