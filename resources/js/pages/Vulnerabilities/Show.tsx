import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useTranslations } from '@/hooks/use-translations';

interface Comment {
    id: number;
    comment: string;
    created_at: string;
    user: { id: number; name: string };
}

interface Vulnerability {
    id: number;
    title: string;
    cve_id: string | null;
    description: string | null;
    severity: string;
    cvss_score: number | null;
    status: string;
    created_at: string;
    assigned_user: { id: number; name: string } | null;
    threats: Array<{ id: number; name: string }>;
    assets: Array<{ id: number; hostname: string }>;
    comments: Comment[];
}

interface Props {
    vulnerability: Vulnerability;
}

const severityColor: Record<string, string> = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
};

function CommentSection({
    comments,
    commentableType,
    commentableId,
}: {
    comments: Comment[];
    commentableType: string;
    commentableId: number;
}) {
    const { auth } = usePage().props as any;
    const { t } = useTranslations();

    const { data, setData, post, processing, reset, errors } = useForm({
        commentable_type: commentableType,
        commentable_id: commentableId,
        comment: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/comments', { onSuccess: () => reset('comment') });
    }

    function deleteComment(id: number) {
        if (!confirm(t('comment.delete_confirm'))) return;
        import('@inertiajs/react').then(({ router }) => {
            router.delete(`/comments/${id}`);
        });
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">
                {t('comment.comments')} ({comments.length})
            </h2>
            <div className="flex flex-col gap-3">
                {comments.map((c) => (
                    <div key={c.id} className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium">
                                {c.user.name}
                            </span>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-500">
                                    {new Date(
                                        c.created_at,
                                    ).toLocaleDateString()}
                                </span>
                                {auth.user.id === c.user.id && (
                                    <button
                                        onClick={() => deleteComment(c.id)}
                                        className="text-xs text-red-500 hover:text-red-700"
                                    >
                                        {t('comment.delete')}
                                    </button>
                                )}
                            </div>
                        </div>
                        <p className="text-sm">{c.comment}</p>
                    </div>
                ))}
                {comments.length === 0 && (
                    <p className="text-sm text-gray-500">
                        {t('comment.no_comments_yet')}
                    </p>
                )}
            </div>
            <form onSubmit={submit} className="flex flex-col gap-2">
                <textarea
                    value={data.comment}
                    onChange={(e) => setData('comment', e.target.value)}
                    rows={3}
                    placeholder={t('comment.placeholder')}
                    className="w-full rounded-lg border p-3 text-sm focus:ring-2 focus:outline-none"
                />
                {errors.comment && (
                    <p className="text-xs text-red-500">{errors.comment}</p>
                )}
                <button
                    type="submit"
                    disabled={processing}
                    className="self-end rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
                >
                    {processing ? t('comment.sending') : t('comment.add_comment')}
                </button>
            </form>
        </div>
    );
}

export default function Show({ vulnerability }: Props) {
    const { t } = useTranslations();

    const translateSeverity = (severity: string) =>
        t(`vulnerability.values.severity.${severity}`);

    const translateStatus = (status: string) =>
        t(`vulnerability.values.status.${status}`);

    return (
        <>
            <Head title={vulnerability.title} />
            <div className="flex max-w-4xl flex-col gap-6 p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <Link
                            href="/vulnerabilities"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            {t('vulnerability.back_to_list')}
                        </Link>
                        <h1 className="mt-1 text-2xl font-bold">
                            {vulnerability.title}
                        </h1>
                        {vulnerability.cve_id && (
                            <span className="font-mono text-sm text-gray-500">
                                {vulnerability.cve_id}
                            </span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <span
                            className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${severityColor[vulnerability.severity] ?? ''}`}
                        >
                            {translateSeverity(vulnerability.severity)}
                        </span>
                        <Link
                            href={`/vulnerabilities/${vulnerability.id}/edit`}
                            className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50"
                        >
                            {t('vulnerability.buttons.edit')}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 rounded-xl border p-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-500">
                                {t('vulnerability.fields.status')}:
                            </span>{' '}
                            <span className="capitalize">
                                {translateStatus(vulnerability.status)}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500">CVSS:</span>{' '}
                            {vulnerability.cvss_score ?? '—'}
                        </div>
                        <div>
                            <span className="text-gray-500">
                                {t('vulnerability.fields.assigned_to')}:
                            </span>{' '}
                            {vulnerability.assigned_user?.name ?? '—'}
                        </div>
                        <div>
                            <span className="text-gray-500">
                                {t('vulnerability.fields.created_at')}:
                            </span>{' '}
                            {new Date(
                                vulnerability.created_at,
                            ).toLocaleDateString()}
                        </div>
                    </div>
                    {vulnerability.description && (
                        <p className="mt-2 text-sm">
                            {vulnerability.description}
                        </p>
                    )}
                </div>

                {vulnerability.threats.length > 0 && (
                    <div className="rounded-xl border p-6">
                        <h2 className="mb-3 font-semibold">
                            {t('vulnerability.related_threats')}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {vulnerability.threats.map((t) => (
                                <Link
                                    key={t.id}
                                    href={`/threats/${t.id}`}
                                    className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
                                >
                                    {t.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {vulnerability.assets.length > 0 && (
                    <div className="rounded-xl border p-6">
                        <h2 className="mb-3 font-semibold">
                            {t('vulnerability.affected_assets')}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {vulnerability.assets.map((a) => (
                                <Link
                                    key={a.id}
                                    href={`/assets/${a.id}`}
                                    className="rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
                                >
                                    {a.hostname}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="rounded-xl border p-6">
                    <CommentSection
                        comments={vulnerability.comments}
                        commentableType="vulnerability"
                        commentableId={vulnerability.id}
                    />
                </div>
            </div>
        </>
    );
}
