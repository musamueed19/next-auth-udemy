import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          return null;
        } catch (e) {
          throw new Error(e);
        }
      },
    }),
  ],
});

export { authHandler as GET, authHandler as POST };





{/*
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Implement authorization logic here
          // Example:
          if (credentials.email === "user@example.com" && credentials.password === "password") {
            return { id: 1, name: "User", email: "user@example.com" };
          }
          return null; // Unauthorized
        } catch (e) {
          throw new Error(e.message || "Authorization failed");
        }
      },
    }),
  ],
};

const authHandler = NextAuth(authOptions);

export { authHandler as POST }; // Only export POST
export default authHandler; // Default export for configuration
*/}