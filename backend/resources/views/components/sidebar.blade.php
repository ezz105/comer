<div id="sidebar"
    class="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white w-64 space-y-6 py-7 px-2 transition-all duration-300 ease-in-out fixed inset-y-0 left-0 shadow-xl z-20 flex flex-col">

    <!-- Collapse Button -->
    <button id="collapse-btn"
        class="absolute -right-3 top-6 w-7 h-7 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 focus:outline-none transition-all duration-200 shadow-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform duration-200"
            id="collapse-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
    </button>

    <!-- Logo -->
    <div class="flex-shrink-0">
        <a href="{{ route('home') }}" class="flex items-center space-x-2 px-4">
            <div
                class="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300">
                <span class="text-indigo-600 text-xl font-bold transition-all duration-300" id="logo-letter">D</span>
            </div>
            <span id="logo-text"
                class="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent transition-all duration-300">Dashboard</span>
        </a>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 mt-8 space-y-2 overflow-y-auto overflow-x-hidden">
        <x-sidebar-link :route="route('home')" :label="'Dashboard'" :icon="'dashboard'"
            :active="request()->routeIs('home')" />
        <x-sidebar-link :route="route('products.index')" :label="'Manage Products'" :icon="'shopping_cart'"
            :active="request()->routeIs('products.*')" />
        <x-sidebar-link :route="route('users.index')" :label="'Manage Users'" :icon="'group'"
            :active="request()->routeIs('users.*')" />
        <x-sidebar-link :route="route('categories.index')" :label="'Manage Categories'" :icon="'category'"
            :active="request()->routeIs('categories.*')" />

        <x-sidebar-link :route="route('vendors.index')" :label="'Manage Vendors'" :icon="'people'"
            :active="request()->routeIs('vendors.*')" />
        <x-sidebar-link :route="route('orders.index')" :label="'Orders'" :icon="'receipt_long'"
            :active="request()->routeIs('orders.*')" />


        <x-sidebar-link :route="route('analytics.index')" :label="'Analytics'" :icon="'bar_chart'"
            :active="request()->routeIs('analytics.*')" />
        <x-sidebar-link :route="route('settings')" :label="'Settings'" :icon="'settings'"
            :active="request()->routeIs('settings')" />
    </nav>

    <!-- Logout Section -->
    <div class="flex-shrink-0 mt-auto">
        <div class="border-t border-indigo-700 mb-4"></div>
        <x-sidebar-link :route="route('logout')" :label="'Logout'" :icon="'logout'" />
    </div>
</div>