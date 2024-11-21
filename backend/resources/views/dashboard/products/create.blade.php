<x-layout>
    <x-slot name="title">
        Add New Product
    </x-slot>

    <x-panel>
        <div>
            <x-heading>Add New Product</x-heading>
        </div>
    </x-panel>
    <x-panel>
        <x-form.form action="{{ route('products.store') }}" enctype="multipart/form-data">

            <!-- Basic Product Information -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Product Name -->
                <x-form.input name="name" label="Product Name" placeholder="Enter product name" required />

                <!-- Slug -->
                <x-form.input name="slug" label="Slug" placeholder="Enter unique slug" required />
            </div>

            <!-- Description -->
            <x-form.textarea name="description" label="Description" placeholder="Enter product description" />

            <!-- Pricing & Inventory -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Price -->
                <x-form.input type="number" name="price" label="Price" placeholder="Enter product price" step="0.01"
                    required />

                <!-- Discount Price -->
                <x-form.input type="number" name="discount_price" label="Discount Price"
                    placeholder="Enter discount price (optional)" step="0.01" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Stock Quantity -->
                <x-form.input type="number" name="stock_quantity" label="Stock Quantity"
                    placeholder="Enter stock quantity" required />

                <!-- SKU -->
                <x-form.input name="sku" label="SKU" placeholder="Enter SKU" required />

                <!-- Status -->
                <x-form.select name="status" label="Status">
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="out_of_stock">Out of Stock</option>
                </x-form.select>
            </div>

            <!-- SEO Information -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Meta Title -->
                <div class="space-y-2">
                    <label for="meta_title" class="text-sm font-medium text-gray-700">Meta Title</label>
                    <input type="text" id="meta_title" name="meta_title" placeholder="Enter meta title (optional)"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300">
                </div>

                <!-- Meta Description -->
                <div class="space-y-2">
                    <label for="meta_description" class="text-sm font-medium text-gray-700">Meta Description</label>
                    <textarea id="meta_description" name="meta_description" rows="3"
                        placeholder="Enter meta description (optional)"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"></textarea>
                </div>
            </div>

            <!-- Product Images -->
            <!-- Product Images -->
            <div class="space-y-4">
                <div class="space-y-2">
                    <label for="images" class="text-sm font-medium text-gray-700">Upload Product Images</label>
                    <div class="flex items-center justify-center w-full">
                        <label for="images"
                            class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span>
                                    or drag and drop</p>
                                <p class="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 2MB each)</p>
                            </div>
                            <input type="file" id="images" name="images[]" multiple class="hidden" accept="image/*"
                                onchange="handleImageSelection(event)">
                        </label>
                    </div>
                </div>

                <!-- Image Preview Container -->
                <div id="image-preview-container" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <!-- Preview images will be added here -->
                </div>
            </div>

            <!-- Product Attributes -->
            <div class="space-y-4 border border-gray-300 rounded-lg p-4">
                <div class="flex items-center justify-between">
                    <label class="text-sm font-medium text-gray-700">Product Attributes</label>
                    <button type="button" id="add-attribute"
                        class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
                        Add Attribute
                    </button>
                </div>
                <div id="attributes-container" class="space-y-4">
                    <!-- Attributes will be dynamically added here -->
                </div>
            </div>
            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="submit"
                    class="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
                    Add Product
                </button>
            </div>
        </x-form.form>
    </x-panel>
</x-layout>