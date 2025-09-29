<?php

namespace Database\Seeders;

//use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $system = User::create([
            'email' => 'system@hubby.it',
            'password' => Hash::make('system'),
            'email_verified_at' => now(),
        ]);

        $userRole = Role::create(['name' => 'user', 'created_by' => $system->id]);
        $adminRole = Role::create(['name' => 'admin', 'created_by' => $system->id]);

        $admin = User::create([
            'email' => 'admin@hubby.it',
            'password' => Hash::make('admin'),
            'email_verified_at' => now(),
        ]);
        $admin->roles()->attach([$adminRole->id, $userRole->id]);
        $admin->detail()->create([
            'name' => 'Ellie',
            'surname' => 'Williams'
        ]);

        $user = User::create([
            'email' => 'user@hubby.it',
            'password' => Hash::make('user'),
            'email_verified_at' => now(),
        ]);
        $user->detail()->create([
            'name' => 'Joel',
            'surname' => 'Miller'
        ]);
        $user->role()->create(['role_id' => $userRole->id]);
    }
}
