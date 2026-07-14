import Link from "next/link";
import { Navigation } from "@/components/navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="site-container grid min-h-[calc(100dvh-4.5rem)] content-center py-16">
        <p className="font-mono text-sm text-accent">404 / Página no encontrada</p>
        <h1 className="mt-5 max-w-[10ch] text-[clamp(4rem,10vw,9rem)] leading-[0.86]">Esta ruta termina acá.</h1>
        <p className="mt-8 max-w-[48ch] text-lg text-muted-foreground">La página puede haberse movido o la dirección está incompleta.</p>
        <Link href="/" className="button-primary mt-8 w-fit">Volver al inicio</Link>
      </main>
    </>
  );
}
