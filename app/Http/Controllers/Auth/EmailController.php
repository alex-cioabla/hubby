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
    public function indexRequest(): View
    {
        return view('app');
    }

    public function indexVerify(): View
    {
        return view('app');
    }

    /**
     * Display the email verification prompt.
     */
    public function request(Request $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json('/user/profile', 200);
        }

        return response()->json('', 200);
    }

    /**
     * Mark the authenticated user's email address as verified.
     */
    public function verify(Request $request): JsonResponse
    {
        $user = User::findOrFail($request['id']);

        if ($user->hasVerifiedEmail()) {
            return response()->json('/user/profile?verified=1', 200);
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return response()->json('/user/profile?verified=1', 200);
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
