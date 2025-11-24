import tr from "@/locales/tr.json";

type TranslationKey = string;
type TranslationParams = Record<string, string | number>;

function getNestedValue(obj: any, path: string): string {
  const keys = path.split(".");
  let value: any = obj;
  
  for (const key of keys) {
    if (value && typeof value === "object") {
      // Handle array indices
      if (Array.isArray(value) && /^\d+$/.test(key)) {
        value = value[parseInt(key)];
      } else if (key in value) {
        value = value[key];
      } else {
        return path; // Return key if not found
      }
    } else {
      return path; // Return key if not found
    }
  }
  
  return typeof value === "string" ? value : path;
}

function replaceParams(text: string, params?: TranslationParams): string {
  if (!params) return text;
  
  let result = text;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), String(value));
  }
  
  return result;
}

export function t(key: TranslationKey, params?: TranslationParams): string {
  const translation = getNestedValue(tr, key);
  return replaceParams(translation, params);
}

export default t;

