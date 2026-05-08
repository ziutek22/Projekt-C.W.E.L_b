<?php

use App\Http\Controllers\VulnerabilityController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

// zastąpione bo to na dole zastępuje 7 routow ktore bym musial kl,epac recznie -> wbudowana funkcja
//Route::controller(VulnerabilityController::class)->group(function () {
//    Route::get('vulnerabilities', 'index')->name('vulnerabilities.index');
//})

Route::resource('vulnerabilities', VulnerabilityController::class);

require __DIR__.'/settings.php';
