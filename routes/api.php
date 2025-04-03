<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use App\Facades\HubbyLang;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::get('/translations/{locale}', function ($locale) {

    App::setLocale($locale);
    return response()->json(['translations' => HubbyLang::getAllTrans(), 'locale' => App::getLocale()]);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::middleware('guest')->group(function () {
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});
