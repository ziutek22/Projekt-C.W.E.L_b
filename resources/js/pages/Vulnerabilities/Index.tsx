import { Head, Link, router } from '@inertiajs/react';
import { useTranslations } from '@/hooks/use-translations';

interface Vulnerability {
    id: number;
    cve_id: string | null;
    title: string;
    severity: string;
    status: string;
}

interface Props {
    vulnerabilities: {
        data: Vulnerability[];
    };
}

const severityColor: Record<string, string> = {
    critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

function deleteVulnerability(id: number, message: string) {
    if (!confirm(message)) return;
    router.delete(`/vulnerabilities/${id}`);
}

export default function Index({ vulnerabilities }: Props) {
    const { t } = useTranslations();

    const translateSeverity = (severity: string) =>
        t(`vulnerability.values.severity.${severity}`);

    const translateStatus = (status: string) =>
        t(`vulnerability.values.status.${status}`);

    return (
        <>
            <Head title={t('vulnerability.plural')} />
            <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        {t('vulnerability.plural')}
                    </h1>
                    <Link
                        href="/vulnerabilities/create"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                        {t('vulnerability.new_short')}
                    </Link>
                </div>
                <table className="w-full border text-sm">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-3 text-left">
                                {t('vulnerability.cve_id')}
                            </th>
                            <th className="p-3 text-left">
                                {t('vulnerability.fields.title')}
                            </th>
                            <th className="p-3 text-left">{t('vulnerability.fields.severity')}</th>
                            <th className="p-3 text-left">{t('vulnerability.fields.status')}</th>
                            <th className="p-3 text-left">
                                {t('vulnerability.table.actions')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {vulnerabilities.data.map((v) => (
                            <tr
                                key={v.id}
                                className="border-t hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <td className="p-3 font-mono text-xs">
                                    {v.cve_id ?? '—'}
                                </td>
                                <td className="p-3">
                                    <Link
                                        href={`/vulnerabilities/${v.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {v.title}
                                    </Link>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${severityColor[v.severity] ?? ''}`}
                                    >
                                        {translateSeverity(v.severity)}
                                    </span>
                                </td>
                                <td className="p-3 capitalize">
                                    {translateStatus(v.status)}
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/vulnerabilities/${v.id}/edit`}
                                            className="text-xs text-blue-500 hover:underline"
                                        >
                                            {t('vulnerability.buttons.edit')}
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deleteVulnerability(
                                                    v.id,
                                                    t(
                                                        'vulnerability.delete_confirm',
                                                    ),
                                                )
                                            }
                                            className="text-xs text-red-500 hover:underline"
                                        >
                                            {t('vulnerability.buttons.delete')}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
