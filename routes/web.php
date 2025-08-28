<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\EmailController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

//PAGES
Route::view('/', 'app');
Route::view('library', 'app');
Route::view('rank', 'app');
Route::view('shop', 'app');

Route::get('register', [RegisterController::class, 'index']);
Route::get('login', [LoginController::class, 'index']);
Route::get('password-forgot', [PasswordController::class, 'forgotIndex'])->name('password.request');
Route::get('password-reset/{token}', [PasswordController::class, 'resetIndex'])
    ->name('password.reset'); //Link email generato per il reset della password
Route::get('password-confirm', [PasswordController::class, 'conformIndex']);
Route::get('password-update', [PasswordController::class, 'updateIndex']);
Route::get('email-verification-request', [EmailController::class, 'indexRequest']);
Route::get('email-verification-request/{id}/{hash}', [EmailController::class, 'indexVerify'])
    //->middleware(['signed', 'throttle:6,1']) //Questo middleware non si può richiamare tramite api
    ->name('verification.verify'); //Link email generato per la verifica dell'email

//AREAS
Route::prefix('admin')->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard']);
    Route::get('categories', [AdminController::class, 'categories']);
});

Route::prefix('user')->group(function () {
    Route::get('profile', [UserController::class, 'index']);
    Route::get('settings', [UserController::class, 'settings']);
});

require __DIR__.'/web_api.php';
