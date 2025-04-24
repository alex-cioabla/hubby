<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmailVerificationResendController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): JsonResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'message' => 'Email successfully verified.',
                'verified' => true,
            ], 200);
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json([
            'status' => 'verification-link-sent'
        ], 200);
    }
}
