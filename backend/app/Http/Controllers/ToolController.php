<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tool;
use Illuminate\Support\Facades\DB;

class ToolController extends Controller
{
    public function update(Request $request, int $id)
    {
        $fields = $request->validate(([
            'name' => 'required',
            'percentage' => 'required'
        ]));

        try {
            DB::beginTransaction();
            $interest = Tool::where('id', $id)->update([
                'name' => $fields['name'],
                'percentage' => $fields['percentage']
            ]);
            $tool = Tool::find($id);
            DB::commit();
            return response()->json([
                'message' => 'tool updated successfully',
                'tool' => $tool
            ]);
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }
}
