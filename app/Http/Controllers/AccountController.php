<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function indexDash(){
        $user = auth()->user();
        $addresses = $user->addresses()->first();

        return Inertia::render('Dashboard/Index', [
            'userd' => $user,
            'addressesd' => $addresses
        ]);
    }


    public function index(){
        $user = auth()->user();
        $addresses = $user->addresses()->first();
        
        return Inertia::render('Account/Settings', [
            'user' => $user,
            'addresses' => $addresses
        ]);


        
    }

    public function update(Request $request){
        $data = $request->validate([
            'firstName' => ['required', 'string', 'max:255'],
            'lastName' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'string', 'max:255'],
        ]);

        $user = auth()->user();

        $user->name = $data['firstName'];
        $user->lastname = $data['lastName'];
        $user->email = $data['email'];
        $user->phonenumber = $data['phone'];
        $user->profile_image = $data['image'];

        $user->save();

        return back();
    }

    public function updateDash(Request $request){
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'role'=> ['required', 'string', 'max:255'],
            'img' => ['nullable', 'string', 'max:255'],
        ]);

        $user = auth()->user();

        $user->name = $data['name'];
        $user->profile_image = $data['img'];

        $user->save();

        return back();
    }

    public function updateBilling(Request $request){
        $data = $request->validate([
            'firstName' => ['required', 'string', 'max:255'],
            'lastName' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'zipCode' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
        ]);

        $user = auth()->user();
        $addresses = $user->addresses()->first();

        $user->name = $data['firstName'];
        $user->lastname = $data['lastName'];
        $user->email = $data['email'];
        $user->phonenumber = $data['phone'];
        $addresses->address_text = $data['street'];
        $addresses->country = $data['country'];
        $addresses->city = $data['state'];
        $addresses->postal_code = $data['zipCode'];

        $user->save();
        $addresses->save();

        return back();
    }

    public function updateDashAdd(Request $request){
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
        ]);

        $user = auth()->user();
        $addresses = $user->addresses()->first();

        $user->name = $data['name'];
        $user->email = $data['email'];
        $addresses->address_text = $data['address'];
        $user->phonenumber = $data['phone'];


        $user->save();
        $addresses->save();

        return back();
    }

    public function updatePassword(Request $request)
    {
        $user = auth()->user();

        $request->validate([
            'currentPassword' => ['required'],
            'newPassword' => ['required', 'min:8'],
            'confirmPassword' => ['required', 'same:newPassword'],
        ]);

        if (!Hash::check($request->currentPassword, $user->password)) {
            return back()->withErrors([
                'currentPassword' => 'The current password is incorrect.',
            ]);
        }

        $user->password = Hash::make($request->newPassword);
        $user->save();

        return back()->with([
            'message' => 'Password updated successfully!',
        ]);
    }
}
