import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Javier Rodriguez | Frontend Engineer",
    short_name: "Javier Rodriguez",
    description: "Portfolio de Javier Rodriguez, Tech Lead Frontend.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f0",
    theme_color: "#302c28",
    lang: "es-AR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
