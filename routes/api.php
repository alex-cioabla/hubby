<?php

use App\Http\Controllers\Auth\PasswordResetLinkController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Facades\HubbyLang;
use App\Http\Controllers\Auth\AuthenticatedController;

Route::get('/translations/{locale}', function ($locale) {

    App::setLocale($locale);
    return response()->json(['translations' => HubbyLang::getAllTrans(), 'locale' => App::getLocale()]);
});

Route::middleware('guest')->group(function () {
    Route::post('login', [AuthenticatedController::class, 'store']);
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthenticatedController::class, 'destroy']);
});


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
