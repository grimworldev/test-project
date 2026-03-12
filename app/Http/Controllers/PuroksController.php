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
    public function index(Request $request)
    {
        //
        $filter = $request->query('filter', 'active');
        $puroks = match ($filter) {
            'inactive'  => Puroks::onlyTrashed()->get(),
            'all'       => Puroks::withTrashed()->get(),
            default     => Puroks::all(),
        };
        // $puroks = Puroks::all();
        return Inertia::render('puroks/index', [
            'puroks' => $puroks,
            'filter' => $filter,
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
            'name' => 'required|string|max:35|unique:puroks,name'
        ]);


        Puroks::create($validated);

        return redirect()->route('puroks.index')->with('sucess', 'Purok created successfully.');

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
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:35|unique:puroks,name,' . $id,
        ]);
        $puroks = Puroks::find($id);
        $puroks->update($validated);
        return redirect()->route('puroks.index')->with('sucess', 'Purok updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $purok = Puroks::find($id);
        $purok->delete();

        return redirect()->route('puroks.index')->with('success', 'Purok deleted successfully.');
    }
}
