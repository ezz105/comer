<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // creates 3 roles : admin, artisan, customer
        $this->call(RoleSeeder::class);

        // creates 1 admin for testing
        User::factory(1)->create(
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'role_id' => 1,
                'password' => '123456',
                'email_verified_at' => now(),
                'phone_number' => '1234567890',
                'status' => 'active',
            ]
        );

        // creates 10 users with random roles and status
        User::factory(10)->create();

        $this->call([
            UserProfileSeeder::class,   // to create 10 user profiles
            CategorySeeder::class,      // to create 5 categories and 15 subcategories
            
        ]);
    }
}
