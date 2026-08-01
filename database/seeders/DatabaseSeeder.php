<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Billing;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductImage;
use App\Models\Review;
use App\Models\ShippingAddress;
use App\Models\Tag;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // FIRST: Seed categories and brands
        $this->call([
            CategorySeeder::class,
            BrandSeeder::class,
        ]);

        // Create Tags
        Tag::factory(20)->create();

        // SECOND: Create users with their relationships
        User::factory(200)
            ->has(Address::factory()->count(2))
            ->has(ShippingAddress::factory()->count(2))
            ->has(Billing::factory()->count(2))
            ->has(
                Cart::factory()->has(
                    CartItem::factory()->count(3),
                    'cartItem'
                )
            )
            ->has(Wishlist::factory()->count(3))
            ->has(Order::factory()->count(2))
            ->create();

        // THIRD: Create products
        $products = Product::factory(50)
            ->has(ProductAttribute::factory()->count(3), 'productAttributes')
            ->has(ProductImage::factory()->count(2), 'images')
            ->has(Review::factory()->count(5), 'reviews')
            ->create();

        // Attach tags to products
        $tags = Tag::all();

        foreach ($products as $product) {
            $product->tags()->attach(
                $tags->random(2)->pluck('id')->toArray()
            );
        }

        // FOURTH: Create orders
        Order::factory(20)
            ->has(OrderItem::factory()->count(3))
            ->create();
    }
}
