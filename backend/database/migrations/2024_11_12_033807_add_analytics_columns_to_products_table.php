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
        Schema::table('products', function (Blueprint $table) {
            $table->integer('sales_count')->default(0)->after('price');
            $table->integer('view_count')->default(0)->after('sales_count');
            $table->decimal('average_rating', 3, 2)->default(0.00)->after('view_count');
            $table->integer('reviews_count')->default(0)->after('average_rating');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['sales_count', 'view_count', 'average_rating', 'reviews_count']);
        });
    }
};
