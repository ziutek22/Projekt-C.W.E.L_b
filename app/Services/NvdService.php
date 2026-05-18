<?php

namespace App\Services;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;

class NvdService
{
    private string $baseUrl = 'https://services.nvd.nist.gov/rest/json/cves/2.0';

    /**
     * Fetch CVE data from NVD API by CVE ID.
     */
    public function fetchCve(string $cveId): ?array
    {
        try {
            $response = Http::timeout(10)
                ->get($this->baseUrl, ['cveId' => $cveId]);

            if (!$response->successful()) {
                return null;
            }

            $data = $response->json();

            // Brak wynikow
            if (empty($data['vulnerabilities'])) {
                return null;
            }

            $cve = $data['vulnerabilities'][0]['cve'];

            return $this->parseCve($cve);

        } catch (ConnectionException $e) {
            return null;
        }
    }

    /**
     * Parse raw CVE data from NVD response into our format.
     */
    private function parseCve(array $cve): array
    {
        // Opis po angielsku
        $description = collect($cve['descriptions'] ?? [])
            ->firstWhere('lang', 'en')['value'] ?? null;

        // CVSS score - probujemy v3.1, potem v3.0, potem v2
        $cvssScore = $cve['metrics']['cvssMetricV31'][0]['cvssData']['baseScore']
            ?? $cve['metrics']['cvssMetricV30'][0]['cvssData']['baseScore']
            ?? $cve['metrics']['cvssMetricV2'][0]['cvssData']['baseScore']
            ?? null;

        // Severity na podstawie CVSS score
        $severity = $this->scoreToSeverity($cvssScore);

        return [
            'cve_id'      => $cve['id'],
            'title'       => $cve['id'] . ' - ' . str($description)->limit(100),
            'description' => $description,
            'cvss_score'  => $cvssScore ? round($cvssScore, 1) : null,
            'severity'    => $severity,
            'source'      => 'NVD',
        ];
    }

    /**
     * Convert CVSS score to severity level.
     */
    private function scoreToSeverity(?float $score): string
    {
        if ($score === null) return 'medium';
        if ($score >= 9.0) return 'critical';
        if ($score >= 7.0) return 'high';
        if ($score >= 4.0) return 'medium';
        return 'low';
    }
}
