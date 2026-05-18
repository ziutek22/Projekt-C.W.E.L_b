<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        // Resetuj cache uprawnien
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Uprawnienia
        $permissions = [
            'view vulnerabilities',
            'create vulnerabilities',
            'edit vulnerabilities',
            'delete vulnerabilities',
            'view threats',
            'create threats',
            'edit threats',
            'delete threats',
            'view assets',
            'create assets',
            'edit assets',
            'delete assets',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Role
        $admin = Role::firstOrCreate(['name' => 'admin']);
        $analyst = Role::firstOrCreate(['name' => 'analyst']);
        $viewer = Role::firstOrCreate(['name' => 'viewer']);

        // Admin ma wszystko
        $admin->givePermissionTo(Permission::all());

        // Analyst moze wszystko oprocz usuwania
        $analyst->givePermissionTo([
            'view vulnerabilities', 'create vulnerabilities', 'edit vulnerabilities',
            'view threats', 'create threats', 'edit threats',
            'view assets', 'create assets', 'edit assets',
        ]);

        // Viewer tylko ogląda
        $viewer->givePermissionTo([
            'view vulnerabilities',
            'view threats',
            'view assets',
        ]);
    }
}
