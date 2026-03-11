<?php

namespace App\Http\Controllers;

use App\Models\Puroks;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PuroksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $puroks = Puroks::all();
        return Inertia::render('puroks/index',[
            'puroks' => $puroks,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Puroks $puroks)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Puroks $puroks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Puroks $puroks)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Puroks $puroks)
    {
        //
    }
}
