import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { connectToMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import NextAuth from "next-auth/next";
import credentials from "next-auth/providers/credentials";
import { Alert } from "@mui/material";


export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: 'credentials',

      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: "Password", type: 'password' },
      },

      async authorize(credentials) {
        await connectToMongoDB();
        const user = await User.findOne({
          username: credentials?.username,
        }).select("+password");

        if (!user) {
          
        };

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) {
          alert("Enter correct password")
        };
        return user;
      }



    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login'
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };