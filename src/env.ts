import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        // Database
        DATABASE_URL: z.string().url(),

        // Email Configuration (Resend)
        RESEND_API_KEY: z.string().min(1),
        FROM_EMAIL: z.string().email(),
        ADMIN_EMAIL: z.string().email(),

        // Application Settings
        NEXTAUTH_SECRET: z.string().min(1),
        NEXTAUTH_URL: z.string().url().optional(),

        // Contact Information
        CONTACT_PHONE: z.string().optional(),

        // Node Environment
        NODE_ENV: z
            .enum(["development", "test", "production"])
            .default("development"),
    },

    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        NEXT_PUBLIC_APP_URL: z.string().url(),
        NEXT_PUBLIC_SITE_NAME: z.string().default("Gateling"),
        NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional(),
        NEXT_PUBLIC_CONTACT_PHONE: z.string().optional(),
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        // Server-side
        DATABASE_URL: process.env.DATABASE_URL,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        FROM_EMAIL: process.env.FROM_EMAIL,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        CONTACT_PHONE: process.env.CONTACT_PHONE,
        NODE_ENV: process.env.NODE_ENV,

        // Client-side
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
        NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        NEXT_PUBLIC_CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    },

    /**
     * Run `build` or `dev` with SKIP_ENV_VALIDATION to skip env validation. This is especially
     * useful for Docker builds.
     */
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,

    /**
     * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
     * `SOME_VAR=''` will throw an error.
     */
    emptyStringAsUndefined: true,
});
