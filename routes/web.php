<?php

use App\Http\Controllers\VulnerabilityController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\ThreatController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\DashboardController;

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
Route::resource('threats', ThreatController::class);
Route::resource('assets', AssetController::class);
Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

use App\Http\Controllers\CommentController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');
});




require __DIR__.'/settings.php';
