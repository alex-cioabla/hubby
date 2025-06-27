<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'app');
Route::view('library', 'app');
Route::view('rank', 'app');
Route::view('shop', 'app');

//CONTROLLI MIDDLEWARE AUTH E VERIFIED CON REACT
Route::view('profile', 'app');
Route::view('dashboard', 'app')->name('dashboard');
