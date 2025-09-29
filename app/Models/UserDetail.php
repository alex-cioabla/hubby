<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 *
 *
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail query()
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
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereSurname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UserDetail whereUserId($value)
 * @mixin \Eloquent
 */
class UserDetail extends Model
{
    public $timestamps = false;

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
    ];

    public function user()  {

        return $this->belongsTo(User::class);
    }
}
