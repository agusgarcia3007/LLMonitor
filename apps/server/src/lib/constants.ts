export const TRUSTED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:4444",
  "https://llmonitor-nine.vercel.app",
  "https://llm-moonitor-production.up.railway.app",
  "https://llmonitor.io",
  "https://www.llmonitor.io",
  "https://api.llmonitor.io",
  "http://localhost:3000",
];

export const CORS_OPTIONS = {
  origin: TRUSTED_ORIGINS,
  allowHeaders: ["Content-Type", "Authorization", "x-captcha-response"],
  allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
};

export const siteData = {
  title: "LLMonitor",
  url: "https://llmonitor.io",
};
