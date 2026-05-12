<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ThreatFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'          => fake()->words(3, true),
            'type'          => fake()->randomElement(['malware', 'phishing', 'apt', 'ransomware', 'insider']),
            'severity'      => fake()->randomElement(['low', 'medium', 'high', 'critical']),
            'description'   => fake()->paragraph(),
            'source'        => fake()->randomElement(['MITRE ATT&CK', 'Internal', 'OSINT', 'Threat Feed']),
            'status'        => fake()->randomElement(['active', 'mitigated', 'monitoring']),
            'first_seen_at' => fake()->dateTimeBetween('-2 years', '-6 months'),
            'last_seen_at'  => fake()->dateTimeBetween('-6 months', 'now'),
        ];
    }
}
