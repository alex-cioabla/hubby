<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\EmailVerificationRequestController;


Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
    Route::get('/{page?}', [AppController::class, 'locale_page']);
});

Route::get('/{page?}', [AppController::class, 'page'])->where('page', '.*');
;

Route::middleware('guest')->group(function () {
    //Link email generato per il reset della password
    Route::get('/password-reset/{token}', [AppController::class, 'page'])->name('password.reset');
});

Route::middleware('auth:sanctum')->group(function () {

    Route::get('email-verification-request', EmailVerificationRequestController::class)
        ->name('verification.notice');

    //Link email generato per la verifica dell'email
    Route::get('email-verification-request/{id}/{hash}', EmailVerificationController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
