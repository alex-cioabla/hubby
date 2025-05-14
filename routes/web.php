<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\EmailController;

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
Route::view('dashboard', 'app')->name('dashboard');
//(DA VERIFICARE) $request->user()->hasVerifiedEmail() ? redirect()->intended(route('dashboard', absolute: false)) : Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
Route::view('email-verification-request', 'app');
Route::view('password-confirm', 'app');
Route::view('password-update', 'app');
Route::view('profile', 'app');
//Link email generato per la verifica dell'email
Route::get('email-verification-request/{id}/{hash}', EmailController::class)
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
