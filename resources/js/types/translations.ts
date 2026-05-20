export type Locale = 'pl' | 'en';

export type TranslationValue = string | TranslationMessages;

export type TranslationMessages = {
    [key: string]: TranslationValue;
};