<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(){
        $user = auth()->user();
        $orders = $user->orders()->with('orderItem.Product')->get();

        return Inertia::render('OrderHistory/Index', [
            'orderso' => $orders,
        ]);
    }

    public function show($id)
    {
        $order = Order::with([
            'orderItem.Product.images',
            'billing',
            'shippingAddress',
        ])->findOrFail($id);

        $user = auth()->user();
        $address = $user->addresses()->first();

        return Inertia::render('OrderHistory/OrderDetails', [
            'order' => $order,
            'user' => $user,
            'address' => $address,
        ]);
    }
}
