<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart($productid){

    if (!Auth::check()){
        return redirect()->route('login');
    }
    
    $cart = Cart::firstOrCreate([
        'user_id' => Auth::id()
    ]);

    $product = Product::findOrFail($productid);

    $item = CartItem::where('cart_id', $cart->id)->first();

    if ($item){
        $item->quantity += 1;
        $item->save();
    } else {
        CartItem::create([
            'cart_id' => $cart->id,
            'product_id' => $product->id,
            'quantity' => 1
        ]);
    }

    return back()->with('success', 'product added to cart');

    }

}