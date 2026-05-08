<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateThreatRequest extends FormRequest
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
            'name'          => ['required', 'string', 'max:225'],
            'type'          => ['required', 'in:malware,phishing,apt,ransomware,insider,ddos,other'],
            'severity'      => ['required', 'in:low,medium,high,critical'],
            'description'   => ['nullable', 'string'],
            'source'        => ['nullable', 'string', 'max:225'],
            'status'        => ['required', 'in:active,mitigated,monitoring,archived'],
            'first_seen_at' => ['nullable', 'date'],
            'last_seen_at'  => ['nullable', 'date', 'after_or_equal:first_seen_at'],
        ];
    }
}
