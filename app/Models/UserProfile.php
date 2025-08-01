<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile query()
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $surname
 * @property string $gender
 * @property string|null $phone
 * @property string|null $birthday
 * @property string|null $avatar
 * @property string|null $address
 * @property string|null $city
 * @property string|null $province
 * @property string|null $postal_code
 * @property string|null $country
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereSurname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserProfile whereUserId($value)
 * @mixin \Eloquent
 */
class UserProfile extends Model
{
    protected $fillable = [
        'name',
        'surname',
        'birthday',
        'gender',
        'phone',
        'avatar',
        'address',
        'city',
        'province',
        'postal_code',
        'country',
        'user_id'
    ];

    protected $hidden = [
        'user_id'
    ];

    public function user()  {

        return $this->belongsTo(User::class);
    }
}
