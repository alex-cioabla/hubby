<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use \Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Illuminate\Contracts\View\View;

class PasswordController extends Controller
{

    /**
     * Display the password reset link request view.
     */
    public function forgotIndex(): View
    {
        return view('app');
    }

    /**
     * Display the password reset view.
     */
    public function resetIndex(): View
    {
        return view('app');
    }

    public function confirmIndex(): View
    {
        return view('app');
    }

    public function updateIndex(): View
    {
        return view('app');
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function forgot(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            //return back()->with('status', __($status)); // (DA VERIFICARE)
            return response()->json([
                'status' => __($status)
            ]);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    /**
     * Handle an incoming new password request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function reset(Request $request): JsonResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            //return redirect()->route('login')->with('status', __($status)); // (DA VERIFICARE)
            return response()->json([
                'status' => __($status)
            ]);
        }-

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    /**
     * Confirm the user's password.
     */
    public function confirm(Request $request): JsonResponse
    {
        //Uso Auth::guard(name: 'web')->validate per validare le credenziali dell'utente connesso
        if (!Auth::guard(name: 'web')->validate([
                'email' => $request->user()->email,
                'password' => $request->password])
        ) {
            throw ValidationException::withMessages([
                'password' => __('auth.password'),
            ]);
        }

        //$request->session()->put('auth.password_confirmed_at', time()); //(DA VERIFICARE)
        return response()->json([
            'password_confirmed_at' => time()
        ]);
    }

    /**
     * Update the user's password.
     */
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', RulesPassword::defaults(), 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json([
            'message' => 'Password aggiornata con successo.'
        ]);
    }
}
