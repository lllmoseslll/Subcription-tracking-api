import { config } from "dotenv";

// config( options: { path: `.env.${porcess.env.NODE_ENV || "development"}.local` });
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const PORT = process.env.PORT || 3000; // Default to 3000 if undefined
export const NODE_ENV = process.env.NODE_ENV || "development";
export const SERVER_URL = process.env.SERVER_URL;
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export const ARCJET_API_KEY = process.env.ARCJET_API_KEY;
export const ARCJET_ENV = process.env.ARCJET_ENV;
export const QSTASH_CURRENT_SIGNING_KEY = process.env.QSTASH_CURRENT_SIGNING_KEY;
export const QSTASH_URL = process.env.QSTASH_URL;
export const QSTASH_TOKEN = process.env.QSTASH_TOKEN;
export const QSTASH_NEXT_SIGNING_KEY = process.env.QSTASH_NEXT_SIGNING_KEY;
// export const { EMAIL_PASSWORD } = process.env;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
