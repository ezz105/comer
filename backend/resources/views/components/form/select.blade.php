@props([
    'name',
    'label',
    'options' => [],
    'required' => false
])

@php
    $defaultClasses = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300';
    $defaults = [
        'id' => $name,
        'name' => $name,
        'class' => $defaultClasses
    ];

    if ($required) {
        $defaults['required'] = true;
    }
@endphp

<div class="space-y-2">
    <x-form.label :for="$name">{{ $label }}</x-form.label>
    <select {{ $attributes->merge($defaults) }}>
        {{ $slot }}
    </select>
    @error($name)
        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
    @enderror
</div>
