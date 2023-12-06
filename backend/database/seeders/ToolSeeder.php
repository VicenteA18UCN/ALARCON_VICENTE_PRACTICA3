<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tool;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tool::create([
            'name' => "Git",
            'percentage' => 75,
            'profile_id' => 1
        ]);

        Tool::create([
            'name' => "Laravel",
            'percentage' => 65,
            'profile_id' => 1
        ]);

        Tool::create([
            'name' => "Express",
            'percentage' => 20,
            'profile_id' => 1
        ]);
        Tool::create([
            'name' => "Vue",
            'percentage' => 5,
            'profile_id' => 1
        ]);
    }
}
