import { router } from '@inertiajs/react';

const PasswordController = {
    update: (data: Record<string, unknown>) =>
        router.put('/settings/password', data),
};

export default PasswordController;
