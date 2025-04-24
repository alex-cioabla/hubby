<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;

class EmailVerificationRequestController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Email already verified.',
                'verified' => true,
            ], 200);
        }

        //Inertia::render('Auth/VerifyEmail', ['status' => session('status')])
        return response()->json([
            'message' => 'Email not verified. Please verify your email.',
            'verified' => false,
        ], 200);
    }
}
