import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: "",
            clientSecret: ""
        }),
        GoogleProvider({
            clientId: "",
            clientSecret: ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }