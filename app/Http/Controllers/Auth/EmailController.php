<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;

class EmailController extends Controller
{
    public function index(): View
    {
        return view('app');
    }


    /**
     * Display the email verification prompt.
     */
    public function request(Request $request): RedirectResponse
    {
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->intended('/profile')
                    : view(view: 'app');
    }

    /**
     * Mark the authenticated user's email address as verified.
     */
    public function verify(Request $request): RedirectResponse
    {
        $user = User::findOrFail($request['id']);

        if ($user->hasVerifiedEmail()) {
            return redirect()->intended('/user/profile?verified=1');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect()->intended('/user/profile?verified=1');
    }

    /**
     * Send a new email verification notification.
     */
    public function resend(Request $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Email successfully verified.',
                'verified' => true,
            ], 200);
        }

        $request->user()->sendEmailVerificationNotification();

        // return back()->with('status', 'verification-link-sent'); //(DA VERIFICARE)
        return response()->json([
            'status' => 'verification-link-sent'
        ], 200);
    }
}
