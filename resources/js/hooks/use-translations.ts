import { usePage } from '@inertiajs/react';
import type { Locale, TranslationMessages, TranslationValue } from '@/types';

function getNestedTranslation(
    translations: TranslationMessages,
    key: string,
): TranslationValue | undefined {
    return key
        .split('.')
        .reduce<TranslationValue | undefined>((current, segment) => {
            if (!current || typeof current === 'string') {
                return undefined;
            }

            return current[segment];
        }, translations);
}

export function useTranslations() {
    const { locale, translations } = usePage().props;

    const t = (key: string): string => {
        const value = getNestedTranslation(translations, key);

        if (typeof value === 'string') {
            return value;
        }

        return key;
    };

    return {
        locale: locale as Locale,
        translations,
        t,
    };
}
