<?php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\Threat;
use App\Models\User;
use App\Models\Vulnerability;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        public function run(): void
        {
            // 0. Role i uprawnienia
            $this->call(RoleSeeder::class);

            // 1. Najpierw userzy
            $users = User::factory(5)->create();

            // reszta bez zmian...
        }

        // 1. Najpierw userzy
        $users = User::factory(5)->create();

        // 2. Encje
        $vulnerabilities = Vulnerability::factory(20)->create();
        $threats         = Threat::factory(10)->create();
        $assets          = Asset::factory(15)->create();

        // 3. Relacje pivot
        $vulnerabilities->each(function ($vuln) use ($threats, $assets) {
            $vuln->threats()->attach(
                $threats->random(rand(1, 3))->pluck('id')
            );
            $vuln->assets()->attach(
                $assets->random(rand(1, 4))->pluck('id')->mapWithKeys(fn($id) => [
                    $id => ['detected_at' => now(), 'remediation_status' => 'open']
                ])
            );
        });
    }
}
