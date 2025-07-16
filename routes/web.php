<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\PasswordController;

Route::view('/', 'app');
Route::view('library', 'app');
Route::view('rank', 'app');
Route::view('shop', 'app');

Route::prefix('admin')->group(function () {
    //Pages
    Route::get('dashboard', [AdminController::class, 'index']);
});


Route::prefix('user')->group(function () {

    //Pages
    Route::get('profile', [UserController::class, 'index']);
    Route::get('settings', [UserController::class, 'settings']);

    //API
    Route::middleware('auth')->group(function () {
        Route::patch('update', [UserController::class, 'update']);
        Route::delete('delete', [UserController::class, 'destroy']);
        Route::put('password-update', [PasswordController::class, 'update']);
    });
});

require __DIR__.'/auth.php';
