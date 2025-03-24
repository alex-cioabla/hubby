<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Lang;

Route::group(['prefix' => '{locale}', 'where' => ['locale' => 'en|it']], function () {
    Route::get('/{page}', function ($locale, $page) {

        $allowedPages = ['library'];
        if (!in_array($page, $allowedPages)) {
            abort(404);
        }

        Lang::setLocale($locale);
        return view('app');
    });

    Route::get('/', function ($locale) {
        return view('app');
    });
});

Route::get('/{page}', function ($page) {

    $allowedPages = ['library'];
    if (!in_array($page, $allowedPages)) {
        abort(404);
    }

    return view('app');
});

Route::get('/', function () {
    return view('app');
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
