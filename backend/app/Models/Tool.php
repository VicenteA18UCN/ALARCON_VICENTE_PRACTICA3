<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'percentage',
        'profile_id'
    ];

    public function profiles()
    {
        return $this->belongsTo(Profile::class);
    }
}