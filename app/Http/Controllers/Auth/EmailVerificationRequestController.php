<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;
use App\Http\Controllers\AppController;
use Illuminate\Contracts\View\View;

class EmailVerificationRequestController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): View
    {
        dd($request->user());
        $request->merge(['verified' => $request->user()->hasVerifiedEmail()]);

        $appController = new AppController();
        return $appController->page($request);
    }
}
