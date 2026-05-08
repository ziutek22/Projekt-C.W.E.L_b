<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Threat;
use App\Http\Requests\StoreThreatRequest;
use App\Http\Requests\UpdateThreatRequest;
use Inertia\Inertia;

class ThreatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $threats = Threat::query()->paginate(15);

        return Inertia::render('Threats/Index', [
            'threats' => $threats,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Threats/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreThreatRequest $request)
    {
        Threat::create($request->validated());

        return redirect()->route('threats.index')->with('success', 'Zagrożenie zostało dodane.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Threat $threat)
    {
        $threat->load(['vulnerabilities', 'comments']);

        return Inertia::render('Threats/Show', [
            'threat' => $threat,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Threat $threat)
    {
        return Inertia::render('Threats/Edit', [
            'threat' => $threat,
        ]);
    }

        /**
     * Update the specified resource in storage.
     */
    public function update(UpdateThreatRequest $request, Threat $threat)
    {
        $threat->update($request->validated());

        return redirect()->route('threats.index')->with('success', 'Zagrożenie zostało zaktualizowane.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Threat $threat)
    {
        $threat->delete();

        return redirect()->route('threats.index')->with('success', 'Zagrożenie zostało usunięte.');
    }
}
