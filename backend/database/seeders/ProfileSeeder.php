<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profile;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Profile::create([
            'rut' => "21.177.605-6",
            'fullname' => "Vicente Ignacio Alarcón Campillay",
            'description' => "Soy un estudiante de Ingeniería Civil en Computación e Informatica de la Universidad Católica del Norte. Actualmente estoy en mi tercer año de carrera, para ser especifico en el sexto semestre. Soy una persona que le gustan los desafios, aprender cosas nuevas, y que le gusta trabajar en equipo. Disfruto de programar, y de aprender nuevas tecnologias.",
            'age' => 20,
            'location' => "Antofagasta, Chile",
            'occupation' => "Estudiante",
            'email' => "vicente.alarcon@alumnos.ucn.cl",
            'phone' => "9 7777 7777",
            'facebook' => "https://www.facebook.com/vicente.alarcon.90",
            'github' => "https://github.com/VicenteA18UCN",
            'image' => "images/personal.jpg"
        ]);
    }
}
