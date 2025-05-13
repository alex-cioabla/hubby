<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Facades\HubbyLang;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\EmailController;

Route::get('translations/{locale}', function ($locale) {

    App::setLocale($locale);
    return response()->json(['translations' => HubbyLang::getAllTrans(), 'locale' => App::getLocale()]);
});

Route::middleware('guest')->group(function () {
    Route::post('register', [RegisterController::class, 'store']);
    Route::post('login', [LoginController::class, 'store']);
    Route::post('password-forgot', [PasswordController::class, 'forgot']);
    Route::post('password-reset', [PasswordController::class, 'reset']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [LoginController::class, 'destroy']);

    Route::post('/email-verification-resend', [EmailController::class, 'resend'])
    ->middleware('throttle:6,1')->name('verification.send');

    Route::post('password-confirm', [PasswordController::class, 'confirm']);
    Route::put('password-update', [PasswordController::class, 'update']);

    Route::patch('user-update', [ProfileController::class, 'update']);
    Route::delete('user-delete', [ProfileController::class, 'destroy']);
});
