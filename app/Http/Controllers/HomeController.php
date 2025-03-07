<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }
}
