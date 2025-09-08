<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index(): View
    {
        return view('app');
    }

    public function settings(): View
    {
        return view('app');
    }

    public function library(): View
    {
        return view('app');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): JsonResponse
    {
        $user = $request->user();
        $user->fill($request->validated());

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        if ($request->has('name')) {
            $user->profile()->update(['name' => $request->input('name')]);
        }
        if ($request->has('surname')) {
            $user->profile()->update(['surname' => $request->input('surname')]);
        }

        return response()->json([
            'message' => 'Update profile success', 200
        ]);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): JsonResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        $user->delete();

        //Logout dell'utente
        Auth::logout();

        return response()->json(['message' => 'Profile deleted successfully'], 200);
    }
}
