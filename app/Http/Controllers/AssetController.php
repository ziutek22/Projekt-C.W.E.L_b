<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Asset;
use App\Models\User;
use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;
use Inertia\Inertia;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assets = Asset::query()->with('owner')->paginate(15);

        return Inertia::render('Assets/Index', [
            'assets' => $assets,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::query()->select('id', 'name')->get();

        return Inertia::render('Assets/Create', [
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request)
    {
        Asset::create($request->validated());

        return redirect()->route('assets.index')->with('success', 'Zasób został dodany.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        $asset->load(['owner', 'vulnerabilities', 'comments']);

        return Inertia::render('Assets/Show', [
            'asset' => $asset,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asset $asset)
    {
        $users = User::query()->select('id', 'name')->get();

        return Inertia::render('Assets/Edit', [
            'asset' => $asset,
            'users' => $users,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        $asset->update($request->validated());

        return redirect()->route('assets.index')->with('success', 'Zasób został zaktualizowany.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        $asset->delete();

        return redirect()->route('assets.index')->with('success', 'Zasób został usunięty.');
    }
}
