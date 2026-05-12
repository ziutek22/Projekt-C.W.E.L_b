import { useForm, usePage } from '@inertiajs/react';

interface Comment {
    id: number;
    comment: string;
    created_at: string;
    user: {
        id: number;
        name: string;
    };
}

interface Props {
    comments: Comment[];
    commentableType: 'vulnerability' | 'threat' | 'asset';
    commentableId: number;
}

export default function CommentSection({ comments, commentableType, commentableId }: Props) {
    const { auth } = usePage().props as any;

    const { data, setData, post, processing, reset, errors } = useForm({
        commentable_type: commentableType,
        commentable_id:   commentableId,
        comment:          '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/comments', { onSuccess: () => reset('comment') });
    }

    function deleteComment(id: number) {
        if (!confirm('Delete this comment?')) return;
        // Inertia delete
        import('@inertiajs/react').then(({ router }) => {
            router.delete(`/comments/${id}`);
        });
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg">Comments ({comments.length})</h2>

            {/* Lista komentarzy */}
            <div className="flex flex-col gap-3">
                {comments.map((c) => (
                    <div key={c.id} className="rounded-lg border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{c.user.name}</span>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-muted-foreground">
                                    {new Date(c.created_at).toLocaleDateString()}
                                </span>
                                {auth.user.id === c.user.id && (
                                    <button
                                        onClick={() => deleteComment(c.id)}
                                        className="text-xs text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                        <p className="text-sm">{c.comment}</p>
                    </div>
                ))}
                {comments.length === 0 && (
                    <p className="text-sm text-muted-foreground">No comments yet.</p>
                )}
            </div>

            {/* Formularz */}
            <form onSubmit={submit} className="flex flex-col gap-2">
                <textarea
                    value={data.comment}
                    onChange={e => setData('comment', e.target.value)}
                    rows={3}
                    placeholder="Add a comment..."
                    className="w-full rounded-lg border border-sidebar-border/70 bg-transparent p-3 text-sm dark:border-sidebar-border focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {errors.comment && <p className="text-xs text-red-500">{errors.comment}</p>}
                <button
                    type="submit"
                    disabled={processing}
                    className="self-end rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                    {processing ? 'Sending...' : 'Add Comment'}
                </button>
            </form>
        </div>
    );
}
