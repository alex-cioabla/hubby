<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\EmailController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Auth;

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
Route::prefix('user')->group(function () {
    Route::middleware(['auth', 'role'])->group(function () {
        Route::patch('update', [UserController::class, 'update']);
        Route::delete('delete', [UserController::class, 'destroy']);
        Route::put('password-update', [PasswordController::class, 'update']);
    });
});

Route::prefix('admin')->group(function(){
    Route::middleware(['auth', 'role'])->group(function(){
        // Route::get('get/categories', [CategoryController::class, 'index']);
        // Route::post('insert/category', [CategoryController::class, 'store']);
       Route::resource('api/categories', CategoryController::class);
    });
});

//REACT MIDDLEWARE
Route::get('auth', function () : JsonResponse{
    //     if (Auth::check() && !Auth::viaRemember()) {
    //         return response()->json(false, 401);
    // }
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
    $user = \App\Models\User::with('profile:user_id,name,surname')->find(auth()->id());
    $user->role_names = $user->roles()->pluck('name');
    return response()->json([
        'mustVerifyEmail' => $request->user() instanceof \Illuminate\Contracts\Auth\MustVerifyEmail,
        'status' => session('status'),
        'user' => $user
    ], 200);
});

//REACT REDIRECT
Route::post('/email-verification-request', [EmailController::class, 'request']);
Route::post('/email-verification-request/{id}/{hash}', [EmailController::class, 'verify'])->middleware(['throttle:6,1']);
