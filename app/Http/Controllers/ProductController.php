<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'brand', 'images'])->paginate(12)->through(function ($product) {
            return [
                'title' => $product->name,
                'subtitle' => $product->subtitle,
                'sku' => $product->sku,
                'description' => $product->description,
                'quantity' => $product->quantity,
                'wieght' => $product->weight,
                'unit' => $product->unit,
                'oldPrice' => $product->price,
                'discount' => $product->discount,
                'price' => $product->discount ? $product->price - ($product->price * $product->discount) : null,
                'rating' => $product->rating,
                'isHotDeal' => $product->is_hot_deal,
                'isFeatured' => $product->is_featured,
                'images' => $product->images->first()?->image_url ?? '/images/palceholder.jpg',
                'category' => $product->category?->name,
                'brand' => $product->brand?->name,
            ];
        });

        return Inertia::render('Shop/Index', [
            'products' => $products,
        ]);
    }

    public function show($id)
    {
        $product = Product::with(['category', 'brand', 'images', 'reviews', 'attributes'])->findOrFail($id);

        return Inertia::render('ProductDetails/Index', [
            'product' => $product,
        ]);
    }
}
