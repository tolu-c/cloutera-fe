import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(token);

      return session;
    },
    async jwt({ token, account, profile }) {
      console.log(account, profile);

      return token;
    },
  },
});

export { handler as GET, handler as POST };
