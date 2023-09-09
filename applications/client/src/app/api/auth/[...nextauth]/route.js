import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const authOptions = {
   adapter: PrismaAdapter(prisma),
   session: {
      strategy: 'jwt',
   },
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
   ],
   callbacks: {
      async signIn(options) {
         const racerCode = randomstring.generate({
            length: 4,
            charset: 'numeric',
         });
         options.user.email = `${options.user.id}@example.com`;
         options.user.name = `Racer ${racerCode}`;
         return true;
      },
      async jwt({ token, user }) {
         const dbUser = await prisma.user.findFirst({
            where: {
               email: token.email,
            },
         });

         if (!dbUser) {
            if (user) {
               token.id = user.id;
            }
            return token;
         }

         return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            role: dbUser.role,
            picture: dbUser.image,
         };
      },
      async session({ token, session }) {
         if (token) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.role = token.role;
            session.user.image = token.picture;
         }

         return session;
      },
   },
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
