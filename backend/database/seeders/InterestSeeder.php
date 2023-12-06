<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Interest;

class InterestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Interest::create([
            'name' => "Desarrollo Web",
            'description' => "Actualmente me dedico a aprender diversas tecnologías de desarrollo Web, como HTML, CSS, JS. Además actualmente estoy en diversos proyectos de desarrollo, utilizando tecnologías como React, NodeJS, Express, Laravel, entre otras.",
            'profile_id' => 1,
            'image' => "images/Laravel.jpg"
        ]);

        Interest::create([
            'name' => "Música",
            'description' => "Me encanta la música, y actualmente toco guitarra. Me gusta escuchar música de todo tipo, pero particularmente escucho musica coreana.",
            'profile_id' => 1,
            'image' => NULL
        ]);

        Interest::create([
            'name' => "Desarrollo Web",
            'description' => "Soy un apasionado por diversos videojuegos, y me gusta jugarlos en mi tiempo libre. ¡Es gracias a este pasatiempo que entre a mi carrera!",
            'profile_id' => 1,
            'image' => NULL
        ]);
    }
}
