<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'rut',
        'fullname',
        'description',
        'age',
        'location',
        'occupation',
        'email',
        'phone',
        'facebook',
        'github',
        'image'
    ];

    public function interests()
    {
        return $this->hasMany(Interest::class);
    }

    public function tools()
    {
        return $this->hasMany(Tool::class);
    }
}
