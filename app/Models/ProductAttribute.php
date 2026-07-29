<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductAttribute extends Model
{
     use HasFactory;
    protected $fillable = [
        'product_id',
        'attribute_id',
        'value'
    ];

  public function product()
{
    return $this->belongsTo(Product::class);
}

    public function attribute(){
        return $this->belongsTo(Attribute::class);
    }
}
