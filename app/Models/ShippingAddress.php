<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Order;
use App\Models\User;

class ShippingAddress extends Model
{
        use HasFactory;
   protected $fillable =[
    'user_id',
    'text',
    'city',
    'country',
    'postal_code'
   ];

   public function user(){
    return $this->belongsTo(User::class);
   }

   public function orders(){
    return $this->hasMany(Order::class);
   }
}
