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
        Schema::create('user_hobbies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hobby_id');
            $table->string('tier')->nullable();
            // (DA VEDERE)
            $table->enum('status', ['bought', 'sold']);
            $table->float('cost')->nullable();
            $table->dateTime('purchase_date')->nullable();
            $table->string('shop')->nullable();
            
            $table->timestamps();

            //Foreign key contraints
            $table->foreignId('user_id')->constrained();
            $table->foreignId('category_id')->constrained();

            //Composite keys
            $table->unique(['user_id', 'hobby_id', 'category_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_hobbies');
    }
};
