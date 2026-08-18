<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductUpload;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index');
});
Route::get('/product-details/{id}', [ProductController::class, 'show'])->name('product.details');


Route::get('/blogs', function () {
    return Inertia::render('Blog/Index');
});

Route::get('/blogs/singleBlog', function () {
    return Inertia::render('Blogs/SingleBlock');
});

Route::get('/shop', [ProductController::class, 'index'])->name('shop.products');

Route::middleware('auth')->group(function () {
    Route::post('/cart/add', [CartController::class, 'addToCart'])->name('cart.add');
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::patch('/cart/item/{id}', [CartController::class, 'updateQuantity'])->name('cart.update');
    Route::delete('/cart/item/{id}', [CartController::class, 'destroy'])->name('cart.destroy');
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::Post('/checkout/add/product/{id}', [CheckoutController::class, 'addToCheckout'])->name('add.checkout');
});



Route::get('/about', function () {
    return Inertia::render('About/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});


Route::get('/dashboard', [AccountController::class, 'indexDash'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/settings', [AccountController::class, 'index']);
    Route::put('/settings', [AccountController::class, 'update']);
    Route::put('/dashboardUpdate', [AccountController::class, 'updateDash']);
    Route::put('/dashboardUpdateAddress', [AccountController::class, 'updateDashAdd']);
    Route::put('/settings/billing', [AccountController::class, 'updateBilling']);
    Route::put('/settings/password', [AccountController::class, 'updatePassword'])->name('settings.password');
    Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('/order-details/{id}', [OrderController::class, 'show'])->name('order-details.show');
    Route::post('/wishlist', [WishlistController::class, 'store']);
    Route::get('/wishlist', [WishlistController::class, 'index']);
    Route::delete('/wishlist/{id}', [WishlistController::class, 'destroy']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () {
    return Inertia::render('Errors/NotFound')
        ->toResponse(request())
        ->setStatusCode(404);
});
require __DIR__.'/auth.php';

// fake routes
Route::get('/show-product/{product}', [SecondProduct::class, 'index'])->name('product.show');

Route::get('/product/{product}/edit', [SecondProduct::class, 'edit'])->name('product.edit');

Route::delete('/product/{product}', [SecondProduct::class, 'delete'])->name('product.delete');

Route::post('/product/upload', [ProductUpload::class, 'upload'])->name('product.upload');
Route::post('/product/upload/file', [ProductUpload::class, 'uploadFile'])->name('file.upload');

Route::get('/upload', [ProductUpload::class, 'show']);
