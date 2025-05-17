import NextAuth from "next-auth";
import CredentialProviders  from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [CredentialProviders({
    name:"credentials",
    credentials:{
      username:{label:"username",type:"text", placeholder:"username"}
    }
  })],
});
