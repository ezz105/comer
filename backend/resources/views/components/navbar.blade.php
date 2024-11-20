<header
    class="bg-white shadow-sm py-4 px-6 flex justify-between items-center backdrop-blur-sm bg-white/90 sticky top-0 z-10 w-full">
    <!-- Hamburger Menu -->
    <button id="hamburger" class="text-gray-600 hover:text-indigo-600 focus:outline-none lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>

    <!-- Search Bar -->
    <div class="hidden md:flex items-center flex-1 max-w-xl mx-auto">
        <div class="relative w-full">
            <input type="text" placeholder="Search..."
                class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-6">
        <!-- Notification Icon -->
        <button class="relative text-gray-600 hover:text-indigo-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>

        <!-- User Avatar -->
        <div class="flex items-center space-x-3 border-l pl-6 border-gray-200">
            <div class="flex flex-col items-end">
                <span class="text-gray-800 font-medium">John Doe</span>
                <span class="text-sm text-gray-500">Admin</span>
            </div>
            <img src="https://via.placeholder.com/40" alt="User Avatar"
                class="w-10 h-10 rounded-full ring-2 ring-indigo-500 ring-offset-2" />
        </div>
    </div>
</header>