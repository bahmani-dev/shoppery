<?php

namespace Database\Factories;

use App\Models\CartItem;
use App\Models\Product;
use App\Models\Cart;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<CartItem>
 */
class CartItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'product_id' => Product::factory(),
           'cart_id' => Cart::factory(),
           'quantity' => fake()->numberBetween()
        ];
    }
}
