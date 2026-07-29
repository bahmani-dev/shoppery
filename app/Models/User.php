<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\ShippingAddress;

#[Fillable(['name', 'email', 'password'])]
#[Hidden(['password', 'remember_token'])]
class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */

    protected $fillable= [
        'name',
        'email',
        'email_verified_at',
        'password',
        'remember_token',
        'lastname',
        'phonenumber',
        'profile_image',
        'age'
    ];

     protected $hidden = [
        'password',
        'remember_token'
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function review(){
        return $this->hasOne(Review::class);
    }

    public function wishlist(){
        return $this->hasOne(Wishlist::class);
    }

    public function cart(){
        return $this->hasOne(Cart::class);
    }

    public function orders(){
        return $this->hasMany(Order::class);
    }
    public function billings(){
        return $this->hasMany(Billing::class);
    }
    public function addresses(){
        return $this->hasMany(Address::class);
    }

    public function shippingAddresses(){
        return $this->hasMany(ShippingAddress::class);
    }


}
