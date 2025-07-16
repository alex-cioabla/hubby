<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\EmailController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\RegisterController;

//Pages
Route::get('register', [RegisterController::class, 'index']);
Route::get('login', [LoginController::class, 'index']);
Route::get('password-forgot', [PasswordController::class, 'forgotIndex'])->name('password.forgot');
Route::get('password-reset/{token}', [PasswordController::class, 'resetIndex'])->name('password.reset'); //Link email generato per il reset della password

//API
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [LoginController::class, 'store']);
Route::post('password-forgot', [PasswordController::class, 'forgot']);
Route::post('password-reset', [PasswordController::class, 'reset']);

//Pages
Route::get('password-confirm', [PasswordController::class, 'conformIndex']);
Route::get('password-update', [PasswordController::class, 'updateIndex']);
Route::get('email-verification-request', [EmailController::class, 'index']);
Route::get('email-verification-request', [EmailController::class, 'request']);
Route::get('email-verification-request/{id}/{hash}', [EmailController::class, 'verify'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify'); //Link email generato per la verifica dell'email

//API
Route::middleware('auth')->group(function () {
    Route::post('logout', [LoginController::class, 'destroy']);
    Route::post('email-verification-resend', [EmailController::class, 'resend'])
        ->middleware('throttle:6,1')->name('verification.send');
    Route::post('password-confirm', [PasswordController::class, 'confirm']);
});

//React
Route::get('session', function (): JsonResponse {
    return response()->json([
        'status' => session('status'),
        'user' => auth()->user()
    ], 200);
})->middleware(['auth']);

Route::get('auth', function () : JsonResponse{
    return response()->json(auth()->check(), 200);
})->middleware(['auth']);

Route::get('verified', function (): JsonResponse {
    return response()->json(auth()->user()->hasVerifiedEmail(), 200);
})->middleware(['verified']);

