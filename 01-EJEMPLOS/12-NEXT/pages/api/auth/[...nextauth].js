import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = { id: 1, name: 'Erick', email: 'yo@erick.com' };
                
                if (credentials.username === 'erick' && credentials.password === 'secret') {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({token}) {
            return token;
        },
        async session({session}) {
            return session;
        }
    }
});
