<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
        use HasFactory;
    protected $fillable = [
        'user_id',
        'billing_id',
        'shipping_address_id',
        'order_date',
        'status',
        'payment_method',
        'shipping_cost',
        'total_price'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function billing(){
        return $this->belongsTo(Billing::class);
    }

    public function shippingAddress(){
        return $this->belongsTo(ShippingAddress::class);
    }

    public function orderItem(){
        return $this->hasMany(OrderItem::class);
    }


}
