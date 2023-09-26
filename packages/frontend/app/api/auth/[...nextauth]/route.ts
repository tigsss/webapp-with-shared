import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'login',
      async authorize(credentials) {
        // Code to validate credentials and return a user object
        return {
          id: '123',
          name: 'John Doe',
          email: 'john@doe.com',
        };
      },
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
    }),
  ],
});
