<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{

    use HasFactory;

    protected $fillable = [
        'category_id',
        'brand_id',
        'name',
        'subtitle',
        'sku',
        'description',
        'quantity',
        'weight',
        'price',
        'unit',
        'discount',
        'rating',
        'is_hot_deal',
        'is_featured'
    ];

    protected $casts = [
        'is_hot_deal' =>'boolean',
        'is_featured' => 'boolean'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function images(){
        return $this->hasMany(ProductImage::class);
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }

    public function attributes(){
        return $this->hasMany(ProductAttribute::class);
    }

    public function wishlist(){
        return $this->hasOne(Wishlist::class);
    }

    public function cartItems(){
        return $this->hasMany(CartItem::class);
    }

    public function orderItems(){
        return $this->hasMany(OrderItem::class);
    }

    public function tags(){
            return $this->belongsToMany(Tag::class, 'product_tags');
    }
public function productAttributes(): HasMany
{
    return $this->hasMany(ProductAttribute::class);
}




}
