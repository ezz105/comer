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
                <x-form.input
                    name="name"
                    label="Product Name"
                    placeholder="Enter product name"
                    required
                />

                <!-- Slug -->
                <x-form.input
                    name="slug"
                    label="Slug"
                    placeholder="Enter unique slug"
                    required
                />
            </div>

            <!-- Description -->
            <x-form.textarea
                name="description"
                label="Description"
                placeholder="Enter product description"
            />

            <!-- Pricing & Inventory -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Price -->
                <x-form.input
                    type="number"
                    name="price"
                    label="Price"
                    placeholder="Enter product price"
                    step="0.01"
                    required
                />

                <!-- Discount Price -->
                <x-form.input
                    type="number"
                    name="discount_price"
                    label="Discount Price"
                    placeholder="Enter discount price (optional)"
                    step="0.01"
                />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Stock Quantity -->
                <x-form.input
                    type="number"
                    name="stock_quantity"
                    label="Stock Quantity"
                    placeholder="Enter stock quantity"
                    required
                />

                <!-- SKU -->
                <x-form.input
                    name="sku"
                    label="SKU"
                    placeholder="Enter SKU"
                    required
                />

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
            <div class="space-y-2">
                <label for="images" class="text-sm font-medium text-gray-700">Upload Product Images</label>
                <input type="file" id="images" name="images[]" multiple
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300">
                <p class="text-xs text-gray-500">You can upload multiple images (JPEG, PNG).</p>
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
<script>
        const attributesContainer = document.getElementById('attributes-container');
        const addAttributeBtn = document.getElementById('add-attribute');

        addAttributeBtn.addEventListener('click', () => {
            const attributeRow = document.createElement('div');
            attributeRow.className = 'grid grid-cols-1 lg:grid-cols-2 gap-4';

            attributeRow.innerHTML = `
                <div>
                    <input type="text" name="attributes[name][]" placeholder="Attribute Name (e.g., RAM)"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        required>
                </div>
                <div class="flex items-center space-x-4">
                    <input type="text" name="attributes[value][]" placeholder="Value (e.g., 16GB)"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                        required>
                    <button type="button" class="text-red-600 hover:text-red-800" onclick="this.parentElement.parentElement.remove()">
                        Remove
                    </button>
                </div>
            `;

            attributesContainer.appendChild(attributeRow);
        });
    </script>
