import { router } from '@inertiajs/react';

const SecurityController = {
    update: (data: Record<string, unknown>) =>
        router.put('/settings/security', data),
};

export default SecurityController;
