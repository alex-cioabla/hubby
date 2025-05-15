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
    //Nella pagina login viene verificato se esiste la route password.forgot
    Route::view('password-forgot', 'app')->name('password.forgot');

    //Link email generato per il reset della password
    Route::view('/password-reset/{token}', 'app')->name('password.reset');
});

//CONTROLLI MIDDLEWARE AUTH E VERIFIED CON REACT
Route::view('dashboard', 'app')->name('dashboard');
Route::view('password-confirm', 'app');
Route::view('password-update', 'app');
Route::view('profile', 'app');
Route::view('email-verification-request', 'app');
//Link email generato per la verifica dell'email
Route::get('email-verification-request/{id}/{hash}', [EmailController::class, 'verify'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');
