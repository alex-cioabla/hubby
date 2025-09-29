<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LibraryController;

Route::get('/igdb/games', [LibraryController::class, 'games']);
