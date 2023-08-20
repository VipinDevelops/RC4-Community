import NextAuth from "next-auth"
import TwitchProvider from "next-auth/providers/twitch";

// import { authOptions } from "../../../lib/session"
// import { authOptions } from "@palanikannan1437/rc4community-auth"

export const authOptions = {
    providers: [
        TwitchProvider({
          clientId: process.env.TWITCH_CLIENT_ID as string,
          clientSecret: process.env.TWITCH_CLIENT_SECRET as string
        })
      ],
      callbacks: {
        async session({ session, token, user }) {
          session.user.id = token.id;
          session.accessToken = token.accessToken;
          return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          if (user) {
            token.id = user.id;
          }
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
      },
  }

export default NextAuth(authOptions)