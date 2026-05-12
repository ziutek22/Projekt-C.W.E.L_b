<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vulnerability;
use App\Models\Threat;
use App\Models\Asset;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'vulnerabilities_count' => Vulnerability::count(),
                'threats_count'         => Threat::count(),
                'assets_count'          => Asset::count(),
            ],
            'vulnerabilities_by_severity' => Vulnerability::query()
                ->selectRaw('severity, COUNT(*) as count')
                ->groupBy('severity')
                ->pluck('count', 'severity'),
            'vulnerabilities_by_status' => Vulnerability::query()
                ->selectRaw('status, COUNT(*) as count')
                ->groupBy('status')
                ->pluck('count', 'status'),
            'recent_vulnerabilities' => Vulnerability::with('assignedUser')
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'severity', 'status', 'assigned_to', 'created_at']),
            'recent_threats' => Threat::latest()
                ->take(5)
                ->get(['id', 'name', 'type', 'severity', 'status', 'created_at']),
        ]);
    }
}
