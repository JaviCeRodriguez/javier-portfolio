import { navigate } from "astro:transitions/client";
import { languages } from "@/i18n/config";
import { translatePath } from "@/i18n/utils";
import { Switch } from "./switch";
import { Label } from "./label";

interface LanguageSwitcherProps {
  currentLang: keyof typeof languages;
  currentRoute: string;
}

export function LanguageSwitcher({
  currentLang,
  currentRoute,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="language-switch" className="text-lg">
        {currentLang === "es" ? "🇦🇷" : "🇺🇸"}
      </Label>
      <Switch
        id="language-switch"
        className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-red-500"
        checked={currentLang === "es"}
        onCheckedChange={() => {
          const newLang = currentLang === "es" ? "en" : "es";
          navigate(translatePath(currentRoute, newLang));
        }}
      />
    </div>
  );
}
