import { Head, Link } from '@inertiajs/react';
import { BadgePlus, ShieldAlert } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import * as assetRoutes from '@/routes/assets';
import * as vulnerabilityRoutes from '@/routes/vulnerabilities';
import type { BreadcrumbItem } from '@/types';

interface Props {
    stats: {
        vulnerabilities_count: number;
        threats_count: number;
        assets_count: number;
    };
    vulnerabilities_by_severity: Record<string, number>;
    vulnerabilities_by_status: Record<string, number>;
    unassigned_vulnerabilities: number;
    critical_open_vulnerabilities: Array<{
        id: number;
        title: string;
        cve_id: string | null;
        cvss_score: string | number | null;
        created_at: string;
    }>;
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
    critical:
        'bg-red-500/12 text-red-700 ring-1 ring-inset ring-red-500/20 dark:bg-red-500/15 dark:text-red-200 dark:ring-red-500/25',
    high: 'bg-orange-500/12 text-orange-700 ring-1 ring-inset ring-orange-500/20 dark:bg-orange-500/15 dark:text-orange-200 dark:ring-orange-500/25',
    medium: 'bg-amber-500/12 text-amber-700 ring-1 ring-inset ring-amber-500/20 dark:bg-amber-500/15 dark:text-amber-200 dark:ring-amber-500/25',
    low: 'bg-emerald-500/12 text-emerald-700 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-200 dark:ring-emerald-500/25',
};

const severityDotColor: Record<string, string> = {
    critical: 'bg-red-500',
    high: 'bg-orange-500',
    medium: 'bg-amber-500',
    low: 'bg-emerald-500',
};

const severityOrder = ['critical', 'high', 'medium', 'low'] as const;

const statusTone: Record<string, string> = {
    open: 'text-red-600 dark:text-red-300',
    in_progress: 'text-amber-600 dark:text-amber-300',
    resolved: 'text-emerald-600 dark:text-emerald-300',
    false_positive: 'text-slate-500 dark:text-slate-400',
};

export default function Dashboard({
    stats,
    vulnerabilities_by_severity,
    vulnerabilities_by_status,
    unassigned_vulnerabilities,
    critical_open_vulnerabilities,
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

    const translateThreatStatus = (status: string) =>
        t(`threat.values.status.${status}`);

    const totalTrackedItems =
        stats.vulnerabilities_count + stats.threats_count + stats.assets_count;

    const openCount = vulnerabilities_by_status.open ?? 0;
    const inProgressCount = vulnerabilities_by_status.in_progress ?? 0;
    const criticalCount = vulnerabilities_by_severity.critical ?? 0;
    const highCount = vulnerabilities_by_severity.high ?? 0;

    const formatDate = (date: string) =>
        new Intl.DateTimeFormat(undefined, {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(new Date(date));

    const badges = [
        {
            label: 'CRITICAL',
            value: criticalCount,
            valueColor: 'text-red-500 dark:text-red-400',
            bg: 'bg-white/[0.03] dark:bg-white/[0.03]',
            border: 'border-white/[0.07]',
        },
        {
            label: 'HIGH',
            value: highCount,
            valueColor: 'text-orange-500 dark:text-orange-400',
            bg: 'bg-white/[0.03] dark:bg-white/[0.03]',
            border: 'border-white/[0.07]',
        },
        {
            label: t('dashboard.open_vulnerabilities'),
            value: openCount,
            valueColor: 'text-orange-400 dark:text-orange-300',
            bg: 'bg-orange-500/[0.08]',
            border: 'border-orange-500/20',
        },
        {
            label: t('dashboard.in_progress_vulnerabilities'),
            value: inProgressCount,
            valueColor: 'text-amber-400 dark:text-amber-300',
            bg: 'bg-amber-500/[0.08]',
            border: 'border-amber-500/20',
        },
        {
            label: t('dashboard.total_items'),
            value: totalTrackedItems,
            valueColor: 'text-blue-400 dark:text-blue-300',
            bg: 'bg-blue-500/[0.08]',
            border: 'border-blue-500/20',
        },
        {
            label: t('dashboard.unassigned_vulnerabilities'),
            value: unassigned_vulnerabilities,
            valueColor: 'text-violet-400 dark:text-violet-300',
            bg: 'bg-violet-500/[0.08]',
            border: 'border-violet-500/20',
        },
    ];

    const severityTotal = Object.values(vulnerabilities_by_severity).reduce(
        (sum, count) => sum + count,
        0,
    );

    const quickActions = [
        {
            title: t('dashboard.quick_add_vulnerability'),
            href: vulnerabilityRoutes.create().url,
            icon: ShieldAlert,
        },
        {
            title: t('dashboard.quick_add_asset'),
            href: assetRoutes.create().url,
            icon: BadgePlus,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.title')} />

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 md:px-6 md:py-6">
                <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                            {t('dashboard.title')}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action) => (
                            <Link
                                key={action.title}
                                href={action.href}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-border/60 dark:bg-background dark:text-foreground dark:hover:bg-muted"
                            >
                                <action.icon className="size-4" />
                                {action.title}
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="py-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                        {badges.map((badge) => (
                            <div
                                key={badge.label}
                                className={cn(
                                    'flex items-baseline gap-2.5 rounded-md border px-3.5 py-2',
                                    badge.bg,
                                    badge.border,
                                )}
                            >
                                <span className="font-mono text-[10px] font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                                    {badge.label}
                                </span>
                                <span
                                    className={cn(
                                        'font-mono text-base font-extrabold tracking-tight',
                                        badge.valueColor,
                                    )}
                                >
                                    {badge.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="grid gap-4 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <div className="rounded-xl border border-red-200/70 bg-red-50/70 shadow-sm dark:border-red-500/20 dark:bg-red-500/10">
                        <div className="border-b border-red-200/80 px-5 py-4 dark:border-red-500/20">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="text-base font-semibold text-red-900 md:text-lg dark:text-red-100">
                                        {t('dashboard.active_alerts')}
                                    </h2>
                                </div>
                                <div className="rounded-md border border-red-200 bg-red-100 px-2.5 py-1 font-mono text-xs font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/15 dark:text-red-200">
                                    {critical_open_vulnerabilities.length}
                                </div>
                            </div>
                        </div>

                        {critical_open_vulnerabilities.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-red-100/60 font-mono text-[11px] tracking-wide text-red-800/70 uppercase dark:bg-red-500/10 dark:text-red-200/80">
                                        <tr>
                                            <th className="px-5 py-3 font-medium">{t('vulnerability.fields.title')}</th>
                                            <th className="px-5 py-3 font-medium">CVE</th>
                                            <th className="px-5 py-3 font-medium">CVSS</th>
                                            <th className="px-5 py-3 font-medium">{t('dashboard.created_at')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {critical_open_vulnerabilities.map((vulnerability) => (
                                            <tr
                                                key={vulnerability.id}
                                                className="border-t border-red-200/80 transition-colors hover:bg-white/60 dark:border-red-500/20 dark:hover:bg-background/20"
                                            >
                                                <td className="px-5 py-3">
                                                    <Link
                                                        href={`/vulnerabilities/${vulnerability.id}`}
                                                        className="font-medium text-foreground hover:text-red-700 dark:hover:text-red-200"
                                                    >
                                                        {vulnerability.title}
                                                    </Link>
                                                </td>
                                                <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                                                    {vulnerability.cve_id ?? t('dashboard.no_cve')}
                                                </td>
                                                <td className="px-5 py-3 font-mono text-xs font-semibold text-red-700 dark:text-red-200">
                                                    {vulnerability.cvss_score ?? '—'}
                                                </td>
                                                <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                                                    {formatDate(vulnerability.created_at)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="px-5 py-8 text-sm text-red-800/80 dark:text-red-100/80">
                                {t('dashboard.no_active_alerts')}
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-border/60 dark:bg-background">
                            <div className="border-b border-slate-200 px-5 py-4 dark:border-border/60">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h2 className="text-base font-semibold text-foreground md:text-lg">
                                            {t('dashboard.recent_vulnerabilities')}
                                        </h2>
                                    </div>
                                    <Link
                                        href="/vulnerabilities"
                                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-border/60 dark:bg-background dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-foreground"
                                    >
                                        {t('dashboard.view_all')}
                                    </Link>
                                </div>
                            </div>

                            {recent_vulnerabilities.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50/80 font-mono text-xs tracking-wide text-muted-foreground uppercase dark:bg-muted/20">
                                            <tr>
                                                <th className="px-5 py-3 font-medium">{t('vulnerability.fields.title')}</th>
                                                <th className="px-5 py-3 font-medium">{t('dashboard.threat_severity')}</th>
                                                <th className="px-5 py-3 font-medium">{t('dashboard.threat_status')}</th>
                                                <th className="px-5 py-3 font-medium">{t('dashboard.created_at')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recent_vulnerabilities.map((vulnerability) => (
                                                <tr
                                                    key={vulnerability.id}
                                                    className="border-t border-slate-200 transition-colors hover:bg-slate-50 dark:border-border/50 dark:hover:bg-muted/20"
                                                >
                                                    <td className="px-5 py-3">
                                                        <Link
                                                            href={`/vulnerabilities/${vulnerability.id}`}
                                                            className="font-medium text-foreground hover:text-primary"
                                                        >
                                                            {vulnerability.title}
                                                        </Link>
                                                    </td>
                                                    <td className="px-5 py-3">
                                                        <span
                                                            className={cn(
                                                                'inline-flex rounded-full px-2.5 py-1 font-mono text-xs font-medium',
                                                                severityColor[vulnerability.severity] ?? 'bg-muted text-muted-foreground',
                                                            )}
                                                        >
                                                            {translateSeverity(vulnerability.severity)}
                                                        </span>
                                                    </td>
                                                    <td
                                                        className={cn(
                                                            'px-5 py-3 font-mono text-xs',
                                                            statusTone[vulnerability.status] ?? 'text-muted-foreground',
                                                        )}
                                                    >
                                                        {translateStatus(vulnerability.status)}
                                                    </td>
                                                    <td className="px-5 py-3 font-mono text-muted-foreground">
                                                        {formatDate(vulnerability.created_at)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="px-5 py-8 text-sm text-muted-foreground">
                                    {t('dashboard.no_vulnerabilities_yet')}
                                </div>
                            )}
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-border/60 dark:bg-background">
                                <h2 className="text-base font-semibold text-foreground md:text-lg">
                                    {t('dashboard.vulnerabilities_by_severity')}
                                </h2>
                                <div className="mt-4 space-y-2.5">
                                    {Object.entries(vulnerabilities_by_severity)
                                        .sort(
                                            ([severityA], [severityB]) =>
                                                severityOrder.indexOf(
                                                    severityA as (typeof severityOrder)[number],
                                                ) -
                                                severityOrder.indexOf(
                                                    severityB as (typeof severityOrder)[number],
                                                ),
                                        )
                                        .map(([severity, count]) => {
                                            const percentage = severityTotal
                                                ? Math.round(
                                                      (count / severityTotal) *
                                                          100,
                                                  )
                                                : 0;

                                            return (
                                                <div
                                                    key={severity}
                                                    className="rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-3 dark:border-border/50 dark:bg-muted/20"
                                                >
                                                    <div className="flex items-center justify-between gap-3">
                                                        <div className="flex items-center gap-3">
                                                            <span
                                                                className={cn(
                                                                    'size-2.5 rounded-full',
                                                                    severityDotColor[
                                                                        severity
                                                                    ] ??
                                                                        'bg-slate-400',
                                                                )}
                                                            />
                                                            <span className="text-sm font-medium text-foreground">
                                                                {translateSeverity(
                                                                    severity,
                                                                )}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-mono text-xs text-muted-foreground">
                                                                {percentage}%
                                                            </span>
                                                            <span className="font-mono text-sm font-semibold text-foreground">
                                                                {count}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                                                        <div
                                                            className={cn(
                                                                'h-full rounded-full',
                                                                severityDotColor[
                                                                    severity
                                                                ] ??
                                                                    'bg-slate-400',
                                                            )}
                                                            style={{
                                                                width: `${percentage}%`,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    {Object.keys(vulnerabilities_by_severity)
                                        .length === 0 && (
                                        <p className="text-sm text-muted-foreground">
                                            {t('dashboard.no_data_yet')}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-border/60 dark:bg-background">
                                <h2 className="text-base font-semibold text-foreground md:text-lg">
                                    {t('dashboard.vulnerabilities_by_status')}
                                </h2>
                                <div className="mt-4 space-y-2.5">
                                    {Object.entries(
                                        vulnerabilities_by_status,
                                    ).map(([status, count]) => (
                                        <div
                                            key={status}
                                            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5 dark:border-transparent dark:bg-muted/30"
                                        >
                                            <span className="text-sm text-foreground">
                                                {translateStatus(status)}
                                            </span>
                                            <span className="font-mono text-sm font-semibold text-foreground">
                                                {count}
                                            </span>
                                        </div>
                                    ))}
                                    {Object.keys(vulnerabilities_by_status)
                                        .length === 0 && (
                                        <p className="text-sm text-muted-foreground">
                                            {t('dashboard.no_data_yet')}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-border/60 dark:bg-background">
                    <div className="border-b border-slate-200 px-5 py-4 dark:border-border/60">
                        <h2 className="text-base font-semibold text-foreground md:text-lg">
                            {t('dashboard.recent_threats')}
                        </h2>
                    </div>

                    {recent_threats.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50/80 font-mono text-xs tracking-wide text-muted-foreground uppercase dark:bg-muted/20">
                                    <tr>
                                        <th className="px-5 py-3 font-medium">{t('dashboard.threat_name')}</th>
                                        <th className="px-5 py-3 font-medium">{t('dashboard.threat_type')}</th>
                                        <th className="px-5 py-3 font-medium">{t('dashboard.threat_severity')}</th>
                                        <th className="px-5 py-3 font-medium">{t('dashboard.threat_status')}</th>
                                        <th className="px-5 py-3 font-medium">{t('dashboard.created_at')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recent_threats.map((threat) => (
                                        <tr
                                            key={threat.id}
                                            className="border-t border-slate-200 transition-colors hover:bg-slate-50 dark:border-border/50 dark:hover:bg-muted/20"
                                        >
                                            <td className="px-5 py-3">
                                                <Link
                                                    href={`/threats/${threat.id}`}
                                                    className="font-medium text-foreground hover:text-primary"
                                                >
                                                    {threat.name}
                                                </Link>
                                            </td>
                                            <td className="px-5 py-3 font-mono text-muted-foreground">{threat.type}</td>
                                            <td className="px-5 py-3">
                                                <span
                                                    className={cn(
                                                        'inline-flex rounded-full px-2.5 py-1 font-mono text-xs font-medium',
                                                        severityColor[threat.severity] ?? 'bg-muted text-muted-foreground',
                                                    )}
                                                >
                                                    {translateSeverity(threat.severity)}
                                                </span>
                                            </td>
                                            <td
                                                className={cn(
                                                    'px-5 py-3 font-mono text-xs',
                                                    statusTone[threat.status] ?? 'text-muted-foreground',
                                                )}
                                            >
                                                {translateThreatStatus(threat.status)}
                                            </td>
                                            <td className="px-5 py-3 font-mono text-muted-foreground">
                                                {formatDate(threat.created_at)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="px-5 py-8 text-sm text-muted-foreground">
                            {t('dashboard.no_threats_yet')}
                        </div>
                    )}
                </section>
            </div>
        </AppLayout>
    );
}
