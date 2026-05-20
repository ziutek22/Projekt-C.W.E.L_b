import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslations } from '@/hooks/use-translations';

interface User {
    id: number;
    name: string;
}

interface Vulnerability {
    id: number;
    cve_id: string | null;
    title: string;
    description: string | null;
    severity: string;
    cvss_score: number | null;
    status: string;
    assigned_to: number | null;
    source: string | null;
    discovered_at: string | null;
}

interface Props {
    vulnerability: Vulnerability;
    users: User[];
}

export default function Edit({ vulnerability, users }: Props) {
    const { t } = useTranslations();
    const { data, setData, put, processing, errors } = useForm({
        cve_id: vulnerability.cve_id ?? '',
        title: vulnerability.title,
        description: vulnerability.description ?? '',
        severity: vulnerability.severity,
        cvss_score: vulnerability.cvss_score?.toString() ?? '',
        status: vulnerability.status,
        assigned_to: vulnerability.assigned_to?.toString() ?? '',
        source: vulnerability.source ?? '',
        discovered_at: vulnerability.discovered_at ?? '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        put(`/vulnerabilities/${vulnerability.id}`);
    }

    return (
        <>
            <Head title={t('vulnerability.edit')} />
            <div className="max-w-2xl p-6">
                <Link
                    href={`/vulnerabilities/${vulnerability.id}`}
                    className="text-sm text-blue-500 hover:underline"
                >
                    {t('vulnerability.buttons.back')}
                </Link>
                <h1 className="mt-2 mb-6 text-2xl font-bold">
                    {t('vulnerability.edit')}
                </h1>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            {t('vulnerability.cve_id')}
                        </label>
                        <input
                            type="text"
                            value={data.cve_id}
                            onChange={(e) => setData('cve_id', e.target.value)}
                            placeholder="CVE-2024-12345"
                            className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                        />
                        {errors.cve_id && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.cve_id}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            {t('vulnerability.fields.title')} *
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                        />
                        {errors.title && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            {t('vulnerability.fields.description')}
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            rows={3}
                            className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                        />
                        {errors.description && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.fields.severity')} *
                            </label>
                            <select
                                value={data.severity}
                                onChange={(e) =>
                                    setData('severity', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="low">
                                    {t('vulnerability.values.severity.low')}
                                </option>
                                <option value="medium">
                                    {t('vulnerability.values.severity.medium')}
                                </option>
                                <option value="high">
                                    {t('vulnerability.values.severity.high')}
                                </option>
                                <option value="critical">
                                    {t(
                                        'vulnerability.values.severity.critical',
                                    )}
                                </option>
                            </select>
                            {errors.severity && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.severity}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.cvss_score')}
                            </label>
                            <input
                                type="number"
                                value={data.cvss_score}
                                onChange={(e) =>
                                    setData('cvss_score', e.target.value)
                                }
                                min="0"
                                max="10"
                                step="0.1"
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            />
                            {errors.cvss_score && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.cvss_score}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.fields.status')} *
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData('status', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="open">
                                    {t('vulnerability.values.status.open')}
                                </option>
                                <option value="in_progress">
                                    {t(
                                        'vulnerability.values.status.in_progress',
                                    )}
                                </option>
                                <option value="resolved">
                                    {t('vulnerability.values.status.resolved')}
                                </option>
                                <option value="false_positive">
                                    {t(
                                        'vulnerability.values.status.false_positive',
                                    )}
                                </option>
                            </select>
                            {errors.status && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.status}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.fields.assigned_to')}
                            </label>
                            <select
                                value={data.assigned_to}
                                onChange={(e) =>
                                    setData('assigned_to', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="">
                                    {t('vulnerability.fields.unassigned')}
                                </option>
                                {users.map((u) => (
                                    <option key={u.id} value={u.id}>
                                        {u.name}
                                    </option>
                                ))}
                            </select>
                            {errors.assigned_to && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.assigned_to}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.fields.source')}
                            </label>
                            <input
                                type="text"
                                value={data.source}
                                onChange={(e) =>
                                    setData('source', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            />
                            {errors.source && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.source}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                {t('vulnerability.discovered_at')}
                            </label>
                            <input
                                type="date"
                                value={data.discovered_at}
                                onChange={(e) =>
                                    setData('discovered_at', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            />
                            {errors.discovered_at && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.discovered_at}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-2 flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-blue-600 px-6 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? t('vulnerability.buttons.saving') : t('vulnerability.buttons.save')}
                        </button>
                        <Link
                            href={`/vulnerabilities/${vulnerability.id}`}
                            className="rounded-lg border px-6 py-2 text-sm hover:bg-gray-50"
                        >
                            {t('vulnerability.buttons.cancel')}
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
