import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

interface User {
    id: number;
    name: string;
}

interface Props {
    users: User[];
}

export default function Create({ users }: Props) {
    const [importing, setImporting] = useState(false);
    const [importError, setImportError] = useState<string | null>(null);

    const { data, setData, post, processing, errors } = useForm({
        cve_id: '',
        title: '',
        description: '',
        severity: 'medium',
        cvss_score: '',
        status: 'open',
        assigned_to: '',
        source: '',
        discovered_at: '',
    });

    async function importFromNvd() {
        if (!data.cve_id) {
            setImportError('Enter CVE ID first');
            return;
        }
        setImporting(true);
        setImportError(null);

        try {
            const response = await fetch('/vulnerabilities/fetch-nvd', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? '',
                },
                body: JSON.stringify({ cve_id: data.cve_id }),
            })

            if (!response.ok) {
                setImportError('CVE not found in NVD');
                return;
            }

            const nvd = await response.json();
            setData((prev) => ({
                ...prev,
                title: nvd.title ?? prev.title,
                description: nvd.description ?? prev.description,
                severity: nvd.severity ?? prev.severity,
                cvss_score: nvd.cvss_score?.toString() ?? prev.cvss_score,
                source: nvd.source ?? prev.source,
            }));
        } catch {
            setImportError('Connection error');
        } finally {
            setImporting(false);
        }
    }

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/vulnerabilities');
    }

    return (
        <>
            <Head title="New Vulnerability" />
            <div className="max-w-2xl p-6">
                <Link
                    href="/vulnerabilities"
                    className="text-sm text-blue-500 hover:underline"
                >
                    ← Back to Vulnerabilities
                </Link>
                <h1 className="mt-2 mb-6 text-2xl font-bold">
                    New Vulnerability
                </h1>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            CVE ID
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={data.cve_id}
                                onChange={(e) =>
                                    setData('cve_id', e.target.value)
                                }
                                placeholder="CVE-2024-12345"
                                className="flex-1 rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={importFromNvd}
                                disabled={importing}
                                className="rounded-lg bg-green-600 px-3 py-2 text-sm whitespace-nowrap text-white hover:bg-green-700 disabled:opacity-50"
                            >
                                {importing ? 'Importing...' : 'Import from NVD'}
                            </button>
                        </div>
                        {importError && (
                            <p className="mt-1 text-xs text-red-500">
                                {importError}
                            </p>
                        )}
                        {errors.cve_id && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.cve_id}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Title *
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
                            Description
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
                                Severity *
                            </label>
                            <select
                                value={data.severity}
                                onChange={(e) =>
                                    setData('severity', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                            {errors.severity && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.severity}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                CVSS Score
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
                                Status *
                            </label>
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData('status', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="open">Open</option>
                                <option value="in_progress">In Progress</option>
                                <option value="resolved">Resolved</option>
                                <option value="false_positive">
                                    False Positive
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
                                Assigned To
                            </label>
                            <select
                                value={data.assigned_to}
                                onChange={(e) =>
                                    setData('assigned_to', e.target.value)
                                }
                                className="w-full rounded-lg border p-2 text-sm focus:ring-2 focus:outline-none"
                            >
                                <option value="">— Unassigned —</option>
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
                                Source
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
                                Discovered At
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
                            {processing ? 'Saving...' : 'Save'}
                        </button>
                        <Link
                            href="/vulnerabilities"
                            className="rounded-lg border px-6 py-2 text-sm hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
