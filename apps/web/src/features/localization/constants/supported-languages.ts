import type {
    Language,
} from "../types/language";

export const SUPPORTED_LANGUAGES: {
    code: Language;
    label: string;
}[] = [
        { code: "en", label: "English" },
        { code: "hi", label: "हिन्दी" },
        { code: "od", label: "ଓଡ଼ିଆ" },
        { code: "ru", label: "Русский" },
];