<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vulnerabilities', function (Blueprint $table) {
            $table->id();
            $table->string('cve_id', length: 20)->unique()->nullable();
            $table->string('title', length: 225);
            $table->text('description')->nullable();
            $table->enum('severity', ['low', 'medium', 'high', 'critical'])->default('medium');
            $table->decimal('cvss_score', total: 3, places: 1)->nullable(); #decimal bo float ma problemy z zaokraglaniem
            $table->enum('status', ['open', 'in_progress', 'resolved', 'false_positive'])->default('open');
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete(); #koluma assigned_to z foreign_key
            $table->string('source', length: 225)->nullable();
            $table->date('discovered_at')->nullable(); #kiedy odkryto podatnosc
            $table->timestamps(); #wpis do systemu i update
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vulnerabilities');
    }
};
