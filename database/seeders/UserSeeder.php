<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'lastname' => 'Admin',
            'email' => 'admin@example.com',
            'phonenumber' => 12324343,
            'profile_image' => 'nskmlclsdncksdcd',
            'age' => 28,
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'),
        ]);
        User::factory(10)->create();
    }
}
