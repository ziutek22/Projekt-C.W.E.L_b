import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

interface Props {
    stats: {
        vulnerabilities_count: number;
        threats_count: number;
        assets_count: number;
    };
    vulnerabilities_by_severity: Record<string, number>;
    vulnerabilities_by_status: Record<string, number>;
    recent_vulnerabilities: Array<{
        id: number;
        title: string;
        severity: string;
        status: string;
        created_at: string;
    }>;
    recent_threats: Array<{
        id: number;
        name: string;
        type: string;
        severity: string;
        status: string;
        created_at: string;
    }>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: dashboard() },
];

const severityColor: Record<string, string> = {
    critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    high:     'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    medium:   'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    low:      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

export default function Dashboard({ stats, vulnerabilities_by_severity, vulnerabilities_by_status, recent_vulnerabilities, recent_threats }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-4">

                {/* Liczniki */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                        { label: 'Vulnerabilities', count: stats.vulnerabilities_count, href: '/vulnerabilities' },
                        { label: 'Threats',          count: stats.threats_count,         href: '/threats' },
                        { label: 'Assets',           count: stats.assets_count,          href: '/assets' },
                    ].map((item) => (
                        <Link key={item.label} href={item.href}
                              className="rounded-xl border border-sidebar-border/70 p-6 hover:bg-muted transition-colors dark:border-sidebar-border">
                            <div className="text-3xl font-bold">{item.count}</div>
                            <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                        </Link>
                    ))}
                </div>

                {/* Severity + Status */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="font-semibold mb-4">Vulnerabilities by Severity</h2>
                        <div className="flex flex-col gap-2">
                            {Object.entries(vulnerabilities_by_severity).map(([severity, count]) => (
                                <div key={severity} className="flex items-center justify-between">
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${severityColor[severity] ?? 'bg-gray-100 text-gray-800'}`}>
                                        {severity}
                                    </span>
                                    <span className="font-mono font-bold">{count}</span>
                                </div>
                            ))}
                            {Object.keys(vulnerabilities_by_severity).length === 0 && (
                                <p className="text-sm text-muted-foreground">No data yet.</p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="font-semibold mb-4">Vulnerabilities by Status</h2>
                        <div className="flex flex-col gap-2">
                            {Object.entries(vulnerabilities_by_status).map(([status, count]) => (
                                <div key={status} className="flex items-center justify-between">
                                    <span className="text-sm capitalize">{status.replace('_', ' ')}</span>
                                    <span className="font-mono font-bold">{count}</span>
                                </div>
                            ))}
                            {Object.keys(vulnerabilities_by_status).length === 0 && (
                                <p className="text-sm text-muted-foreground">No data yet.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="font-semibold mb-4">Recent Vulnerabilities</h2>
                        <div className="flex flex-col gap-3">
                            {recent_vulnerabilities.map((v) => (
                                <Link key={v.id} href={`/vulnerabilities/${v.id}`}
                                      className="flex items-center justify-between hover:bg-muted px-2 py-1 rounded-lg transition-colors">
                                    <span className="text-sm truncate max-w-[60%]">{v.title}</span>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${severityColor[v.severity] ?? ''}`}>
                                        {v.severity}
                                    </span>
                                </Link>
                            ))}
                            {recent_vulnerabilities.length === 0 && (
                                <p className="text-sm text-muted-foreground">No vulnerabilities yet.</p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="font-semibold mb-4">Recent Threats</h2>
                        <div className="flex flex-col gap-3">
                            {recent_threats.map((t) => (
                                <Link key={t.id} href={`/threats/${t.id}`}
                                      className="flex items-center justify-between hover:bg-muted px-2 py-1 rounded-lg transition-colors">
                                    <span className="text-sm truncate max-w-[60%]">{t.name}</span>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${severityColor[t.severity] ?? ''}`}>
                                        {t.severity}
                                    </span>
                                </Link>
                            ))}
                            {recent_threats.length === 0 && (
                                <p className="text-sm text-muted-foreground">No threats yet.</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
