<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use \Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\AppController;

class EmailVerificationController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(Request $request): \Illuminate\View\View
    {
        $user = User::findOrFail($request['id']);

        if ($user->hasVerifiedEmail()) {
            $appController = new AppController();
            return $appController->page('dashboard');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        $appController = new AppController();
        return $appController->page('dashboard');
    }
}
