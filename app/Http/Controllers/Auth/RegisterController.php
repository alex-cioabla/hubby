<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserProfile;
use App\Models\UserRole;
use Illuminate\Auth\Events\Registered;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index(): View
    {
        return view('app');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        DB::beginTransaction();

        try {
            $user = User::create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            UserProfile::create([
                'user_id' => $user->id,
                'name' => $request->name,
                'surname' => $request->surname
            ]);

            UserRole::create(['user_id' => $user->id,'role_id' => 1]);

            //Registered è una classe che rappresenta l'evento predefinito laravel di registrazione di un utente
            //SendEmailVerificationNotification è una classe che rappresenta il listener predefinito lavarel che ascolta l'evento registered (
            //event è un metodo predefinito di laravel che permette di lanciare un evento
            event(new Registered($user));
            //(fa partire l'azione di notifica via email della registrazione avvenuta)

            Auth::login($user);
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Registered successfully'
            ], 200);
        } catch (\Throwable $th) {
            DB::rollBack();

            \Log::error('Registration failed: '.$th->getMessage());

            return response()->json([
                 'message' => 'Registered successfully',
                 200
            ]);
        }

    }
}
