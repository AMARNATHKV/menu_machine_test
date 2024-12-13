'use client';

import { useEffect, useState } from 'react';

interface Item {
  _id: string;
  name: string;
  description: string;
  price: number;
}

interface ItemListProps {
  menuId: string;
}

export default function ItemList({ menuId }: ItemListProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch(`/api/items?menuId=${menuId}`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    }
    fetchItems();
  }, [menuId]);

  return (
    <div className="mt-6 px-4 sm:px-8">
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item._id}
            className=" rounded-lg shadow-lg p-6 max-w-lg mx-auto flex flex-col space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out bg-black"
          >
            {/* Item Name, Dotted Line, and Price */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              <span className="flex-grow border-b border-dotted mx-3"></span>
              <span className="text-lg font-medium text-white">${item.price}</span>
            </div>
            {/* Description */}
            <p className="text-sm text-white mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
