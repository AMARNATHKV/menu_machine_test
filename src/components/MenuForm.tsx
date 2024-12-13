'use client';

import { useState } from 'react';

export default function MenuForm() {
  const [name, setName] = useState<string>(''); // Type the state as string
  const [description, setDescription] = useState<string>(''); // Type the state as string

  // Define the handleSubmit function with correct types
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch('/api/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });

      if (response.ok) {
        alert('Menu created successfully!'); // Show success prompt
        setName('');
        setDescription('');
      } else {
        alert('Failed to create menu. Please try again.'); // Show error prompt
      }
    } catch (error) {
      alert('An error occurred. Please try again later.'); // Show error prompt
      console.error('Error:', error);
    }
  }

  return (
    <>
      {/* Welcome Section with Black Background */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Welcome to the Menu Creation</h1>
          <p className="mt-4 text-lg sm:text-xl">Create your custom menu and start managing your items.</p>
        </div>
      </section>

      {/* Form Section with Background Image */}
      <section
        className="py-20 bg-cover bg-center opacity-100"
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/05/72/01/74/360_F_572017478_dmcuCoNwiq5Z0JXp1FcE0QmpiQUYm2xN.jpg)', // Replace with your image URL
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Create New Menu</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Menu Name"
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Create Menu
            </button>
          </form>
        </div>
      </section>
    </>
  );
}