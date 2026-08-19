import type { Metadata } from "next";

const destination = "https://javo.com.ar";
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?${new URLSearchParams({
  data: destination,
  format: "svg",
  margin: "0",
  size: "480x480",
})}`;

export const metadata: Metadata = {
  title: "Código QR",
  description: "Código QR para acceder al portfolio de Javier Rodriguez.",
  robots: { index: false, follow: false },
};

export default function QrPage() {
  return (
    <main id="main-content" className="site-container flex min-h-[100dvh] items-center py-12">
      <section className="mx-auto grid w-full max-w-lg gap-8 text-center">
        <div className="space-y-3">
          <p className="eyebrow text-accent-strong">Javier Rodriguez</p>
          <h1 className="text-4xl sm:text-5xl">Escaneá el código</h1>
          <p className="mx-auto max-w-sm text-muted-foreground">
            Abrí mi portfolio directamente desde tu celular.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm rounded-xl border bg-card p-4 shadow-[0_18px_50px_color-mix(in_oklab,var(--foreground)_12%,transparent)] sm:p-6">
          {/* External QR generator is used so the SVG stays scannable without a client-side dependency. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Código QR para abrir javo.com.ar"
            className="aspect-square w-full"
            height={480}
            src={qrCodeUrl}
            width={480}
          />
        </div>

        <a className="text-link mx-auto" href={destination}>
          javo.com.ar
        </a>
      </section>
    </main>
  );
}
