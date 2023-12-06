<?php

namespace App\Http\Controllers;
use App\Models\Interest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class InterestController extends Controller
{
    public function update(Request $request, int $id)
    {
        $fields = $request->validate(([
            'name' => 'required',
            'description' => 'required'
        ]));

        try {
            DB::beginTransaction();
            $interest = Interest::where('id', $id)->update([
                'name' => $fields['name'],
                'description' => $fields['description']
            ]);
            $interest = Interest::find($id);
            DB::commit();
            return response()->json([
                'message' => 'Interest updated successfully',
                'interest' => $interest
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }
}
