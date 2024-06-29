// export default async function Home() {
//   const tokens = await getTokens(cookies(), {
//     apiKey: clientConfig.apiKey,
//     cookieName: serverConfig.cookieName,
//     cookieSignatureKeys: serverConfig.cookieSignatureKeys,
//     serviceAccount: serverConfig.serviceAccount,
//   });

//   if (!tokens) {
//     console.log("Not found")
//     notFound();
//   }
//   const texts = ["forms.", "websites.", "surveys."];
//   return (
//     <div className="flex flex-col items-center justify-center flex-1 gap-10">
//       <h2 className="h-16 lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
//         It&rsquo;s not just about creating <Typewriter text={texts} className="text-primary underline"></Typewriter>
//       </h2>
//       <div className="space-x-7">
//         <Button size="home">Create forms</Button>
//         <Button variant="outline" size="home">Demo</Button>
//         <p>
//           Only <strong>{tokens?.decodedToken.email}</strong> holds the magic key to this kingdom!"
//         </p>
//       </div>
//     </div>
//   );
// }

import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { clientConfig, serverConfig } from "@/lib/config";
import HomePage from "./HomePage";

export default async function Home() {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    notFound();
  }

  return <HomePage email={tokens?.decodedToken.email} />;
}
