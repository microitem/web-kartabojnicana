// W5 (AGENTS.md): every CTA on this site must point to a real, working page in
// the application repo (microitem/kartabojnicana). Centralized here so a path
// rename on the app side only needs one edit.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kartabojnicana.sk";

export const appLinks = {
  home: APP_URL,
  registerTourist: `${APP_URL}/register`,
  registerResident: `${APP_URL}/register-resident`,
  merchantLogin: `${APP_URL}/merchant/login`,
  adminLogin: `${APP_URL}/admin/login`,
};
