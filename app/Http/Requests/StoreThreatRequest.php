<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreThreatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'hostname'         => ['required', 'string', 'max:255'],
            'ip_address'       => ['required', 'string', 'max:45'],
            'operating_system' => ['nullable', 'string', 'max:100'],
            'asset_type'       => ['required', 'in:server,workstation,network_device,application,database,cloud_resource,other'],
            'criticality'      => ['required', 'in:critical,high,medium,low'],
            'owner_id'         => ['nullable', 'exists:users,id'],
            'description'      => ['nullable', 'string'],
            'location'         => ['nullable', 'string', 'max:255'],
        ];
    }
}
