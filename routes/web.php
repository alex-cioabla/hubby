<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\JsonResponse;
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
Route::get('password-reset/{token}', [PasswordController::class, 'resetIndex'])->name('password.reset'); //Link email generato per il reset della password
Route::get('password-confirm', [PasswordController::class, 'conformIndex']);
Route::get('password-update', [PasswordController::class, 'updateIndex']);
Route::get('email-verification-request', [EmailController::class, 'indexRequest']);
Route::get('email-verification-request/{id}/{hash}', [EmailController::class, 'indexVerify'])->name('verification.verify'); //Link email generato per la verifica dell'email

//API
Route::post('register', [RegisterController::class, 'store']);
Route::post('login', [LoginController::class, 'store']);
Route::post('password-forgot', [PasswordController::class, 'forgot']);
Route::post('password-reset', [PasswordController::class, 'reset']);

Route::middleware('auth')->group(function () {
    Route::post('logout', [LoginController::class, 'destroy']);
    Route::post('email-verification-resend', [EmailController::class, 'resend'])
        ->middleware('throttle:6,1')->name('verification.send');
    Route::post('password-confirm', [PasswordController::class, 'confirm']);
});

//AREAS
Route::prefix('admin')->group(function () {
    //Pages
    Route::get('dashboard', [AdminController::class, 'index']);
});

Route::prefix('user')->group(function () {
    //Pages
    Route::get('profile', [UserController::class, 'index']);
    Route::get('settings', [UserController::class, 'settings']);

    //Api
    Route::middleware(['auth', 'role:user'])->group(function () {
        Route::patch('update', [UserController::class, 'update']);
        Route::delete('delete', [UserController::class, 'destroy']);
        Route::put('password-update', [PasswordController::class, 'update']);
    });
});

//REACT MIDDLEWARE
Route::get('auth', function () : JsonResponse{
    return response()->json(true, 200);
})->middleware(['auth']); //auth()->check()

Route::get('verified', function (): JsonResponse {
    return response()->json(true, 200);
})->middleware(['verified']); //auth()->user()->hasVerifiedEmail()

Route::get('role', function(){
    return response()->json(true, 200);
})->middleware('role');

//REACT GET
Route::get('session', function (\Illuminate\Http\Request $request): JsonResponse {
    return response()->json([
        'mustVerifyEmail' => $request->user() instanceof \Illuminate\Contracts\Auth\MustVerifyEmail,
        'status' => session('status'),
        'user' => \App\Models\User::with(['profile:user_id,name,surname'])->find(auth()->id())
    ], 200);
});

//REACT REDIRECT
Route::post('/email-verification-request', [EmailController::class, 'request']);
Route::post('/email-verification-request/{id}/{hash}', [EmailController::class, 'verify'])
    ->middleware(['signed', 'throttle:6,1']);
