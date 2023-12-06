<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('profile', [\App\Http\Controllers\ProfileController::class, 'profile']);
Route::put('profile', [\App\Http\Controllers\ProfileController::class, 'update']);
Route::put('interest/{id}', [\App\Http\Controllers\InterestController::class, 'update']);
Route::put('tool/{id}', [\App\Http\Controllers\ToolController::class, 'update']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
