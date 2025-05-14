<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class RegisterController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        //Registered è una classe che rappresenta l'evento predefinito laravel di registrazione di un utente
        //SendEmailVerificationNotification è una classe che rappresenta il listener predefinito lavarel che ascolta l'evento registered (
        //event è un metodo predefinito di laravel che permette di lanciare un evento
        event(new Registered($user));
        //(fa partire l'azione di notifica via email della registrazione avvenuta)

        $token = $user->createToken('PAT', ['*'], now()->addWeek());

        return response()->json([
            'token' => $token->plainTextToken,
            'expires_at' => $token->accessToken->expires_at,
            'must_verify_email' => $user instanceof MustVerifyEmail,
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'email_verified_at' => $user->email_verified_at
            ]
        ]);
    }
}
