<?php

use App\Http\Controllers\Auth\NewPasswordController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;


Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
    Route::get('/{page?}', [AppController::class, 'locale_page']);
});

Route::get('/{page?}', [AppController::class, 'page'])->where('page', '.*');;

//Link email generato per il reset della password
Route::middleware('guest')->group(function () {
    Route::get('/reset-password/{token}')->name('password.reset');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
