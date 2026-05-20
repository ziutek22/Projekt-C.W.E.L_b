import { Head, Link } from '@inertiajs/react';
import { useTranslations } from '@/hooks/use-translations';
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

const severityColor: Record<string, string> = {
    critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

export default function Dashboard({
    stats,
    vulnerabilities_by_severity,
    vulnerabilities_by_status,
    recent_vulnerabilities,
    recent_threats,
}: Props) {
    const { t } = useTranslations();

    const breadcrumbs: BreadcrumbItem[] = [
        { title: t('dashboard.title'), href: dashboard() },
    ];

    const translateSeverity = (severity: string) =>
        t(`vulnerability.values.severity.${severity}`);

    const translateStatus = (status: string) =>
        t(`vulnerability.values.status.${status}`);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.title')} />
            <div className="flex flex-col gap-6 p-4">
                {/* Liczniki */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {[
                        {
                            label: t('dashboard.vulnerabilities'),
                            count: stats.vulnerabilities_count,
                            href: '/vulnerabilities',
                        },
                        {
                            label: t('dashboard.threats'),
                            count: stats.threats_count,
                            href: '/threats',
                        },
                        {
                            label: t('dashboard.assets'),
                            count: stats.assets_count,
                            href: '/assets',
                        },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-xl border border-sidebar-border/70 p-6 transition-colors hover:bg-muted dark:border-sidebar-border"
                        >
                            <div className="text-3xl font-bold">
                                {item.count}
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Severity + Status */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="mb-4 font-semibold">
                            {t('dashboard.vulnerabilities_by_severity')}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {Object.entries(vulnerabilities_by_severity).map(
                                ([severity, count]) => (
                                    <div
                                        key={severity}
                                        className="flex items-center justify-between"
                                    >
                                        <span
                                            className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${severityColor[severity] ?? 'bg-gray-100 text-gray-800'}`}
                                        >
                                            {translateSeverity(severity)}
                                        </span>
                                        <span className="font-mono font-bold">
                                            {count}
                                        </span>
                                    </div>
                                ),
                            )}
                            {Object.keys(vulnerabilities_by_severity).length ===
                                0 && (
                                <p className="text-sm text-muted-foreground">
                                    {t('dashboard.no_data_yet')}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="mb-4 font-semibold">
                            {t('dashboard.vulnerabilities_by_status')}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {Object.entries(vulnerabilities_by_status).map(
                                ([status, count]) => (
                                    <div
                                        key={status}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-sm capitalize">
                                            {translateStatus(status)}
                                        </span>
                                        <span className="font-mono font-bold">
                                            {count}
                                        </span>
                                    </div>
                                ),
                            )}
                            {Object.keys(vulnerabilities_by_status).length ===
                                0 && (
                                <p className="text-sm text-muted-foreground">
                                    {t('dashboard.no_data_yet')}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="mb-4 font-semibold">
                            {t('dashboard.recent_vulnerabilities')}
                        </h2>
                        <div className="flex flex-col gap-3">
                            {recent_vulnerabilities.map((v) => (
                                <Link
                                    key={v.id}
                                    href={`/vulnerabilities/${v.id}`}
                                    className="flex items-center justify-between rounded-lg px-2 py-1 transition-colors hover:bg-muted"
                                >
                                    <span className="max-w-[60%] truncate text-sm">
                                        {v.title}
                                    </span>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${severityColor[v.severity] ?? ''}`}
                                    >
                                        {translateSeverity(v.severity)}
                                    </span>
                                </Link>
                            ))}
                            {recent_vulnerabilities.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                    {t('dashboard.no_vulnerabilities_yet')}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                        <h2 className="mb-4 font-semibold">
                            {t('dashboard.recent_threats')}
                        </h2>
                        <div className="flex flex-col gap-3">
                            {recent_threats.map((t) => (
                                <Link
                                    key={t.id}
                                    href={`/threats/${t.id}`}
                                    className="flex items-center justify-between rounded-lg px-2 py-1 transition-colors hover:bg-muted"
                                >
                                    <span className="max-w-[60%] truncate text-sm">
                                        {t.name}
                                    </span>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${severityColor[t.severity] ?? ''}`}
                                    >
                                        {translateSeverity(t.severity)}
                                    </span>
                                </Link>
                            ))}
                            {recent_threats.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                    {t('dashboard.no_threats_yet')}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
