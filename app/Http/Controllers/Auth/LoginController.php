<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Contracts\View\View;

class LoginController extends Controller
{
    /**
     * Display the login view.
     */
    public function index(): View
    {
        return view('app');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {
        //Uso Auth::attempt solo per verificare l'utente
        //(la connessione dell'utente avviene tramite il personal access token)
        //Passo remember solo per averlo nel json della response e usarlo per setSession
        //$request->authenticate();
        //$token = $request->user()->createToken('PAT',  ['*'], now()->addWeek());

        $credentials = $request->only('email', 'password');
        $remember = $request->boolean('remember', false);

        if (!Auth::attempt($credentials, $remember)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $request->session()->regenerate();

        return response()->json(['message' => 'Login successfully'], 200);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        // Cancella il personal access token dell'utente
        //(non uso Auth::guard('web')->logout() perchè non ho nessuna sessione da terminare)
        //$request->user()->currentAccessToken()->delete();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
