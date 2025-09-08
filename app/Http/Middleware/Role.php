<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $referer = $request->header('Referer');
        $path = parse_url($referer, PHP_URL_PATH);
        $segments = explode('/', trim($path, '/'));
        $area = $segments[0] ?? '';

        if (!Auth::user()->hasRole($area)) {
            return response()->json([
                'message' => 'Accesso negato. Non hai i permessi necessari per accedere a questa area.'
            ], 403);
            //abort(403, 'Accesso negato. Non hai i permessi necessari per accedere a questa area.');
        }

        return $next($request);
    }
}
