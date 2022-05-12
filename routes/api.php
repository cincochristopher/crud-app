<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);


Route::middleware('auth:sanctum')->group(function () {

	Route::get('/todos', [TodoController::class, 'index']);
	
	Route::get('/todos/{id}', [TodoController::class, 'index']);

	Route::post('/todos', [TodoController::class, 'store']);

	Route::put('/todos/{id}', [TodoController::class, 'update']);

	Route::delete('/todos/{id}', [TodoController::class, 'destroy']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/logout', [AuthController::class, 'logout']);
});
