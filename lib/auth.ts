import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "OpenWire Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = process.env.ADMIN_EMAIL || "admin@openwire.today";
        const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";
        const passwordMatches = credentials?.password
          ? await bcrypt.compare(credentials.password, await bcrypt.hash(password, 10))
          : false;

        if (credentials?.email === email && passwordMatches) {
          return { id: "admin", email, name: "OpenWire Admin", role: "ADMIN" };
        }

        return null;
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = "ADMIN";
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
};
