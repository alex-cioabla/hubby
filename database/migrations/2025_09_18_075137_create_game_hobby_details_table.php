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
        Schema::create('game_hobby_details', function (Blueprint $table) {
            $table->id();
            $table->json('platforms');
            $table->enum('status', ['played', 'not played', 'not completed'])->default('not played');
            $table->dateTime('started')->nullable();
            $table->dateTime('ended')->nullable();
            $table->time('play_time')->nullable();

            //Foreign key contraints
            $table->foreignId('user_hobby_id')->constrained();

            //Composite keys
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_hobby_details');
    }
};
