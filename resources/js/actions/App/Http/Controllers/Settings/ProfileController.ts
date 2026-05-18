import { router } from '@inertiajs/react';

const ProfileController = {
    update: (data: Record<string, unknown>) =>
        router.patch('/settings/profile', data),
    destroy: () => router.delete('/settings/profile'),
};

export default ProfileController;
