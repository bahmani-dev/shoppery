<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id'
    ];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function CartItem(){
        return $this->hasMany(CartItem::class);
    }

}
