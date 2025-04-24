<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;


Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
    Route::get('/{page?}', [AppController::class, 'locale_page']);
});

Route::get('/{page?}', [AppController::class, 'page'])->where('page', '.*');
;

//Link email generato per il reset della password
Route::middleware('guest')->group(function () {
    Route::get('/reset-password/{token}', [AppController::class, 'page'])->name('password.reset');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('email-verification/{id}/{hash}', EmailVerificationController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    //Link email generato per la verifica dell'email
    Route::get('email-verification', EmailVerificationPromptController::class)
        ->name('verification.notice');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
