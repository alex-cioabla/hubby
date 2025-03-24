<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;

Route::get('/translations/{locale}', function ($locale) {

    App::setLocale($locale);
    return response()->json(['translations' => Lang::getAllTrans(), 'locale' => App::getLocale()]);
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
