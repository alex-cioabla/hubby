<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class HubbyLang extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'hubby-translator';
    }
}
