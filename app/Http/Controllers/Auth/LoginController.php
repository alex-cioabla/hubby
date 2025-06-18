<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \Illuminate\Http\JsonResponse;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        //Uso Auth::attempt solo per verificare l'utente
        //(la connessione dell'utente avviene tramite il personal access token)
        //Passo remember solo per averlo nel json della response e usarlo per setSession
        $request->authenticate();
        $token = $request->user()->createToken('PAT',  ['*'], now()->addWeek());

        //oppure
        /* $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        } */

        return response()->json([
            'token' => $token->plainTextToken,
            'expires_at' => $token->accessToken->expires_at,
            'must_verify_email' => $request->user() instanceof MustVerifyEmail,
            'remember' =>  $request->boolean('remember'),
            'user' => [
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'email_verified_at' => $request->user()->email_verified_at
            ]
        ]);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): JsonResponse
    {
        // Cancella il personal access token dell'utente
        //(non uso Auth::guard('web')->logout() perchè non ho nessuna sessione da terminare)
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
