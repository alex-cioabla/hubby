<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Facades\HubbyLang;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\PasswordResetRequestController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\EmailVerificationResendController;

Route::get('translations/{locale}', function ($locale) {

    App::setLocale($locale);
    return response()->json(['translations' => HubbyLang::getAllTrans(), 'locale' => App::getLocale()]);
});

Route::middleware('guest')->group(function () {
    Route::post('register', [RegisterController::class, 'store']);
    Route::post('login', [LoginController::class, 'store']);
    Route::post('password-forgot', [PasswordResetRequestController::class, 'store']);
    Route::post('password-reset', [PasswordResetController::class, 'store'])->name('password.store');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'destroy']);

    Route::post('/email-verification-resend', [EmailVerificationResendController::class, 'store'])
    ->middleware('throttle:6,1')->name('verification.send');
});


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
