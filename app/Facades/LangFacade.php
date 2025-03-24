<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class LangFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'lang-service';
    }
}
