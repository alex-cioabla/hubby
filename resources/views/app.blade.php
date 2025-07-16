<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-bs-theme="auto">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    <script>
        const appConfig = {!! json_encode([
            // -- DA VEDERE --
            // 'translations' => \App\Facades\HubbyLang::getAllTrans(),
            // 'locale' => \Illuminate\Support\Facades\Lang::getLocale(),
            'name' => config('app.name'),
            'canResetPassword' => \Illuminate\Support\Facades\Route::has('password.request'),
        ]) !!};

        // document.addEventListener("DOMContentLoaded", function () {
        //     const theme = localStorage.getItem('theme');
        //     if (theme) {
        //         document.documentElement.setAttribute('data-bs-theme', theme);
        //     }
        // });
    </script>

    {{-- Importo bootstrap via CDN (oppure uso package bootstrap react) perchè tramite import react non è compatibile --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</head>

<body class="font-sans antialiased">
    <div id="root"></div>
</body>

</html>
