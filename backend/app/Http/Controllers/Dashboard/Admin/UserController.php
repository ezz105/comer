<?php

namespace App\Http\Controllers\Dashboard\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of all users
     */
    public function index()
    {
        $users = User::with('role')->get();
        return response()->json([
            'status' => 'success',
            'users' => $users
        ]);
    }

    /**
     * Store a newly created user
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role_id' => 'required|exists:roles,id',
            'phone_number' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
            'phone_number' => $request->phone_number
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }

    /**
     * Display the specified user
     */
    public function show($id)
    {
        $user = User::with('role')->find($id);
        
        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'user' => $user
        ]);
    }

    /**
     * Update the specified user
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $id,
            'role_id' => 'exists:roles,id',
            'phone_number' => 'string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $user->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'User updated successfully',
            'user' => $user
        ]);
    }

    /**
     * Remove the specified user
     * 
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        try {
            \DB::beginTransaction();
            
            if ($request->get('force', false)) {
                // Delete related data in the correct order to avoid foreign key constraints
                // 1. Delete cart items first
                if ($user->cart) {
                    $user->cart->cartItems()->delete(); // Delete cart items first
                    $user->cart->delete(); // Then delete the cart
                }
                
                // 2. Delete orders and their relationships
                foreach ($user->orders as $order) {
                    $order->items()->delete(); // Delete order items first
                    $order->delete();
                }
                
                // 3. Delete products
                $user->products()->delete();
                
                // 4. Delete addresses
                $user->addresses()->delete();
                
                // 5. Delete user profile
                if ($user->Userprofile) {
                    $user->Userprofile->delete();
                }
                
                // Finally, delete the user
                $user->forceDelete();
                $message = 'User and all associated data permanently deleted successfully';
            } else {
                // Soft delete the user
                $user->delete();
                $message = 'User soft deleted successfully';
            }
            
            \DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => $message
            ]);

        } catch (\Exception $e) {
            \DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete user. ' . $e->getMessage()
            ], 500);
        }
    }
}
