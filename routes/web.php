<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ThreatController;
use App\Http\Controllers\VulnerabilityController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// NVD fetch - bez auth bo dane publiczne, chroniony tylko CSRF
Route::post('/vulnerabilities/fetch-nvd', [VulnerabilityController::class, 'fetchFromNvd'])
    ->middleware('web')
    ->name('vulnerabilities.fetch-nvd');

// Dashboard
Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

// Vulnerabilities - odczyt dla wszystkich zalogowanych, zapis dla analyst+admin, usuwanie tylko admin
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/vulnerabilities', [VulnerabilityController::class, 'index'])->name('vulnerabilities.index');
    Route::get('/vulnerabilities/{vulnerability}', [VulnerabilityController::class, 'show'])->name('vulnerabilities.show');

    Route::middleware('role:analyst|admin')->group(function () {
        Route::get('/vulnerabilities/create', [VulnerabilityController::class, 'create'])->name('vulnerabilities.create');
        Route::post('/vulnerabilities', [VulnerabilityController::class, 'store'])->name('vulnerabilities.store');
        Route::get('/vulnerabilities/{vulnerability}/edit', [VulnerabilityController::class, 'edit'])->name('vulnerabilities.edit');
        Route::put('/vulnerabilities/{vulnerability}', [VulnerabilityController::class, 'update'])->name('vulnerabilities.update');
    });

    Route::delete('/vulnerabilities/{vulnerability}', [VulnerabilityController::class, 'destroy'])
        ->middleware('role:admin')
        ->name('vulnerabilities.destroy');
});

// Threats
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/threats', [ThreatController::class, 'index'])->name('threats.index');
    Route::get('/threats/{threat}', [ThreatController::class, 'show'])->name('threats.show');

    Route::middleware('role:analyst|admin')->group(function () {
        Route::get('/threats/create', [ThreatController::class, 'create'])->name('threats.create');
        Route::post('/threats', [ThreatController::class, 'store'])->name('threats.store');
        Route::get('/threats/{threat}/edit', [ThreatController::class, 'edit'])->name('threats.edit');
        Route::put('/threats/{threat}', [ThreatController::class, 'update'])->name('threats.update');
    });

    Route::delete('/threats/{threat}', [ThreatController::class, 'destroy'])
        ->middleware('role:admin')
        ->name('threats.destroy');
});

// Assets
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/assets', [AssetController::class, 'index'])->name('assets.index');
    Route::get('/assets/{asset}', [AssetController::class, 'show'])->name('assets.show');

    Route::middleware('role:analyst|admin')->group(function () {
        Route::get('/assets/create', [AssetController::class, 'create'])->name('assets.create');
        Route::post('/assets', [AssetController::class, 'store'])->name('assets.store');
        Route::get('/assets/{asset}/edit', [AssetController::class, 'edit'])->name('assets.edit');
        Route::put('/assets/{asset}', [AssetController::class, 'update'])->name('assets.update');
    });

    Route::delete('/assets/{asset}', [AssetController::class, 'destroy'])
        ->middleware('role:admin')
        ->name('assets.destroy');
});

// Komentarze
Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [CommentController::class, 'destroy'])->name('comments.destroy');
});

// Zmiana jezyka
Route::post('/locale/{locale}', function (string $locale) {
    if (!in_array($locale, ['en', 'pl'])) {
        abort(400);
    }
    session(['locale' => $locale]);
    return back();
})->middleware('web')->name('locale.switch');

require __DIR__.'/settings.php';
