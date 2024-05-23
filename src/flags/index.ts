import { unstable_flag as flag } from "@vercel/flags/next";

export const showExperiences = flag({
  key: "experiences",
  async decide() {
    return process.env.EXPERIENCES_ENABLED === "1";
  },
});
