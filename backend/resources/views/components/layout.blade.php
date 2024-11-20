<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title ?? 'Home' }}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Alpine.js For List item three points list  -->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

    <div class="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <x-sidebar />

        <div id="main-content" class="flex-1 gap-4 flex flex-col  transition-all duration-300 ease-in-out
                w-full">
            <x-navbar />

            <main class="p-6 space-y-6 overflow-y-auto overflow-x-hidden">
                {{ $slot }}
            </main>
        </div>
    </div>

    <script>

    </script>

</body>

</html>
