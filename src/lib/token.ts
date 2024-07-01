import { clientConfig, serverConfig } from "@/lib/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";

export async function getToken() {
  return getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export const tokens = await getToken();

export const userId = tokens?.decodedToken.uid;
