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
        Schema::create('threats', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', length: 225);
            $table->enum('type', ['malware', 'phishing', 'apt', 'ransomware', 'insider', 'ddos', 'other']);
            $table->enum('severity', ['low', 'medium', 'high', 'critical'])->default('medium');
            $table->text('description')->nullable();
            $table->string('source', length: 225)->nullable();
            $table->enum('status', ['active', 'mitigated', 'monitoring', 'archived'])->default('active');
            $table->date('first_seen_at')->nullable(); #kiedy zagrozenie realnie sie pojawilo
            $table->date('last_seen_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('threats');
    }
};
