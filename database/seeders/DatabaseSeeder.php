<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Product;
use App\Models\Order;
use App\Models\Tag;

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
            ->has(\App\Models\Address::factory()->count(2))
            ->has(\App\Models\ShippingAddress::factory()->count(2))
            ->has(\App\Models\Billing::factory()->count(2))
            ->has(
                \App\Models\Cart::factory()->has(
                    \App\Models\CartItem::factory()->count(3),
                    'cartItem'
                )
            )
            ->has(\App\Models\Wishlist::factory()->count(3))
            ->has(\App\Models\Order::factory()->count(2))
            ->create();

        // THIRD: Create products
        $products = Product::factory(50)
            ->has(\App\Models\ProductAttribute::factory()->count(3), 'productAttributes')
            ->has(\App\Models\ProductImage::factory()->count(2), 'images')
            ->has(\App\Models\Review::factory()->count(5), 'reviews')
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
            ->has(\App\Models\OrderItem::factory()->count(3))
            ->create();
    }
}
