import { Head, Link, router } from '@inertiajs/react';

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

function deleteVulnerability(id: number) {
    if (!confirm('Are you sure?')) return;
    router.delete(`/vulnerabilities/${id}`);
}

export default function Index({ vulnerabilities }: Props) {
    return (
        <>
            <Head title="Vulnerabilities" />
            <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Vulnerabilities</h1>
                    <Link
                        href="/vulnerabilities/create"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                    >
                        + New
                    </Link>
                </div>
                <table className="w-full border text-sm">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="p-3 text-left">CVE ID</th>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Severity</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
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
                                        {v.severity}
                                    </span>
                                </td>
                                <td className="p-3 capitalize">
                                    {v.status.replace('_', ' ')}
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/vulnerabilities/${v.id}/edit`}
                                            className="text-xs text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deleteVulnerability(v.id)
                                            }
                                            className="text-xs text-red-500 hover:underline"
                                        >
                                            Delete
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
