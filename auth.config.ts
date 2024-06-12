import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

export default {
    providers: [GitHub],
    } satisfies NextAuthConfig