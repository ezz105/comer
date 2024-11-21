<?php

use Illuminate\Support\Facades\Route;

use App\Models\Product;

// Dashboard Route ------

    Route::get('/', function () {
        return view('dashboard.home');
    })->name('home');


//Products Route -----------------------------------------------------------

    // index
    Route::get('/products', function () {

        $products = Product::paginate(10);
        return view('dashboard.products.index', compact('products'));

    })->name('products.index');

    //create
    Route::get('/products/create', function () {

        return view('dashboard.products.create');

    })->name('products.create');

    //show
    Route::get('/products/{product}', function (Product $product) {

        return view('dashboard.products.show', compact('product'));

    })->name('products.show');

    //store
    Route::post('/products', function () {

        return redirect()->route('products.index');
    })->name('products.store');


    Route::get('/products/{product}/edit', function (Product $product) {

        return view('dashboard.products.create', compact('product'));

    })->name('products.edit');



    Route::delete('/products/{product}', function (Product $product) {

        // $product->delete();
        return redirect()->route('products.index');

    })->name('products.destroy');


//End Products Route -----------------------------------------------------------


// Categories Route
Route::get('/categories', function () {
    return "Manage Categories"; // Replace with view('categories.index') when implemented
})->name('categories.index');





// Orders Route
Route::get('/orders', function () {
    return "Manage Orders"; // Replace with view('orders.index') when implemented
})->name('orders.index');

// Vendors Route
Route::get('/vendors', function () {
    return "Manage Vendors"; // Replace with view('vendors.index') when implemented
})->name('vendors.index');

// Customers Route
Route::get('/users', function () {
    return "Manage Users"; // Replace with view('users.index') when implemented
})->name('users.index');



// Analytics Route
Route::get('/analytics', function () {
    return "View Analytics"; // Replace with view('analytics.index') when implemented
})->name('analytics.index');

// Settings Route
Route::get('/settings', function () {
    return "Settings"; // Replace with view('settings.index') when implemented
})->name('settings');

// Logout Route
Route::post('/logout', function () {
    // Handle logout logic here (e.g., Auth::logout())
    return redirect()->route('home');
})->name('logout');
