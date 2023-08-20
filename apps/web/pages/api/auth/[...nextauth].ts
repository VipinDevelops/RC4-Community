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
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        }
      }
  }

export default NextAuth(authOptions)