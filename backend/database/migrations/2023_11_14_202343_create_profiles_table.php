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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('rut');
            $table->string('fullname');
            $table->string('description', 4500);
            $table->integer('age');
            $table->string('location');
            $table->string('occupation');
            $table->string('email');
            $table->string('phone');
            $table->string('facebook');
            $table->string('github');
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
