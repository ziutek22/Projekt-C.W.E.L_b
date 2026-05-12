<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssetFactory extends Factory
{
    public function definition(): array
    {
        return [
            'hostname'          => fake()->domainWord() . '-' . fake()->randomElement(['srv', 'ws', 'db', 'fw']),
            'ip_address'        => fake()->localIpv4(),
            'operating_system'  => fake()->randomElement(['Ubuntu 22.04', 'Windows Server 2022', 'CentOS 7', 'Debian 11', 'Windows 11']),
            'asset_type' => fake()->randomElement(['server', 'workstation', 'network_device', 'application', 'database', 'cloud_resource', 'other']),
            'criticality'       => fake()->randomElement(['low', 'medium', 'high', 'critical']),
            'owner_id'          => User::inRandomOrder()->value('id'),
            'description'       => fake()->sentence(),
            'location'          => fake()->randomElement(['DC-Warsaw', 'DC-Gdansk', 'Cloud-AWS', 'Cloud-Azure', 'Office-HQ']),
        ];
    }
}
