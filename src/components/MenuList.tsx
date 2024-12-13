'use client';

import { useEffect, useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

// Define the type for a menu
interface Menu {
  _id: string;
  name: string;
  description: string;
}

export default function MenuPage() {
  // Set the state type to an array of menus
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    async function fetchMenus() {
      const res = await fetch('/api/menus');
      const data: Menu[] = await res.json(); // Ensure the response is typed as Menu[]
      setMenus(data);
    }
    fetchMenus();
  }, []);

  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:px-8">
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-3xl font-bold text-white">Menu List</h1>
        <p className="text-gray-400 text-lg mt-2">Browse through our delicious menu options!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <div
            key={menu._id}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">{menu.name}</h2>
            <p className="text-gray-600 text-sm text-center">{menu.description}</p>

            {/* ItemForm is displayed once per menu */}
            <ItemForm menuId={menu._id} />

            {/* Render the list of items for the menu */}
            <ItemList menuId={menu._id} />
          </div>
        ))}
      </div>
    </div>
  );
}
