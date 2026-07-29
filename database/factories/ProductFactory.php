<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => Category::inRandomOrder()->first()->id ?? 1,
            'brand_id' => Brand::inRandomOrder()->first()->id ?? 1,
            'name' => fake()->word(),
            'subtitle'=> fake()->realText(100),
            'sku' => fake()->bothify('???-######'),
            'description'=> fake()->realText(300),
            'quantity' => fake()->numberBetween(1, 3000),
            'weight' => fake()->numberBetween(1, 100),
            'price' => fake()->numberBetween(10, 10000),
            'unit' => fake()->word(),
            'discount' => fake()->randomFloat(2, 0, 0.6),
            'rating' => fake()->numberBetween(1,5),
            'is_hot_deal' => fake()->boolean(),
            'is_featured' => fake()->boolean()
        ];
    }
}
