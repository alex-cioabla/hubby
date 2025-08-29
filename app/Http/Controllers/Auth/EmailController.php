<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\URL;

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
        // // Verifica manuale della firma (equivalente al middleware 'signed')
        // if (!URL::hasValidSignature($request)) {
        //     return response()->json([
        //         'message' => 'Invalid verification link.',
        //     ], 400);
        // }
        // // Verifica che l'hash corrisponda
        // $hash = $request->route('hash');
        // if (!hash_equals((string) $hash, sha1($request->user()->getEmailForVerification()))) {
        //     return response()->json([
        //         'message' => 'Invalid verification hash.',
        //     ], 400);
        // }

        if ($request->user()->hasVerifiedEmail()) {
            return response()->json('/user/profile?verified=1', 200);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
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

        $request->session()->put('status', 'erification-link-sent');
        return response()->json([
            'status' => 'verification-link-sent'
        ], 200);
    }
}
