<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    protected $model = Address::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'address_text' => fake()->streetAddress(),
            'city' => fake()->city(),
            'country' => fake()->country(),
            'postal_code' => fake()->numberBetween(100, 99999),
        ];
    }
}
