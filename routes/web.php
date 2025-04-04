<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;


Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
    Route::get('/{page?}', [AppController::class, 'locale_page']);
});

Route::get('/{page?}', [AppController::class, 'page']);

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

