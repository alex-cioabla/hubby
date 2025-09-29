<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @property int $id
 * @property int $hobby_id
 * @property string|null $tier
 * @property string $status
 * @property float|null $cost
 * @property string|null $purchase_date
 * @property string|null $shop
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $user_id
 * @property int $category_id
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereHobbyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies wherePurchaseDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereShop($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereTier($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserHobbies whereUserId($value)
 * @property-read \App\Models\Category $category
 * @mixin \Eloquent
 */
class UserHobbies extends Model
{
    protected $fillable = [
        'id_hobby',
        'user_id',
        'category_id'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }
}
