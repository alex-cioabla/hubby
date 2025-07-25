<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = User::create([
            'email' => 'admin@hubby.it',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);
        $admin->profile()->create([
            'name' => 'Mickey',
            'surname' => 'Mouse'
        ]);

        $user = User::create([
            'email' => 'user@hubby.it',
            'password' => Hash::make('password'),
            'role' => 'user',
            'email_verified_at' => now(),
        ]);
        $user->profile()->create([
            'name' => 'Donald',
            'surname' => 'Duck'
        ]);
    }
}
