<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use App\Models\Threat;
use App\Models\Vulnerability;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $stats = Cache::remember('dashboard.stats', 300, function () {
            return [
                'vulnerabilities_count' => Vulnerability::count(),
                'threats_count'         => Threat::count(),
                'assets_count'          => Asset::count(),
            ];
        });

        $bySeverity = Cache::remember('dashboard.vulnerabilities_by_severity', 300, function () {
            return Vulnerability::query()
                ->selectRaw('severity, COUNT(*) as count')
                ->groupBy('severity')
                ->pluck('count', 'severity');
        });

        $byStatus = Cache::remember('dashboard.vulnerabilities_by_status', 300, function () {
            return Vulnerability::query()
                ->selectRaw('status, COUNT(*) as count')
                ->groupBy('status')
                ->pluck('count', 'status');
        });

        // Recent items celowo bez cache - maja byc zawsze aktualne
        $recentVulnerabilities = Vulnerability::with('assignedUser')
            ->latest()
            ->take(5)
            ->get(['id', 'title', 'severity', 'status', 'assigned_to', 'created_at']);

        $recentThreats = Threat::latest()
            ->take(5)
            ->get(['id', 'name', 'type', 'severity', 'status', 'created_at']);

        $unassignedVulnerabilitiesCount = Vulnerability::query()
            ->whereNull('assigned_to')
            ->count();

        $criticalAlerts = Vulnerability::query()
            ->where('severity', 'critical')
            ->where('status', 'open')
            ->orderByDesc('cvss_score')
            ->latest()
            ->take(3)
            ->get(['id', 'title', 'cve_id', 'cvss_score', 'created_at']);

        return Inertia::render('dashboard', [
            'stats'                        => $stats,
            'vulnerabilities_by_severity'  => $bySeverity,
            'vulnerabilities_by_status'    => $byStatus,
            'recent_vulnerabilities'       => $recentVulnerabilities,
            'recent_threats'               => $recentThreats,
            'unassigned_vulnerabilities'   => $unassignedVulnerabilitiesCount,
            'critical_open_vulnerabilities' => $criticalAlerts,
        ]);
    }
}
