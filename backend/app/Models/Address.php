<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /** @use HasFactory<\Database\Factories\AddressFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'phone', 'address_line1', 'address_line2',
        'city', 'state', 'postal_code', 'country', 'is_default', 'type'
    ];

    protected $casts = [
        'is_default' => 'boolean',
    ];
}
