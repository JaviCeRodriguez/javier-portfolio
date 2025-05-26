"use client";

import { ui, defaultLang } from "@/i18n/config";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function translatePath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split("/");

  // Si la URL tiene un idioma, removerlo para obtener la ruta base
  if (parts[1] && parts[1] in ui) {
    return "/" + parts.slice(2).join("/");
  }

  return pathname;
}
