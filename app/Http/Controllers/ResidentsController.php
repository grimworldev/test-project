<?php

namespace App\Http\Controllers;

use App\Models\Puroks;
use App\Models\Residents;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResidentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $puroks = Puroks::all();
        $residents = Residents::all();
        return Inertia::render('residents/index', [
            'puroks' => $puroks,
            'residents' => $residents,
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
        $validated = $request->validate([
            'first_name' => 'required | string| max:50',
            'last_name'=>'required | string| max:50',
            'purok_id' => 'required|int',
            ]);

        Residents::create($validated);

        return redirect()->route('residents.index')->with('success', 'Resident Registered');
    }

    /**
     * Display the specified resource.
     */
    public function show(Residents $residents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Residents $residents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Residents $residents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Residents $residents)
    {
        //
    }
}
