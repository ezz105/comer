@props(['for'])

<label {{ $attributes->merge(['class' => 'text-sm font-medium text-gray-700']) }} for="{{ $for }}">
    {{ $slot }}
</label>