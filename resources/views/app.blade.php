<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        <script>
            window.appconfig = {
                locale: "{{ app()->getLocale() }}",
                translations: @json(Lang::getAllTrans() ?? []),
                name: "{{ config('app.name') }}"
            };
        </script>
    </head>
    <body class="font-sans antialiased">
        <div id="root"></div>
    </body>
</html>
