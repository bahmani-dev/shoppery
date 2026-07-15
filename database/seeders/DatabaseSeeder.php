<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(UserSeeder::class);

        $categories = Category::factory(20)->create();

        $brands = Brand::factory(15)->create();

        Product::factory(100)->make()->each(function ($product) use ($categories, $brands) {
            $product->category_id = $categories->random()->id;
            $product->brand_id = $brands->random()->id;
            $product->save();
        });
    }
}
