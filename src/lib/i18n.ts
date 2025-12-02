import en from "../locales/en.json";
import es from "../locales/es.json";
import type { Translations } from "./types";

export type Locale = "en" | "es";

const TRANSLATIONS: Record<Locale, Translations> = {
  en: en as unknown as Translations,
  es: es as unknown as Translations,
};

export function getTranslations(locale: Locale = "en"): Translations {
  return TRANSLATIONS[locale] ?? TRANSLATIONS["en"];
}

export default getTranslations;
