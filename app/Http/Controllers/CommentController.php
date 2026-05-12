<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Vulnerability;
use App\Models\Threat;
use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class CommentController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'commentable_type' => ['required', 'string', 'in:vulnerability,threat,asset'],
            'commentable_id'   => ['required', 'integer'],
            'comment'          => ['required', 'string', 'max:2000'],
        ]);

        $models = [
            'vulnerability' => Vulnerability::class,
            'threat'        => Threat::class,
            'asset'         => Asset::class,
        ];

        $modelClass = $models[$validated['commentable_type']];
        $parent = $modelClass::findOrFail($validated['commentable_id']);

        $parent->comments()->create([
            'user_id' => $request->user()->id,
            'comment' => $validated['comment'],
        ]);

        return back();
    }

    public function destroy(Comment $comment): RedirectResponse
    {
        $this->authorize('delete', $comment);
        $comment->delete();

        return back();
    }
}
