<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AppController;
use App\Http\Controllers\Auth\EmailController;

// Route::get('email-verification-request', EmailVerificationRequestController::class)
//     ->name('verification.notice');

// Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
//     Route::get('/{page?}', [AppController::class, 'locale_page']);
// });

// Route::get('/{page?}', [AppController::class, 'page'])->where('page', '.*');

Route::view('/', 'app');
Route::view('library', 'app');
Route::view('rank', 'app');
Route::view('shop', 'app');

Route::middleware('guest')->group(function () {
    Route::view('login', 'app');
    Route::view('register', 'app');
    Route::view('password-forgot', 'app');

    //Link email generato per il reset della password
    Route::view('/password-reset/{token}', 'app')->name('password.reset');
});

//CONTROLLI AUTH REACT
//(DA FARE) ->middleware(['verified'])
Route::view('dashboard', 'app')->name('dashboard');
//(DA FARE) $request->user()->hasVerifiedEmail() ? redirect()->intended(route('dashboard', absolute: false)) : Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
Route::view('email-verification-request', 'app');
Route::view('password-confirm', 'app');
Route::view('password-update', 'app');
Route::view('profile', 'app');

//CONTROLLI LARAVEL
//Link email generato per la verifica dell'email
Route::get('email-verification-request/{id}/{hash}', EmailController::class)
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
Route::get('profile', ProfileController::class);

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });
