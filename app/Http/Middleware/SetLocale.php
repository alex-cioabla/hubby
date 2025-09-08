<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\App;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->segment(1);

        if (in_array($locale, ['en', 'it'])) {
            // setLocale è una fx default di lavavel per impostazione la lingua
            //(altimenti la lingua resta quella di default, definita nel file env)
            App::setLocale($locale);
        }

        return $next($request);
    }
}
