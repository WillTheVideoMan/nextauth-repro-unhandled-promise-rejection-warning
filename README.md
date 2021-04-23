# NextAuth Unhandled Promise Rejection Warning Repro

This repository contains a mal-configured Fauna client. Every adapter method will reject with an error. Otherwise NextAuth is correctly configured for email sign in.

Click the sign-in button and observe a `UnhandledPromiseRejectionWarning` in the `node` console.

The client-side promise remains pending.
