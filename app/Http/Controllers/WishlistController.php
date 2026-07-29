<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wishlist;
use Inertia\Inertia;

class WishlistController extends Controller
{
    public function store(Request $request)
    {
        $exists = Wishlist::where('product_id', $request->product_id)
        ->where('user_id', 1)
        ->first();

        if($exists){
            return redirect()->back()->with(
                'message', 'Already in Wishlist!'
            );
        }

        Wishlist::create([
            'product_id' => $request->product_id,
            'user_id' => 1,
        ]);

        return redirect()->back()->with(
            'message', 'Added to wishlist!'
        );

        // session()->flash('message', 'Added to wishlist');
        // dd(session()->get('message'));
    }

    public function index()
    {
        $wishlists = Wishlist::with('product')->get();
        
        return Inertia::render('Wishlist/Index', [
            'wishlists' => $wishlists
        ]);
    }
}
