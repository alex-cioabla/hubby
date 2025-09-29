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
        Schema::create('list_hobby_items', function (Blueprint $table) {
            $table->id();

            //Foreign key contraints
            $table->foreignId('user_list_id')->constrained();
            $table->foreignId('user_hobby_id')->constrained();

            //Composite keys
            $table->unique(['user_list_id', 'user_hobby_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list_hobby_items');
    }
};
