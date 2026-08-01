<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($auth()->user()->age < 18) {
            redirect('/');
        }

        if(!$auth()->user()->role == "Admin"){
            abort(403);
        }

        if(!$auth()->user()->email_verified_at){
            
        }

        return $next($request);
    }
}
