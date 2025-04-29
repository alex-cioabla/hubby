<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Lang;
use App\Facades\HubbyLang;
use Illuminate\Support\Facades\Route;

class AppController extends Controller
{
    const ROUTES = ['/', 'library', 'login', 'register', 'dashboard', 'forgot-password', 'reset-password', 'verify-email'];

    public function page($page = '/'){

        /* if (!in_array($page, self::ROUTES)) {
            abort(404);
        } */

        $config = $this->getConfig($page);

    return view('app',  /*compact('config')*/);
    }

    public function locale_page($locale = null, $page = '/')
    {
        if (!in_array($page, self::ROUTES)) {
            abort(404);
        }

        if ($locale) {
            Lang::setLocale($locale);
        }

        $config = $this->getConfig($page);


        return view('app',  compact('config'));
    }

    private function getConfig($page){
        $config = [
            'translations' => HubbyLang::getAllTrans(),
            'locale' => Lang::getLocale(),
            'name' => config(key: 'app.name')
        ];

        // switch ($page) {
        //     case 'login':
        //         $config['canResetPassword'] = Route::has('password.request');
        //         break;
        //     default:
        //         break;
        // }
        return $config;
    }
}
