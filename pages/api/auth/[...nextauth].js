import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import faunadb from "faunadb";
import FaunaAdapter from "../../../auth/fauna-adapter";

const faunaClient = new faunadb.Client({
  secret: "invalid_secret",
});

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: FaunaAdapter.Adapter({ faunaClient }),
});
