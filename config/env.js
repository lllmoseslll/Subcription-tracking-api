import { config } from "dotenv";

// config( options: { path: `.env.${porcess.env.NODE_ENV || "development"}.local` });
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const PORT = process.env.PORT || 3000; // Default to 3000 if undefined
export const NODE_ENV = process.env.NODE_ENV || "development";
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export const ARCJET_API_KEY = process.env.ARCJET_API_KEY;
export const ARCJET_ENV = process.env.ARCJET_ENV;
