<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

/**
 *
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category query()
 * @property int $id
 * @property string $name
 * @property int $created_by
 * @property int $updated_by
 * @property int $deleted_by
 * @property string|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereDeletedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Category whereUpdatedBy($value)
 * @property-read \App\Models\User|null $creator
 * @property-read \App\Models\User|null $updater
 * @mixin \Eloquent
 */
class Category extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'name'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:d/m/Y H:i',
            'updated_at' => 'datetime:d/m/Y H:i',
            'deleted_at' => 'datetime:d/m/Y H:i',
        ];
    }

    protected static function boot(){

        parent::boot();

        static::creating(function($model){
            $model->created_by = Auth::id();
            $model->created_at = now();
        });

        static::updating(function($model){
            $model->updated_by = Auth::id();
            $model->updated_at = now();
        });
    }

    public function creator(){
        return $this->belongsTo(User::class, 'created_by')
            ->select(['id'])
            ->with(['profile:user_id,name,surname']);
    }

    public function updater(){
        return $this->belongsTo(User::class, 'updated_by')
            ->select(['id'])
            ->with(['profile:user_id,name,surname']);
    }
}
