import type { Auth } from '@/types/auth';
import type { Locale, TranslationMessages } from '@/types/translations';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            locale: Locale;
            sidebarOpen: boolean;
            translations: TranslationMessages;
            [key: string]: unknown;
        };
    }
}
