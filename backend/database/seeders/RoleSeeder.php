<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Role::factory(3)->create();

        // create 9 roles : 3(customer), 3(artisan), 3(admin)
            Role::factory(9)->state(new Sequence(
                ['name' => 'admin'],
                ['name' => 'artisan'],
                ['name' => 'customer']
            ))->create();
    }
}
