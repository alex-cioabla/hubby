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
        Schema::create('categories', function (Blueprint $table) {
            $table->id(); //indicizzato perchè chiave primaria
            $table->string('name')->unique(); //indicizzato perchè campo univoco
            $table->foreignId('created_by');
            $table->foreign('created_by')->references('id')->on('users');
            $table->foreignId('updated_by');
            $table->foreign('updated_by')->references('id')->on('users');
            $table->foreignId('deleted_by');
            $table->foreign('deleted_by')->references('id')->on('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
