<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CartItem extends Model
{
    use HasFactory;
    protected $fillable = [ 
        'product_id',
        'cart-id',
        'quantity'
    ];

    public function product (){
        return $this->belongsTo(Product::class);
    }

    public function cart () {
        return $this->belongsTo(Cart::class);
    }
}
