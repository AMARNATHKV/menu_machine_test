'use client';

import { useState } from 'react';

interface ItemFormProps {
  menuId: string;
}

export default function ItemForm({ menuId }: ItemFormProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ menuId, name, description, price }),
      });

      if (response.ok) {
        alert('Item added successfully!'); // Success prompt
        setName('');
        setDescription('');
        setPrice('');
      } else {
        alert('Failed to add item. Please try again.'); // Error prompt for failed response
      }
    } catch (error) {
      alert('An error occurred. Please try again later.'); // Error prompt for exceptions
      console.error('Error:', error);
    }
  }

  return (
    <div className="bg-blue-400 bg-opacity-50 bg-cover bg-center min-h-screen py-10 px-6 sm:px-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Item
        </h3>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}