<?php

namespace App\Http\Controllers;

use App\Services\IGBDService;
use Illuminate\Http\Request;

class LibraryController extends Controller
{
    protected $igdb;

    public function __construct(IGBDService $igdb) {
        $this->igdb = $igdb;
    }

    public function games()
    {
        $games = $this->igdb->getGames();

        return response()->json($games);
    }
}
