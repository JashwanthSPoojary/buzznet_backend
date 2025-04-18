import { config } from "dotenv";
config();

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string
const CALLBACK_URL = process.env.CALLBACK_URL
const SESSION_KEY = process.env.SESSION_KEY as any
const FRONTEND_URL = process.env.FRONTEND_URL
const APP_PASSWORD  = process.env.APP_PASSWORD;
const EMAIL_USER = process.env.EMAIL_USER;
const GEMINI_API = process.env.GEMINI_API as string;
const RESEND_API = process.env.RESEND_API as string;

export {
    JWT_SECRET,
    PORT,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    CALLBACK_URL,
    SESSION_KEY,
    FRONTEND_URL,
    APP_PASSWORD,
    EMAIL_USER,
    GEMINI_API,
    RESEND_API
}



