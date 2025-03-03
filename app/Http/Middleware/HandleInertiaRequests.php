<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App;
use Session;
use File;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => fn() => App::getLocale(),
            'translations' => fn() => $this->getAllTranslations()
        ];
    }

    private function getAllTranslations()
    {
        $locale = Session::get('locale', config('app.locale'));
        App::setLocale($locale);

        $langPath = base_path("lang/{$locale}");
        $translations = [];

        if (File::exists($langPath)) {
            foreach (File::files($langPath) as $file) {
                $name = pathinfo($file, PATHINFO_FILENAME);
                $translations[$name] = trans($name);
            }
        }

        return $translations;
    }
}
