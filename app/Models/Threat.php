<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Threat extends Model
{
    protected $fillable = [
        'name',
        'type',
        'severity',
        'description',
        'source',
        'status',
        'first_seen_at',
        'last_seen_at',
    ];

    public function vulnerabilities(): BelongsToMany
    {
        return $this->belongsToMany(Vulnerability::class, 'threat_vulnerability');
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
