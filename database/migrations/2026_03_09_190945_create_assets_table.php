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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('hostname', 255 );
            $table->string('ip_address', 45);
            $table->string('operating_system', 100)->nullable();
            $table->enum('asset_type', ['server', 'workstation', 'network_device', 'application', 'database', 'cloud_resource', 'other']);
            $table->enum('criticality', ['critical', 'high', 'medium', 'low'])->default('medium'); #jak wazny jest asset
            $table->foreignId('owner_id')->nullable()->constrained('users')->nullOnDelete();
            $table->text('description')->nullable();
            $table->string('location', 255)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
