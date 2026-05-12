<?php

namespace App\Concerns\Traits;

use App\Models\ActivityLog;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

trait LogsActivity
{
    public static function bootLogsActivity(): void
    {
        static::created(function ($model) {
            self::logActivity($model, 'created', [], $model->getAttributes());
        });

        static::updated(function ($model) {
            self::logActivity($model, 'updated', $model->getOriginal(), $model->getChanges());
        });

        static::deleted(function ($model) {
            self::logActivity($model, 'deleted', $model->getAttributes(), []);
        });
    }

    private static function logActivity($model, string $action, array $oldValues, array $newValues): void
    {
        ActivityLog::create([
            'user_id'    => Auth::id(),
            'action'     => $action,
            'loggable_type' => get_class($model),
            'loggable_id'   => $model->getKey(),
            'old_values' => empty($oldValues) ? null : $oldValues,
            'new_values' => empty($newValues) ? null : $newValues,
            'ip_address' => Request::ip(),
        ]);
    }
}
